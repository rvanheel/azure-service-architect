const { test, expect } = require('@playwright/test');
const path = require('node:path');
const fs = require('node:fs');
const vm = require('node:vm');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'questions.js'), 'utf8'), context);
const blocks = context.window.QUIZ_BLOCKS;
const bank = blocks.flatMap(b => b.questions);
const start = async page => {
  await page.goto('/');
  await page.locator('#start').click();
};
const choose = (page, q, correct = true) => page.locator(`[data-choice="${correct ? q.answer : (q.answer + 1) % 4}"]`).click();

test('vragenbank heeft 152 unieke onderbouwde vragen en alle architectuurblokken', async () => {
  expect(blocks).toHaveLength(9);
  expect(bank).toHaveLength(152);
  expect(new Set(bank.map(q => q.id)).size).toBe(152);
  expect(new Set(bank.map(q => q.prompt)).size).toBe(152);
  expect(new Set(bank.map(q => q.topic)).size).toBe(38);
  const counts = [0, 0, 0, 0];
  for (const q of bank) {
    expect(q.options).toHaveLength(4);
    expect(new Set(q.options).size).toBe(4);
    expect(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4).toBeTruthy();
    expect(q.explanation.length).toBeGreaterThan(60);
    const source = new URL(q.source);
    expect(source.protocol).toBe('https:');
    expect(source.hostname).toBe('learn.microsoft.com');
    counts[q.answer]++;
  }
  expect(counts).toEqual([38, 38, 38, 38]);
});

test('mobiele startpagina, onderwerpen en vraag passen zonder horizontaal scrollen', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Azure');
  await expect(page.locator('.block')).toHaveCount(9);
  await page.locator('.block summary').first().click();
  await expect(page.locator('.block').first()).toHaveAttribute('open', '');
  await page.locator('#start').click();
  await expect(page.locator('h1')).toHaveText(bank[0].prompt);
  await expect(page.locator('[data-choice]')).toHaveCount(4);
  for (const width of [320, 402, 874, 1280]) {
    await page.setViewportSize({ width, height: 874 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  }
  for (const button of await page.locator('[data-choice]').all()) {
    expect((await button.boundingBox()).height).toBeGreaterThanOrEqual(44);
  }
  expect(errors).toEqual([]);
});

test('fout na voortgang toont juiste antwoord en bron, en herstart verplicht bij vraag 1', async ({ page }) => {
  await start(page);
  await choose(page, bank[0]);
  await expect(page.locator('#feedback')).toContainText('Goed gekozen.');
  await page.locator('#next').click();
  await choose(page, bank[1], false);
  await expect(page.locator('#feedback')).toContainText(bank[1].options[bank[1].answer]);
  await expect(page.locator('#feedback a')).toHaveAttribute('href', bank[1].source);
  await expect(page.locator('[data-choice]:disabled')).toHaveCount(4);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('azure-architect-progress-v1')).index)).toBe(0);
  await page.reload();
  await page.locator('#start').click();
  await expect(page.locator('#feedback')).toContainText('teruggezet naar 0');
  await page.locator('#next').click();
  await expect(page.locator('h1')).toHaveText(bank[0].prompt);
  await expect(page.locator('.stat')).toContainText('Ronde 2');
  await expect(page.locator('.stat')).toContainText('Record 1');
});

test('hervat voortgang en bewaar correcte feedback na herladen', async ({ page }) => {
  await start(page);
  await choose(page, bank[0]);
  await page.reload();
  await page.locator('#start').click();
  await expect(page.locator('#feedback')).toContainText(bank[0].explanation);
  await page.locator('#next').click();
  await page.reload();
  await page.locator('#start').click();
  await expect(page.locator('h1')).toHaveText(bank[1].prompt);
});

test('herstartbevestiging kan annuleren en behoudt het record', async ({ page }) => {
  await start(page);
  await choose(page, bank[0]);
  await page.locator('#next').click();
  await page.locator('#restart').click();
  await expect(page.locator('dialog')).toBeVisible();
  await page.locator('#cancel-restart').click();
  await expect(page.locator('h1')).toHaveText(bank[1].prompt);
  await page.locator('#restart').click();
  await page.locator('#confirm-restart').click();
  await expect(page.locator('h1')).toHaveText(bank[0].prompt);
  await expect(page.locator('.stat')).toContainText('Record 1');
});

test('quiz werkt als localStorage geblokkeerd is', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => { throw new Error('blocked'); };
    Storage.prototype.getItem = () => { throw new Error('blocked'); };
  });
  await start(page);
  await expect(page.locator('.storage-notice')).toBeVisible();
  await choose(page, bank[0], false);
  await page.locator('#next').click();
  await expect(page.locator('h1')).toHaveText(bank[0].prompt);
});

test('beschadigde opgeslagen voortgang breekt de quiz niet', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.setItem('azure-architect-progress-v1', '{broken'));
  await page.reload();
  await page.locator('#start').click();
  await expect(page.locator('h1')).toHaveText(bank[0].prompt);
});

test('toetsenbordbediening verplaatst focus naar uitleg en volgende vraag', async ({ page }) => {
  await start(page);
  await page.locator(`[data-choice="${bank[0].answer}"]`).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#feedback h2')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('#feedback a')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('#next')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('h1')).toBeFocused();
  await expect(page.locator('h1')).toHaveText(bank[1].prompt);
});

test('volledige route doorloopt 152 vaste vragen en bewaart eindresultaat', async ({ page }) => {
  test.setTimeout(180000);
  await start(page);
  for (const q of bank) {
    await expect(page.locator('h1')).toHaveText(q.prompt);
    await choose(page, q);
    await expect(page.locator('#feedback')).toContainText('Goed gekozen.');
    await page.locator('#next').click();
  }
  await expect(page.locator('.finish')).toContainText('152/152');
  await page.reload();
  await page.locator('#start').click();
  await expect(page.locator('.finish')).toContainText('152/152');
  await page.locator('#finish-restart').click();
  await page.locator('#confirm-restart').click();
  await expect(page.locator('h1')).toHaveText(bank[0].prompt);
});
