# Azure Architect · Kennisroute

Een statische Nederlandstalige oefenwebsite voor Azure-architectuur, gemaakt voor mobiel gebruik, inclusief de iPhone 16 Pro. Geen account, backend, externe fonts of analytics.

## Oefenregels

- 152 vragen, 9 logische architectuurblokken, steeds dezelfde volgorde en antwoordposities.
- Een fout zet de reeks direct terug op nul. Het juiste antwoord, de uitleg en een officiële Microsoft Learn-link blijven staan totdat je opnieuw begint bij vraag 1.
- Ook goede antwoorden krijgen uitleg. Na 152 opeenvolgende juiste antwoorden volgt het eindresultaat.
- Voortgang, ronde en record staan uitsluitend in de localStorage van deze browser. Laden met gewijzigde vragen reset de opgeslagen sessie. Als opslag niet werkt, blijft oefenen mogelijk zolang de pagina openblijft.
- Automotivescenario’s zijn fictief; ze beschrijven geen interne Mercedes-Benz-architectuur of beleid. Deze training is geen certificering of vervanging voor praktijkervaring. Toets echte ADR’s aan actuele documentatie, quota, tiers en regionale mogelijkheden.

## Lokaal draaien

Python 3 is voldoende voor de website:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open lokaal poort 4173 in je browser. Productie gebruikt uitsluitend `index.html`, `styles.css`, `app.js`, `questions.js` en `assets/`.

## Tests

Node.js 22+ en Python 3:

```sh
npm ci
npx playwright install --with-deps chromium
npm test
```

Met een al geïnstalleerde Chromium-browser:

```sh
CHROMIUM_PATH=/usr/bin/chromium npm test
```

De tests controleren de vragenbank, fout/resetgedrag, hervatten, geblokkeerde browseropslag, mobiel formaat, toetsenbordbediening en een volledige foutloze ronde. Chromium op iPhone-afmetingen is geen test op een fysieke iPhone/Safari.

## GitHub Pages

De workflow `.github/workflows/pages.yml` test en publiceert bij een push naar `main`. Stel onder **Settings → Pages → Build and deployment → Source** de optie **GitHub Actions** in. Daarna kan de workflow via **Actions → Test and publish GitHub Pages → Run workflow** opnieuw worden gestart.

Verwachte URL na succesvolle publicatie: `https://rvanheel.github.io/azure-service-architect/`.

De workflow publiceert alleen de websitebestanden. Een private repository kan afhankelijk van het GitHub-abonnement aanvullende Pages-voorwaarden hebben. De website mag publiek zijn; voeg geen interne documentatie of geheimen toe aan de vragenbank.

Op de iPhone: open de gepubliceerde site in Safari en kies **Deel → Zet op beginscherm**. Internet is nodig om de website en Microsoft-documentatie te laden; er is geen service worker voor offlinegebruik.

## Inhoud aanpassen

`questions.js` bevat per vraag een stabiel ID, onderwerp, vraag, vier opties, de index van het juiste antwoord (0–3), uitleg en Microsoft-bron. De negen blokken volgen governance → netwerk → edge/beveiliging → compute → integratie → data → AI → operations → ADR. Antwoordposities zijn vooraf verdeeld, nooit willekeurig tijdens oefenen.

Microsoft Sentinel is de huidige naam van Azure Sentinel. De Foundry-benaming evolueert; controleer de actuele Microsoft-documentatie. “Azure gateway” is uitgewerkt als Application Gateway, met VPN Gateway in het hybride netwerkblok. “Route express” is uitgewerkt als ExpressRoute.
