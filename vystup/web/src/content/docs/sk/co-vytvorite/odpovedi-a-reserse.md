---
title: "Zložitejšie odpovede a rešerše: reklamácie, úrady a podklady na rozhodnutie"
description: "AI agent v OpenWorku pripraví odpoveď, ktorá vyžaduje prejsť viac podkladov: reklamáciu, odpoveď úradu alebo porovnanie variantov pred rozhodnutím. Vie aj dohľadať informácie na webe."
sidebar:
  order: 7
  label: "Odpovede a rešerše"
tagy: [dokumenty/zivotopis, urady/reklamace, finance/rozpocet, domacnost/auto, domacnost/dovolena]
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

Každé zadanie ukazuje jeden dobrý zvyk — všimnite si ich, oplatí sa.

**Dajte agentovi všetky podklady a chcite nárok so zdôvodnením:**

```text
Chcem reklamovať práčku. V priečinku reklamacia/ je bloček, záručný list
a fotky závady. Zisti, na čo mám nárok, a priprav text reklamácie — pri
nároku napíš, z čoho vychádza. Nikam nič neodosielaj.
```

**Varianty počítať s rovnakými predpokladmi — a predpoklady vypísať:**

```text
Do vystup/ priprav podklad na rozhodnutie, či auto kúpiť, alebo mať
na operatívny leasing: použi ponuky v priečinku auto/ a spočítaj
náklady na tri roky pri oboch variantoch. Predpoklady výpočtu (nájazd,
poistenie, servis) vypíš — nech vidím, čo porovnávam.
```

**Časová os s odkazom na každý dokument:**

```text
Z korešpondencie v priečinku spor-dodavatel/ poskladaj časovú os: čo kto
kedy poslal a čo sľúbil. Ku každému bodu odkáž na konkrétny súbor.
```

**Rešerš so zdrojmi a dátumom — a s označením neovereného:**

```text
Zisti cez prehliadač aktuálne podmienky troch dodávateľov elektriny pre
domácnosť a spíš porovnanie. Pri každom údaji uveď zdroj (odkaz)
a dátum, kedy si ho našiel. Čo sa nepodarilo overiť, označ — neodhaduj.
```

**Odpoveď úradu: len z podkladov, so zoznamom toho, čo dodať:**

```text
Z výzvy v urad/vyzva.pdf a našich podkladov priprav koncept odpovede.
Každé tvrdenie opri o konkrétny dokument; kde podklad chýba, napíš
zoznam, čo mám dodať. Koncept ulož do vystup/ — nikam ho neodosielaj.
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
