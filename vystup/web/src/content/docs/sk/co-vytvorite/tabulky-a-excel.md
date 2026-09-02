---
title: "Tabuľky a dáta pre Excel: prehľady, rozbory a čistenie dát"
description: "AI agent v OpenWorku vytvorí tabuľku pre Excel z faktúr alebo výpisov, zlúči dáta z viacerých súborov, vyčistí duplicity a pripraví prehľady aj grafy. S príkladmi zadaní."
sidebar:
  order: 2
  label: "Tabuľky a Excel"
tagy: [finance/faktury, finance/uctenky, finance/rozpocet, finance/dane]
---

Dáta väčšinou nechýbajú — len sú rozhádzané po faktúrach, výpisoch a starých
tabuľkách. Agent ich pozbiera do jednej tabuľky, ktorú otvoríte v Exceli
alebo inom tabuľkovom programe.

**Prínos:** žiadne ručné prepisovanie čísel — a teda ani preklepy z neho.
Prehľad, na ktorý ste nemali čas, je hotový na jedno zadanie a dá sa
kedykoľvek zopakovať nad novými dátami.

## Čo všetko sa dá

- **Prehľady z dokumentov** — z faktúr alebo bločkov tabuľka súm po
  mesiacoch, dodávateľoch či kategóriách.
- **Rozbor výdavkov** — z výpisov z účtu prehľad, kam peniaze tečú.
- **Zlučovanie dát** — spojiť kontakty či zoznamy z viacerých súborov do
  jedného, bez duplicít.
- **Čistenie dát** — nájsť chýbajúce hodnoty, zjednotiť formáty telefónov
  a dátumov, označiť podozrivé riadky.
- **Grafy a súhrny** — k tabuľke pripraviť súhrn a jednoduchý graf.

## Ukážkové zadania

Každé zadanie ukazuje jeden dobrý zvyk — všimnite si ich, oplatí sa.

**Presné stĺpce a čo s chýbajúcimi údajmi:**

```text
Zo všetkých faktúr v priečinku faktury/2026/ vytvor tabuľku pre Excel:
dodávateľ, suma, dátum, kategória. Pridaj list so súčtami po mesiacoch.
Chýbajúce údaje nechaj prázdne a pridaj stĺpec Poznámka — nič nedomýšľaj.
```

**Rozdiely označiť, nie rozhodovať naslepo:**

```text
Zlúč adresy z kontakty-web.csv a kontakty-telefon.xlsx do jednej
tabuľky, odstráň jasné duplicity a záznamy, kde sa údaje líšia, označ
v stĺpci Rozdiel — rozhodnem o nich sám.
```

**Kategórie vymenovať a nezaraditeľné chcieť zvlášť:**

```text
Z výpisov v priečinku financie/ urob rozbor výdavkov za polrok po
kategóriách (bývanie, jedlo, doprava, ostatné) a pridaj graf vývoja po
mesiacoch. Čo sa nedá jednoznačne zaradiť, daj do „nezaradené" a vypíš
zvlášť.
```

**Kontrola dát: najprv zoznam nálezov, žiadne tiché opravy:**

```text
Skontroluj tabuľku klienti.xlsx: nájdi chýbajúce e-maily, zlé formáty
telefónov a duplicitné riadky. Nič neopravuj — vypíš mi zoznam nálezov
s číslom riadku a návrhom opravy.
```

**Opakovaný prehľad podľa hotového vzoru:**

```text
Z faktúr v priečinku faktury/2026-09/ urob rovnaký prehľad ako vo
vystup/prehlad-2026-08.xlsx — rovnaké stĺpce, rovnaké listy, rovnaké
zoradenie, len nové dáta.
```

:::tip
Popíšte agentovi presne stĺpce, ktoré chcete — názvy aj poradie. Dostanete
tabuľku, ktorú už nemusíte preskladávať.
:::

## Kadiaľ ďalej

- Ukážky pre [firmy](/sk/pro-koho/firmy/)
  a [domácnosť](/sk/pro-koho/domacnost/).
- Porovnávate ponuky? Viď
  [Porovnanie zmlúv a ponúk](/sk/co-vytvorite/porovnani-smluv-a-nabidek/).
