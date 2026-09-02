---
title: "Práce s PDF: vytěžení, sloučení a převod do jiných formátů"
description: "AI agent v OpenWorku vytáhne data z PDF faktur a smluv, sloučí více PDF do jednoho, převede PDF do textu či tabulky a připraví shrnutí dlouhých dokumentů."
sidebar:
  order: 8
  label: "Práce s PDF"
tagy: [finance/faktury, dokumenty/smlouvy, urady/datova-schranka]
---

PDF je formát, ve kterém dokumenty chodí — a ve kterém se s nimi nejhůř
pracuje. Agent z PDF vytáhne text i čísla, převede je do tabulky nebo
dokumentu a dlouhé dokumenty shrne.

**Přínos:** konec ručního přepisování z PDF do Excelu. Sto stran smlouvy
nebo výroční zprávy přečte agent — vy dostanete to podstatné.

## Co všechno jde

- **Vytěžení dat** — z PDF faktur či výpisů čísla rovnou do tabulky.
- **Shrnutí dlouhých dokumentů** — výroční zpráva, studie nebo podmínky
  na jednu stranu podstatného.
- **Převod formátů** — z PDF do textu, který jde upravovat; z dokumentu
  do PDF na odeslání.
- **Sloučení a rozdělení** — více PDF do jednoho souboru, nebo naopak
  vytáhnout jen potřebné stránky.
- **Hledání napříč PDF** — najít, ve kterém z desítek PDF je konkrétní
  ustanovení nebo částka.

## Ukázková zadání

Každé zadání ukazuje jeden dobrý zvyk — všimněte si jich, vyplatí se.

**Popište přesné sloupce a co s nejistými údaji:**

```text
Ve složce vypisy-pdf/ jsou výpisy z účtu za celý rok v PDF. Vytáhni
všechny pohyby do jedné tabulky pro Excel: datum, protistrana, částka,
poznámka. Položky, u kterých si nejsi jistý, označ ve sloupci Poznámka —
nic nedomýšlej.
```

**U shrnutí chtějte odkazy na stránky, ať jde vše dohledat:**

```text
Shrň PDF pojistne-podminky.pdf na jednu stranu: co je kryté, co je
vyloučené, jaké jsou lhůty a na co si dát pozor. U každého bodu uveď
číslo stránky, ze které vychází.
```

**Originály nechte být — nový soubor vedle:**

```text
Ze složky podklady-pdf/ vytáhni stránky s cenovými tabulkami do jednoho
nového PDF a přidej úvodní stranu s obsahem. Původní soubory neměň,
výsledek ulož do vystup/.
```

**Hledání napříč PDF — s citací přesného znění:**

```text
Ve složce smlouvy-pdf/ najdi všechny dokumenty, kde se mluví
o automatickém prodloužení smlouvy. Vypiš soubor, stránku a přesné znění
ustanovení — ať to můžu ověřit.
```

**Převod skenu na text — s označením nečitelných míst:**

```text
Převeď sken-smlouva.pdf na text do vystup/, zachovej členění článků.
Špatně čitelná místa označ [NEČITELNÉ] a vypiš je na konec — doplním je
ručně, nedomýšlej je.
```

:::tip
U skenovaných PDF (fotky stránek) záleží na čitelnosti předlohy — viz
[Skeny a fotky dokumentů](/co-vytvorite/skeny-a-fotky/).
:::

## Kudy dál

- Ukázky pro [firmy](/pro-koho/firmy/)
  a [profese s mlčenlivostí](/pro-koho/profese-s-mlcenlivosti/).
- Data z PDF dál zpracovat? Viz
  [Tabulky a Excel](/co-vytvorite/tabulky-a-excel/).
