---
title: "Porovnání smluv a nabídek: rozdíly a rizika vedle sebe"
description: "AI agent v OpenWorku porovná nabídky dodavatelů nebo verze smluv: co se liší, co v ceně chybí a na co si dát pozor — přehledně do tabulky. S příklady zadání."
sidebar:
  order: 5
  label: "Porovnání smluv a nabídek"
---

Tři nabídky, každá v jiném formátu, každá „nejvýhodnější". Agent je přečte
za vás a postaví vedle sebe: co je v ceně, co chybí, kde jsou háčky. U smluv
totéž — co se mezi verzemi změnilo a co to pro vás znamená.

**Přínos:** rozhodujete se podle úplného srovnání, ne podle dojmu z prvního
přečtení. Rozdíly, které se v desítkách stran snadno přehlédnou, skončí
v jedné tabulce.

## Co všechno jde

- **Nabídky dodavatelů** — cena, rozsah, záruka a termíny vedle sebe,
  plus otázky, které si vyžádat.
- **Verze smluv** — co se změnilo mezi loňskou a letošní verzí, po bodech.
- **Varianty rozhodnutí** — koupit vs. pronajmout, tarify, pojištění.
- **Kontrola proti vzoru** — čím se návrh smlouvy liší od vašeho vzoru
  a která ustanovení chybí.

## Ukázková zadání

Každé zadání ukazuje jeden dobrý zvyk — všimněte si jich, vyplatí se.

**Stejná kritéria pro všechny — a otázky k doptání:**

```text
Porovnej tři nabídky ve složce nabidky-okna/ do tabulky: cena, co je
v ceně, záruka, termín, platební podmínky. Pod tabulku napiš, na co se
u které nabídky doptat.
```

**Každou změnu s oběma zněními a odkazem na článek:**

```text
Porovnej novou verzi smlouvy s loňskou (smlouvy/pojisteni-2025.pdf
a pojisteni-2026.pdf) a vypiš každou změnu: číslo článku, co bylo, co je
a co to pro mě znamená.
```

**Co chybí, je stejně důležité jako co přebývá:**

```text
Porovnej návrh smlouvy s naším vzorem ve vzory/kupni-smlouva.md
a vypiš, v čem se liší, která ustanovení vzoru v návrhu chybí a co je
v návrhu navíc.
```

**Ceny nejdřív převést na stejný základ — s viditelným přepočtem:**

```text
Nabídky ve složce nabidky-okna/ počítají cenu každá jinak (s DPH, bez
DPH, za kus, za m²). Přepočítej všechny na celkovou cenu bez DPH za
celou zakázku a přepočty ukaž — ať je můžu zkontrolovat.
```

**Z porovnání vytáhnout rizika s odkazy:**

```text
Z porovnání ve vystup/porovnani.md vypiš pět největších rizik — u
každého odkaz na konkrétní ustanovení a otázku, kterou mám dodavateli
položit, než podepíšu.
```

:::caution
Agent připraví srovnání a upozorní na rozdíly — právní posouzení ale
nenahradí. U důležitých smluv dejte výstup právníkovi; se srovnáním v ruce
to bude rychlejší i levnější.
:::

## Kudy dál

- Ukázky pro [firmy](/pro-koho/firmy/)
  a [profese s mlčenlivostí](/pro-koho/profese-s-mlcenlivosti/).
- Citlivé smlouvy? Nejdřív [rozhodněte o datech](/vase-data/zdr/).
