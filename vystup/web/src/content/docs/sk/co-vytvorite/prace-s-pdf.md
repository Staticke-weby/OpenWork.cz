---
title: "Práca s PDF: vyťaženie, zlúčenie a prevod do iných formátov"
description: "AI agent v OpenWorku vytiahne dáta z PDF faktúr a zmlúv, zlúči viac PDF do jedného, prevedie PDF do textu či tabuľky a pripraví zhrnutie dlhých dokumentov."
sidebar:
  order: 8
  label: "Práca s PDF"
---

PDF je formát, v ktorom dokumenty chodia — a v ktorom sa s nimi najhoršie
pracuje. Agent z PDF vytiahne text aj čísla, prevedie ich do tabuľky alebo
dokumentu a dlhé dokumenty zhrnie.

**Prínos:** koniec ručného prepisovania z PDF do Excelu. Sto strán zmluvy
alebo výročnej správy prečíta agent — vy dostanete to podstatné.

## Čo všetko sa dá

- **Vyťaženie dát** — z PDF faktúr či výpisov čísla rovno do tabuľky.
- **Zhrnutie dlhých dokumentov** — výročná správa, štúdia alebo podmienky
  na jednu stranu podstatného.
- **Prevod formátov** — z PDF do textu, ktorý sa dá upravovať; z dokumentu
  do PDF na odoslanie.
- **Zlúčenie a rozdelenie** — viac PDF do jedného súboru, alebo naopak
  vytiahnuť len potrebné strany.
- **Hľadanie naprieč PDF** — nájsť, v ktorom z desiatok PDF je konkrétne
  ustanovenie alebo suma.

## Ukážkové zadania

Každé zadanie ukazuje jeden dobrý zvyk — všimnite si ich, oplatí sa.

**Popíšte presné stĺpce a čo s neistými údajmi:**

```text
V priečinku vypisy-pdf/ sú výpisy z účtu za celý rok v PDF. Vytiahni
všetky pohyby do jednej tabuľky pre Excel: dátum, protistrana, suma,
poznámka. Položky, pri ktorých si nie si istý, označ v stĺpci Poznámka —
nič nedomýšľaj.
```

**Pri zhrnutí chcite odkazy na strany, nech sa dá všetko dohľadať:**

```text
Zhrň PDF poistne-podmienky.pdf na jednu stranu: čo je kryté, čo je
vylúčené, aké sú lehoty a na čo si dať pozor. Pri každom bode uveď
číslo strany, z ktorej vychádza.
```

**Originály nechajte tak — nový súbor vedľa:**

```text
Z priečinka podklady-pdf/ vytiahni strany s cenovými tabuľkami do
jedného nového PDF a pridaj úvodnú stranu s obsahom. Pôvodné súbory
nemeň, výsledok ulož do vystup/.
```

**Hľadanie naprieč PDF — s citáciou presného znenia:**

```text
V priečinku zmluvy-pdf/ nájdi všetky dokumenty, kde sa hovorí
o automatickom predĺžení zmluvy. Vypíš súbor, stranu a presné znenie
ustanovenia — nech to môžem overiť.
```

**Prevod skenu na text — s označením nečitateľných miest:**

```text
Preveď sken-zmluva.pdf na text do vystup/, zachovaj členenie článkov.
Zle čitateľné miesta označ [NEČITATEĽNÉ] a vypíš ich na koniec —
doplním ich ručne, nedomýšľaj ich.
```

:::tip
Pri skenovaných PDF (fotky strán) záleží na čitateľnosti predlohy — viď
[Skeny a fotky dokumentov](/sk/co-vytvorite/skeny-a-fotky/).
:::

## Kadiaľ ďalej

- Ukážky pre [firmy](/sk/pro-koho/firmy/)
  a [profesie s mlčanlivosťou](/sk/pro-koho/profese-s-mlcenlivosti/).
- Dáta z PDF ďalej spracovať? Viď
  [Tabuľky a Excel](/sk/co-vytvorite/tabulky-a-excel/).
