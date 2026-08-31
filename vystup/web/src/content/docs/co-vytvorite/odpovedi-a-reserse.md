---
title: "Složitější odpovědi a rešerše: reklamace, úřady a podklady pro rozhodnutí"
description: "AI agent v OpenWorku připraví odpověď, která vyžaduje projít víc podkladů: reklamaci, odpověď úřadu nebo srovnání variant před rozhodnutím. Umí i dohledat informace na webu."
sidebar:
  order: 7
  label: "Odpovědi a rešerše"
---

Některé odpovědi nejde napsat z hlavy — je potřeba projít účtenky, smlouvy,
korespondenci a ještě něco dohledat. Agent projde podklady ve složce, chybějící
informaci najde ve vestavěném prohlížeči a připraví odpověď i s odůvodněním.

**Přínos:** odpověď stojí na všech podkladech, ne na tom, co si pamatujete.
A rozhodnutí (koupit, reklamovat, odvolat se) má pod sebou čísla, ne pocit.

## Co všechno jde

- **Reklamace** — z účtenky, záručního listu a fotek závady text reklamace
  s tím, na co máte nárok.
- **Odpovědi úřadům** — reakce na výzvu z podkladů, které k věci máte.
- **Podklady pro rozhodnutí** — koupit vs. leasing, hypotéka vs. nájem:
  varianty spočítané vedle sebe.
- **Rešerše** — posbírat dostupné informace k tématu (dodavatelé, podmínky,
  ceny) a sepsat souhrn se zdroji.
- **Časové osy** — z korespondence a dokumentů poskládat, co se kdy stalo.

## Ukázková zadání

```text
Chci reklamovat pračku. Ve složce reklamace/ je účtenka, záruční list
a fotky závady. Zjisti, na co mám nárok, a připrav text reklamace.
```

```text
Do vystup/ připrav podklad pro rozhodnutí, zda auto koupit, nebo mít
na operativní leasing: použij nabídky ve složce auto/ a spočítej
náklady na tři roky u obou variant.
```

```text
Z korespondence ve složce spor-dodavatel/ poskládej časovou osu: co kdo
kdy poslal a co slíbil. Ke každému bodu odkaž na konkrétní soubor.
```

:::caution
U právních a finančních kroků berte výstup jako podklad, ne jako verdikt.
Agent uvádí, z čeho vychází — zdroje si u důležitých věcí ověřte.
:::

## Kudy dál

- Ukázky pro [domácnost](/pro-koho/domacnost/) a [firmy](/pro-koho/firmy/).
- Citlivé podklady? Nejdřív si přečtěte o
  [nulovém uchovávání dat](/vase-data/zdr/).
