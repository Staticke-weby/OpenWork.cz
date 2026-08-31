---
title: "Zručnosti (skills): uložené postupy, ktoré agent pozná navždy"
description: "Čo sú zručnosti (skills) v OpenWorku: písaný postup, ktorý si agent načíta, keď úloha zodpovedá. Ako zručnosť vytvoriť z chatu, upraviť a kedy ju použiť namiesto AGENTS.md."
sidebar:
  order: 3.5
  label: "Zručnosti (skills)"
---

Keď s agentom niečo vyladíte — napríklad presný postup vyúčtovania — je
škoda to nabudúce vysvetľovať znovu. Na to sú **zručnosti** (anglicky
*skills*): **písaný postup, ktorý si agent sám načíta, kedykoľvek úloha
zodpovedá.** Kuchárka na jeden druh práce.

## Ako zručnosť vznikne

Najjednoduchšia cesta vedie **z chatu**:

1. Dokončite úlohu s agentom tak, aby výsledok vyzeral presne podľa vašich
   predstáv.
2. Napíšte: „**Urob z toho, čo sme práve dokončili, opakovateľnú
   zručnosť.**"
3. Agent postup spíše a uloží. Nabudúce zručnosť vyvoláte menom — alebo ju
   agent použije sám, keď spozná zodpovedajúcu úlohu.

Zručnosť sa dá založiť aj ručne: je to obyčajný
[súbor .md](/sk/prace-se-slozkou/soubory-md/) — `SKILL.md` v priečinku
(`.opencode/skills/<názov>/`). Taká **lokálna zručnosť je zadarmo
a nevyžaduje žiadny účet**; platí len pre daný priečinok. S prihlásením
k účtu OpenWork sa zručnosti dajú spravovať aj v `Settings` → `Library`.

## Ako zručnosť upraviť

Poviete to v chate — napríklad: „Uprav zručnosť *vyúčtovanie cesty*, nech
sa pred uložením tabuľky vždy spýta na menu." Zručnosť je súkromná;
zdieľanie s tímom je samostatný krok, ktorý robíte vedome.

## Zručnosť, AGENTS.md, alebo MCP?

Tri veci sa pletú — každá robí niečo iné:

| Čo | Na čo je |
|---|---|
| **[MCP / pripojená služba](/sk/prace-se-slozkou/napojeni-nastroju/)** | **prístup** do systému (e-mail, kalendár, firemný systém) |
| **Zručnosť (skill)** | **postup** pre jeden druh práce — načíta sa, keď úloha zodpovedá |
| **[AGENTS.md](/sk/prace-se-slozkou/agents-md/)** | **pravidlá platné vždy** v danom priečinku, pri každej úlohe |

Zjednodušene: pripojenie hovorí, *kam agent dosiahne*, zručnosť, *ako sa
robí táto práca*, AGENTS.md, *čo platí zakaždým*. (Pod kapotou sa
zručnosti balia do „pluginov" — balíčkov, ktoré môžu niesť viac zručností
naraz; bežne to ale riešiť nemusíte.)

## Ukážkové zadania

**Vytvorenie zručnosti z hotovej práce:**

```text
Postup, ktorý sme práve dokončili (bločky → tabuľka vyúčtovania), ulož
ako opakovateľnú zručnosť „vyúčtovanie cesty". Do postupu zapíš aj
pravidlá: nečitateľné položky označiť, originály nemeniť.
```

**Použitie zručnosti:**

```text
Urob vyúčtovanie cesty z priečinka sluzobka-kosice/.
```

**Úprava zručnosti:**

```text
Uprav zručnosť „vyúčtovanie cesty": výslednú tabuľku po novom ukladaj
ako XLSX a pridaj stĺpec s kurzom, keď sú bločky v cudzej mene.
```

:::tip
Dobrá zručnosť vzniká z **hotovej, vyladenej práce** — nie z popisu
vopred. Najprv úlohu raz dotiahnite v chate, až potom ju nechajte uložiť.
:::

## Kadiaľ ďalej

- **[Automatizácia činností](/sk/co-vytvorite/automatizace/)** — kde
  zručnosti zapadajú do opakovanej práce.
- **[Súbor AGENTS.md](/sk/prace-se-slozkou/agents-md/)** — pravidlá platné
  pri každom spustení.
- **[Súbory .md](/sk/prace-se-slozkou/soubory-md/)** — formát, v ktorom
  zručnosti žijú.
