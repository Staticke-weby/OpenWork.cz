---
title: "Tabulky a data pro Excel: přehledy, rozbory a čištění dat"
description: "AI agent v OpenWorku vytvoří tabulku pro Excel z faktur nebo výpisů, sloučí data z více souborů, vyčistí duplicity a připraví přehledy i grafy. S příklady zadání."
sidebar:
  order: 2
  label: "Tabulky a Excel"
tagy: [finance/faktury, finance/uctenky, finance/rozpocet, finance/dane]
---

Data většinou nechybí — jen jsou rozházená po fakturách, výpisech a starých
tabulkách. Agent je posbírá do jedné tabulky, kterou otevřete v Excelu nebo
jiném tabulkovém programu.

**Přínos:** žádné ruční přepisování čísel — a tedy ani překlepy z něj.
Přehled, na který jste neměli čas, je hotový na jedno zadání a jde kdykoli
zopakovat nad novými daty.

## Co všechno jde

- **Přehledy z dokumentů** — z faktur nebo účtenek tabulka částek po měsících,
  dodavatelích či kategoriích.
- **Rozbor výdajů** — z výpisů z účtu přehled, kam peníze tečou.
- **Slučování dat** — spojit kontakty či seznamy z více souborů do jednoho,
  bez duplicit.
- **Čištění dat** — najít chybějící hodnoty, sjednotit formáty telefonů
  a dat, označit podezřelé řádky.
- **Grafy a souhrny** — k tabulce připravit souhrn a jednoduchý graf.

## Ukázková zadání

Každé zadání ukazuje jeden dobrý zvyk — všimněte si jich, vyplatí se.

**Přesné sloupce a co s chybějícími údaji:**

```text
Ze všech faktur ve složce faktury/2026/ vytvoř tabulku pro Excel:
dodavatel, částka, datum, kategorie. Přidej list se součty po měsících.
Chybějící údaje nech prázdné a přidej sloupec Poznámka — nic nedomýšlej.
```

**Rozdíly označit, ne rozhodovat naslepo:**

```text
Sluč adresy z kontakty-web.csv a kontakty-telefon.xlsx do jedné tabulky,
odstraň jasné duplicity a záznamy, kde se údaje liší, označ ve sloupci
Rozdíl — rozhodnu o nich sám.
```

**Kategorie vyjmenovat a nezařaditelné chtít zvlášť:**

```text
Z výpisů ve složce finance/ udělej rozbor výdajů za pololetí po
kategoriích (bydlení, jídlo, doprava, ostatní) a přidej graf vývoje po
měsících. Co nejde jednoznačně zařadit, dej do „nezařazeno" a vypiš
zvlášť.
```

**Kontrola dat: nejdřív seznam nálezů, žádné tiché opravy:**

```text
Zkontroluj tabulku klienti.xlsx: najdi chybějící e-maily, špatné formáty
telefonů a duplicitní řádky. Nic neopravuj — vypiš mi seznam nálezů
s číslem řádku a návrhem opravy.
```

**Opakovaný přehled podle hotového vzoru:**

```text
Z faktur ve složce faktury/2026-09/ udělej stejný přehled jako ve
vystup/prehled-2026-08.xlsx — stejné sloupce, stejné listy, stejné
řazení, jen nová data.
```

:::tip
Popište agentovi přesně sloupce, které chcete — názvy i pořadí. Dostanete
tabulku, kterou už nemusíte přeskládávat.
:::

## Kudy dál

- Ukázky pro [firmy](/pro-koho/firmy/) a [domácnost](/pro-koho/domacnost/).
- Porovnáváte nabídky? Viz
  [Porovnání smluv a nabídek](/co-vytvorite/porovnani-smluv-a-nabidek/).
