---
title: "Zložitejšie odpovede a rešerše: reklamácie, úrady a podklady na rozhodnutie"
description: "AI agent v OpenWorku pripraví odpoveď, ktorá vyžaduje prejsť viac podkladov: reklamáciu, odpoveď úradu alebo porovnanie variantov pred rozhodnutím. Vie aj dohľadať informácie na webe."
sidebar:
  order: 7
  label: "Odpovede a rešerše"
---

Niektoré odpovede sa nedajú napísať z hlavy — treba prejsť bločky, zmluvy,
korešpondenciu a ešte niečo dohľadať. Agent prejde podklady v priečinku,
chýbajúcu informáciu nájde vo vstavanom prehliadači a pripraví odpoveď aj
s odôvodnením.

**Prínos:** odpoveď stojí na všetkých podkladoch, nie na tom, čo si pamätáte.
A rozhodnutie (kúpiť, reklamovať, odvolať sa) má pod sebou čísla, nie pocit.

## Čo všetko sa dá

- **Reklamácie** — z bločku, záručného listu a fotiek závady text reklamácie
  s tým, na čo máte nárok.
- **Odpovede úradom** — reakcia na výzvu z podkladov, ktoré k veci máte.
- **Podklady na rozhodnutie** — kúpiť vs. leasing, hypotéka vs. nájom:
  varianty spočítané vedľa seba.
- **Rešerše** — pozbierať dostupné informácie k téme (dodávatelia, podmienky,
  ceny) a spísať súhrn so zdrojmi.
- **Časové osi** — z korešpondencie a dokumentov poskladať, čo sa kedy stalo.

## Ukážkové zadania

```text
Chcem reklamovať práčku. V priečinku reklamacia/ je bloček, záručný list
a fotky závady. Zisti, na čo mám nárok, a priprav text reklamácie.
```

```text
Do vystup/ priprav podklad na rozhodnutie, či auto kúpiť, alebo mať
na operatívny leasing: použi ponuky v priečinku auto/ a spočítaj
náklady na tri roky pri oboch variantoch.
```

```text
Z korešpondencie v priečinku spor-dodavatel/ poskladaj časovú os: čo kto
kedy poslal a čo sľúbil. Ku každému bodu odkáž na konkrétny súbor.
```

:::caution
Pri právnych a finančných krokoch berte výstup ako podklad, nie ako verdikt.
Agent uvádza, z čoho vychádza — zdroje si pri dôležitých veciach overte.
:::

## Kadiaľ ďalej

- Ukážky pre [domácnosť](/sk/pro-koho/domacnost/)
  a [firmy](/sk/pro-koho/firmy/).
- Citlivé podklady? Najprv si prečítajte o
  [nulovom uchovávaní dát](/sk/vase-data/zdr/).
