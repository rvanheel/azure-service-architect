'use strict';
(() => {
  const blocks = window.QUIZ_BLOCKS;
  const questions = blocks.flatMap(block => block.questions.map(question => ({ ...question, block })));
  const total = questions.length;
  const blockStart = index => questions.findIndex(q => q.block.id === questions[index].block.id);
  const KEY = 'azure-architect-progress-v1';
  // Invalidates saved positions when the question bank changes, including answer order.
  const bankVersion = JSON.stringify(blocks).split('').reduce((hash, char) => (Math.imul(31, hash) + char.charCodeAt(0)) | 0, 0);
  const main = document.querySelector('main');
  const dialog = document.querySelector('dialog');
  let storageAvailable = true;
  const initial = () => ({ bankVersion, index: 0, attempts: 1, best: 0, streak: 0, usedBlockRestart: false, feedback: null, started: false, completed: false });
  let state = initial();
  const integer = (value, min, max) => Number.isInteger(value) && value >= min && value <= max;
  try {
    let saved;
    const raw = localStorage.getItem(KEY);
    try { saved = JSON.parse(raw); } catch { saved = null; }
    if (saved && saved.bankVersion === bankVersion && integer(saved.index, 0, total - 1) && integer(saved.attempts, 1, Number.MAX_SAFE_INTEGER) && integer(saved.best, 0, total) && typeof saved.started === 'boolean' && typeof saved.completed === 'boolean') {
      const f = saved.feedback;
      const validFeedback = f === null || (f && integer(f.index, 0, total - 1) && integer(f.choice, 0, 3) && (questions[f.index].answer === f.choice ? saved.index === f.index : saved.index === 0));
      if (validFeedback) {
        // Migrate sessions saved before block retries existed; old records were consecutive.
        const legacyStreak = saved.completed ? total : f ? (f.choice === questions[f.index].answer ? f.index + 1 : 0) : saved.index;
        state = { ...saved,
          streak: integer(saved.streak, 0, total) ? saved.streak : legacyStreak,
          usedBlockRestart: saved.usedBlockRestart === true,
        };
      }
    }
  } catch { storageAvailable = false; }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { storageAvailable = false; }
  }
  function escape(value) { return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]); }
  function notice() { return storageAvailable ? '' : '<p class="storage-notice" role="status">Je browser kan voortgang niet bewaren. Je kunt wel oefenen; houd deze pagina open.</p>'; }
  function focusHeading() { const heading = main.querySelector('h1'); heading.tabIndex = -1; heading.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' }); }
  function currentNumber() { return (state.feedback?.index ?? state.index) + 1; }
  function renderHome() {
    main.innerHTML = `${notice()}<section class="hero"><div><p class="eyebrow">Van cloudkennis naar ontwerpkeuzes</p><h1>Denk als een<br>Azure <span>architect.</span></h1><p class="intro">Welke component kies je, waarom, en wanneer juist niet? Train je beslissingen met herkenbare automotive-scenario’s.</p><div class="tags"><span class="tag">${total} vaste vragen</span><span class="tag">9 architectuurblokken</span><span class="tag">Microsoft-bronnen</span></div></div><div class="route-visual" aria-hidden="true"><p class="diagram-label">JE ARCHITECTUUR, LAAG VOOR LAAG</p><div class="diagram-node">Governance & identiteit <span>01</span></div><div class="diagram-connector"></div><div class="diagram-node">Netwerk & beveiliging <span>02–03</span></div><div class="diagram-connector"></div><div class="diagram-row"><div class="diagram-node">Applicaties</div><div class="diagram-node">Integratie</div></div><div class="diagram-connector"></div><div class="diagram-node">Data, AI & observability <span>06–08</span></div><p class="diagram-note">Elke keuze bouwt verder op het fundament.</p></div></section>
    <section class="launch" aria-label="Start de quiz"><div><h2>Eén route. Alles goed.</h2><p>Elke ronde dezelfde vragen, in dezelfde volgorde. Bij een fout zie je het juiste antwoord, de uitleg en een Microsoft-bron. Daarna kies je: opnieuw vanaf vraag 1 of vanaf het begin van het huidige blok.</p>${state.best ? `<p class="completion-line">Persoonlijk record: ${state.best} van ${total} goed op rij.</p>` : ''}</div><div class="start-actions"><button class="primary" id="start">${state.completed ? 'Bekijk je resultaat' : state.started ? `Verder bij vraag ${currentNumber()} →` : 'Start de kennisroute →'}</button>${state.started ? '<button class="text-button" id="home-restart">Nieuwe ronde beginnen</button>' : ''}</div></section>
    <div class="section-heading"><h2>Van fundament tot besluit</h2><span>Bekijk de onderwerpen ↓</span></div><section class="blocks" aria-label="Architectuurblokken">${blocks.map(block => `<details class="block"><summary><span class="block-number">BLOK ${escape(block.title.split(' · ')[0])}<span>${block.questions.length} vragen</span></span><span class="block-title">${escape(block.title.split(' · ')[1])}</span></summary><div class="block-content"><p>${escape(block.description)}</p><ul class="topic-list">${[...new Set(block.questions.map(q => q.topic))].map(topic => `<li>${escape(topic)}</li>`).join('')}</ul></div></details>`).join('')}</section>
    <p class="fineprint">De scenario’s zijn fictief en gericht op een grote automotive-organisatie, niet op intern Mercedes-beleid. Je voortgang blijft alleen in deze browser bewaard. Geen account, cookies of analytics. Productmogelijkheden veranderen; toets echte ADR’s altijd aan de actuele documentatie.</p>`;
    document.getElementById('start').onclick = () => { state.started = true; save(); state.completed ? renderFinish() : renderQuestion(); focusHeading(); };
    document.getElementById('home-restart')?.addEventListener('click', () => dialog.showModal());
  }
  function renderQuestion() {
    const index = state.feedback?.index ?? state.index;
    const question = questions[index];
    const position = question.block.questions.findIndex(q => q.id === question.id) + 1;
    const answered = state.feedback !== null;
    const correct = answered && state.feedback.choice === question.answer;
    const progress = answered && !correct ? 0 : index + (correct ? 1 : 0);
    main.innerHTML = `<div class="quiz-wrap">${notice()}<div class="quiz-top"><button class="text-button" id="overview">← Overzicht</button><span class="stat">Ronde <strong>${state.attempts}</strong> · Record <strong>${state.best}</strong></span></div><div class="progress-label"><span>Vraag <strong>${index + 1}</strong> van ${total}</span><span>${state.streak} op rij goed</span></div><progress value="${progress}" max="${total}" aria-label="Voortgang door de vragenroute">${progress} / ${total}</progress><section class="question-card" aria-labelledby="question-heading"><p class="eyebrow">${escape(question.block.title)}</p><p class="question-topic">${escape(question.topic)} <span aria-hidden="true">/</span> ${position} van ${question.block.questions.length} in dit blok</p><h1 id="question-heading">${escape(question.prompt)}</h1><div class="answer-list" role="group" aria-labelledby="question-heading">${question.options.map((option, i) => {
      const isAnswer = answered && i === question.answer;
      const isWrong = answered && i === state.feedback.choice && !correct;
      return `<button class="answer${isAnswer ? ' correct' : isWrong ? ' incorrect' : ''}" data-choice="${i}" ${answered ? 'disabled' : ''}><span class="answer-letter" aria-hidden="true">${'ABCD'[i]}</span><span class="answer-text">${escape(option)}</span>${isAnswer ? '<span class="answer-result">✓ Juist</span>' : isWrong ? '<span class="answer-result">✕ Jouw keuze</span>' : ''}</button>`;
    }).join('')}</div>${!answered ? '<p class="quiz-hint">Kies één antwoord. Bij een fout kies je: dit blok of de hele route opnieuw.</p>' : ''}<div id="feedback" aria-live="polite" aria-atomic="true"></div></section><button class="text-button" id="restart">Ronde opnieuw beginnen</button></div>`;
    document.getElementById('overview').onclick = () => { renderHome(); focusHeading(); };
    document.getElementById('restart').onclick = () => dialog.showModal();
    main.querySelectorAll('[data-choice]').forEach(button => button.onclick = () => answer(Number(button.dataset.choice)));
    if (answered) {
      const feedback = document.getElementById('feedback');
      feedback.className = `feedback ${correct ? 'right' : 'wrong'}`;
      feedback.innerHTML = `<h2 tabindex="-1">${correct ? 'Goed gekozen.' : 'Even terug naar het fundament.'}</h2>${!correct ? `<p class="correct-answer">Het juiste antwoord: ${escape(question.options[question.answer])}</p>` : ''}<p>${escape(question.explanation)}</p><a class="source" href="${escape(question.source)}" target="_blank" rel="noopener noreferrer">Lees de Microsoft-documentatie →<span class="sr-only"> (nieuw tabblad)</span></a>${!correct ? '<small>Je reeks is teruggezet naar 0. Neem de uitleg rustig door en kies waar je opnieuw begint. Bij een blokherstart blijven eerdere blokken afgerond.</small>' : ''}<button class="primary" id="next">${correct ? index === total - 1 ? 'Bekijk je resultaat →' : 'Volgende vraag →' : 'Opnieuw vanaf vraag 1 →'}</button>${!correct ? `<button class="secondary block-retry" id="retry-block">Opnieuw vanaf dit blok (vraag ${blockStart(index) + 1}) →</button>` : ''}`;
      document.getElementById('next').onclick = () => next();
      document.getElementById('retry-block')?.addEventListener('click', () => next(true));
    }
  }
  function answer(choice) {
    if (state.feedback || !integer(choice, 0, 3)) return;
    const index = state.index;
    state.feedback = { index, choice };
    if (choice === questions[index].answer) {
      state.streak += 1;
      state.best = Math.max(state.best, state.streak);
    } else {
      state.streak = 0;
      state.index = 0;
    } // Reset immediately, even if the page is reloaded before continuing.
    save();
    renderQuestion();
    const feedback = document.getElementById('feedback');
    feedback.querySelector('h2').focus({ preventScroll: true });
    feedback.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }
  function next(restartFromBlock = false) {
    const feedback = state.feedback;
    if (!feedback) return;
    if (feedback.choice !== questions[feedback.index].answer) {
      state.attempts += 1;
      state.index = restartFromBlock ? blockStart(feedback.index) : 0;
      state.usedBlockRestart = state.index > 0;
    } else if (feedback.index === total - 1) {
      state.completed = true;
    } else state.index = feedback.index + 1;
    state.feedback = null;
    save();
    state.completed ? renderFinish() : renderQuestion();
    focusHeading();
  }
  function renderFinish() {
    main.innerHTML = `<section class="finish">${notice()}<div class="finish-icon" aria-hidden="true">✓</div><p class="eyebrow">Kennisroute voltooid</p><h1>Een stevig fundament.<br>Nu het echte ontwerp.</h1><p>${state.usedBlockRestart ? `Je hebt alle ${total} vragen afgerond met herstarts per blok.` : `Je hebt alle ${total} vragen achter elkaar goed beantwoord.`} Gebruik deze kennis om keuzes te onderbouwen en alternatieven af te wegen.</p><div class="finish-stats"><div><strong>${total}/${total}</strong><span>${state.usedBlockRestart ? 'vragen afgerond' : 'goed op rij'}</span></div><div><strong>${state.attempts}</strong><span>${state.attempts === 1 ? 'ronde' : 'rondes'}</span></div><div><strong>9</strong><span>blokken</span></div></div><div class="adr-card"><h2>Neem dit mee in je volgende ADR</h2><ol><li>Welke functionele eis, SLO en datagrens sturen de keuze?</li><li>Welke alternatieven voldoen, en waarom kies je deze?</li><li>Wat zijn de consequenties voor kosten, beheer en beveiliging?</li><li>Hoe toets je capaciteit, herstel, latency en aannames?</li></ol></div><p class="fineprint">Een foutloze quiz is een goede oefening, geen certificering. Een echt ontwerp vraagt ook praktijkervaring en validatie van actuele servicebeperkingen.</p><button class="primary" id="finish-restart">Oefen de route opnieuw →</button><br><button class="text-button" id="finish-home">Terug naar het overzicht</button></section>`;
    document.getElementById('finish-restart').onclick = () => dialog.showModal();
    document.getElementById('finish-home').onclick = () => { renderHome(); focusHeading(); };
  }
  document.getElementById('cancel-restart').onclick = () => dialog.close();
  document.getElementById('confirm-restart').onclick = () => {
    const best = state.best;
    const attempts = state.started ? state.attempts + 1 : 1;
    state = { ...initial(), best, attempts, started: true };
    dialog.close(); save(); renderQuestion(); focusHeading();
  };
  document.querySelector('.brand').onclick = event => { event.preventDefault(); renderHome(); focusHeading(); };
  // A second tab can update progress. Re-read it before displaying a stale question.
  window.addEventListener('storage', event => { if (event.key === KEY) window.location.reload(); });
  save();
  renderHome();
})();
