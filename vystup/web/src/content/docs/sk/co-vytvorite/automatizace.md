---
title: "Automatizácia opakovaných činností: skripty, systémy a uložené postupy"
description: "AI agent v OpenWorku si na opakovanú prácu napíše skript, pripojí sa k vašim systémom cez MCP a osvedčený postup uloží ako zručnosť — nabudúce stačí jedna veta."
sidebar:
  order: 12
  label: "Automatizácia činností"
tagy: [dokumenty/e-maily, dokumenty/zapisy, domacnost/jidelnicek, podnikani/projekty]
---

Najväčšia úspora nie je v tom, že agent urobí úlohu raz — ale že ju potom
**robí opakovane**. Čo ste raz vyladili, nabudúce spustíte jednou vetou.

**Prínos:** rutina (mesačný report, vyúčtovanie, triedenie, kontroly)
prestane žrať čas. A pretože postup beží zakaždým rovnako, miznú aj chyby
z nepozornosti.

## Tri stavebné kamene automatizácie

1. **Agent si napíše skript** — malý program, ktorý hromadnú prácu nad
   priečinkom urobí strojovo: premenuje stovky súborov, prevedie formáty,
   skontroluje čísla. Vy skript nepíšete ani nečítate — len poviete, čo má
   robiť, a skontrolujete výsledok.
2. **Pripojí sa k vašim systémom** — cez
   [MCP a pripojené služby](/sk/prace-se-slozkou/napojeni-nastroju/) číta
   a zapisuje tam, kde dáta žijú: e-mail, kalendár, tabuľky, firemné
   systémy.
3. **Postup sa uloží a opakuje** — osvedčený postup uložíte ako
   [**zručnosť** (skill)](/sk/prace-se-slozkou/dovednosti-skills/):
   poviete „urob z toho, čo sme práve dokončili, opakovateľnú zručnosť"
   a nabudúce ju vyvoláte jednou vetou. Pravidlá, ktoré majú platiť vždy,
   patria do [AGENTS.md](/sk/prace-se-slozkou/agents-md/).

## Čo všetko sa dá

- **Hromadné operácie** — premenovať, roztriediť a previesť stovky súborov
  naraz.
- **Pravidelné výstupy** — mesačný report, vyúčtovanie alebo prehľad vždy
  rovnakým postupom nad novými dátami.
- **Priebežné kontroly** — strážiť, že v dátach nechýbajú údaje, že čísla
  sedia, že sa nič nerozbilo.
- **Prenosy medzi systémami** — z e-mailov do tabuľky, z tabuľky do
  systému, vždy rovnako.
- **Rešerše na zavolanie** — raz vyladený postup „zisti a porovnaj"
  spúšťať pre ďalšie a ďalšie položky.

## Ukážkové zadania

Každé zadanie ukazuje jeden dobrý zvyk — pri automatizácii na nich záleží
dvojnásobne.

**Hromadný zásah vždy najprv nanečisto:**

```text
V priečinku archiv/ je 400 súborov s rôznym pomenovaním. Napíš si
skript, ktorý ich premenuje na vzor rok-mesiac-nazov. Najprv mi ale
vypíš úplný zoznam čo → ako sa premenuje; spusti to, až zoznam schválim.
```

**Osvedčený postup uložiť ako zručnosť:**

```text
Postup, ktorý sme práve dokončili (bločky → tabuľka vyúčtovania),
ulož ako opakovateľnú zručnosť „vyúčtovanie cesty". Nabudúce ju chcem
spustiť vetou „urob vyúčtovanie z nového priečinka".
```

**Opakovanie podľa hotového vzoru — žiadne vymýšľanie:**

```text
Urob report za september úplne rovnako ako vystup/report-2026-08.md:
rovnaká štruktúra, rovnaké tabuľky, len dáta z priečinka
podklady/2026-09/. Čo oproti minulému mesiacu nejde spočítať, označ —
neimprovizuj.
```

**Prenos medzi systémami: najprv ukážka na pár položkách:**

```text
Z pripojeného e-mailu vyberaj objednávky z formulára webu a zapisuj ich
do tabuľky vystup/objednavky.xlsx: dátum, meno, položka, suma. Spracuj
najprv posledné tri e-maily na ukážku — pokračuj, až výsledok schválim.
```

**Pravidelnú kontrolu popísať tak, aby sa dala spúšťať stále rovnako:**

```text
Skontroluj priečinok klienti/ podľa pravidiel v AGENTS.md: pri každom
klientovi musí byť zmluva, plná moc a kontakt. Vypíš, čo kde chýba, do
vystup/kontrola.md so štruktúrou ako minule. Nič neopravuj.
```

:::caution
Automatizácia zosilňuje aj chyby — čo beží samo, beží samo aj zle. Preto:
hromadné zásahy najprv **nanečisto** (vypísať, čo sa stane), originály
**nemeniť**, pri pripojených systémoch dávať **najmenšie nutné oprávnenia**
a výstupy prvých behov **kontrolovať**.
:::

## Kadiaľ ďalej

- **[Automatizácia v prehliadači](/sk/co-vytvorite/prohlizec/)** — klikanie
  a dohľadávanie na webe.
- **[Napojenie nástrojov (MCP)](/sk/prace-se-slozkou/napojeni-nastroju/)** —
  ako agenta pripojiť k e-mailu, kalendáru a ďalším systémom.
- **[Súbor AGENTS.md](/sk/prace-se-slozkou/agents-md/)** — pravidlá, ktoré
  platia pri každom spustení.
