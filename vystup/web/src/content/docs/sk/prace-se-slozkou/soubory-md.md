---
title: "Súbory .md (Markdown): čo to je a ako s nimi pracovať"
description: "Čo je súbor .md, prečo v ňom AI agent píše výstupy, čím ho otvoríte a ako z neho urobiť Word alebo PDF. Základné značky Markdownu na jednej stránke."
sidebar:
  order: 2.5
  label: "Súbory .md (Markdown)"
---

Agent v OpenWorku často ukladá výstupy do súborov s príponou **`.md`** —
zápisy, prehľady, koncepty. Aj pravidlá pre agenta bývajú v súbore
`AGENTS.md`. Čo to vlastne je?

## Čo je Markdown

**Markdown** (prípona `.md`) je **obyčajný text s pár jednoduchými
značkami** pre nadpisy, tučné písmo alebo zoznamy. Žiadny špeciálny
formát — súbor otvoríte v ľubovoľnom textovom editore a prečítate ho aj
bez akéhokoľvek programu navyše.

Preto ho majú agenti (a programátori) tak radi:

- **Prežije čokoľvek** — otvorí sa dnes, o desať rokov, na akomkoľvek
  počítači.
- **Vidno, čo sa zmenilo** — po úprave sa dá ľahko porovnať stará a nová
  verzia.
- **Ľahko sa prevádza** — z `.md` urobí agent Word, PDF alebo webovú
  stránku na jedno zadanie.

## Ako vyzerá vnútri

Značiek je pár a pochopíte ich z príkladu:

```markdown
# Nadpis stránky

## Menší nadpis

Bežný odsek. **Tučný text** a *kurzíva*.

- položka zoznamu
- ďalšia položka

1. číslovaný zoznam
2. druhý bod

[Odkaz na web](https://openwork.cz)

| Stĺpec A | Stĺpec B |
|----------|----------|
| hodnota  | hodnota  |
```

To je v podstate všetko, čo v bežných výstupoch stretnete.

## Čím súbor .md otvoriť

- **Priamo v OpenWorku** — agent vám obsah ukáže, zhrnie alebo upraví.
- **V ľubovoľnom textovom editore** — Poznámkový blok vo Windows,
  TextEdit na Macu. Uvidíte text so značkami, čítať sa dá bez problémov.
- **Pekne naformátovaný** ho zobrazí väčšina moderných editorov (napríklad
  bezplatný VS Code) a mnohé aplikácie na poznámky.

## Potrebujete Word alebo PDF?

Stačí povedať agentovi:

```text
Preveď vystup/zapis-porady.md do Wordu, nech ho môžem poslať kolegom.
Formátovanie zachovaj: nadpisy, zoznamy, tabuľku.
```

Funguje to aj naopak — z Wordu vie agent urobiť `.md`, s ktorým sa ďalej
ľahko pracuje.

:::tip
Vlastné poznámky a podklady pokojne píšte do `.md` súborov tiež —
agentovi sa čítajú najlepšie a nikdy nenarazíte na „nepodporovaný formát".
:::

## Kadiaľ ďalej

- **[Súbor AGENTS.md](/sk/prace-se-slozkou/agents-md/)** — najdôležitejší
  `.md` súbor v priečinku: pravidlá pre agenta.
- **[Štruktúra priečinkov](/sk/prace-se-slozkou/struktura-slozek/)** — ako
  priečinok usporiadať, aby sa agentovi dobre pracovalo.
