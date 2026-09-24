---
title: "ZDR — nulové uchovávanie dát: čo to je a ako ho spoznáte"
description: "Nulové uchovávanie dát (zero data retention, ZDR) znamená, že poskytovateľ vaše zadania neukladá ani na nich netrénuje. Ako to spoznáte a na čo sa pýtať."
sidebar:
  order: 2
last_verified: 2026-09-24
---

**ZDR** znamená **nulové uchovávanie dát** (anglicky *zero data retention*).
Pri poskytovateľovi s nulovým uchovávaním dát sa vaše zadanie spracuje a **hneď
zahodí** — neukladá sa do žiadneho záznamu a nepoužije sa na učenie modelu.

## Tri veci, ktoré sa pletú

Než si vyberiete, oddeľte si tri rôzne veci:

1. **Tréning na dátach.** Učí sa model z vašich zadaní? Pri seriózných
   poskytovateľoch platených modelov spravidla nie; pri niektorých bezplatných
   modeloch áno — preto je dobré to overiť.
2. **Uchovávanie záznamov.** Ukladá si poskytovateľ vaše zadania, a ako dlho?
   „Nulové uchovávanie" znamená, že sa nič neukladá. Niektorí veľkí
   poskytovatelia naopak držia záznamy pár dní (napríklad 30) kvôli bezpečnosti.
3. **Kde beží výpočet.** Na cudzom serveri, alebo
   [u vás na počítači](/sk/vase-data/lokalni-ai/)? Keď beží u vás, otázka
   uchovávania odpadá.

## Ako to spoznáte

- **Pozrite sa do podmienok poskytovateľa** na slová ako „zero data retention",
  „no training" alebo „dáta sa neukladajú".
- **Vyberte bránu, ktorá to má východiskovo.** Európska brána
  [Melious](/sk/modely/poskytovatele/melious/) spracúva dáta len v Európe
  a obsah zadaní neukladá.
- **Nechcete riešiť vôbec nič?** Siahnite po
  [lokálnych AI modeloch](/sk/vase-data/lokalni-ai/) — dáta potom nikam
  neodídu.

## Na čo sa pýtať

- Trénuje sa na mojich dátach? (Chcete počuť „nie".)
- Ako dlho sa uchovávajú záznamy? (Ideálne „neuchovávajú sa".)
- Kde fyzicky prebieha výpočet? (Kvôli pravidlám EÚ môže záležať na krajine.)

Konkrétnych poskytovateľov vedľa seba nájdete v
**[porovnávacej tabuľke (ZDR)](/sk/vase-data/zdr/srovnani-poskytovatelu/)** — každý údaj tam má
zdroj a dátum overenia.

## Kadiaľ ďalej

- **[Porovnanie poskytovateľov (ZDR)](/sk/vase-data/zdr/srovnani-poskytovatelu/)** —
  overená tabuľka so zdrojmi.
- **[GDPR a NIS2](/sk/vase-data/gdpr-a-nis2/)** — európske pravidlá.
- **[Profesie s mlčanlivosťou](/sk/pro-koho/profese-s-mlcenlivosti/)** — ako
  s citlivými dátami pracovať v praxi.

---

**Odkiaľ čerpáme:** [OpenCode Zen/Go](https://opencode.ai/go?ref=K0VC03J925)
a podmienky jednotlivých poskytovateľov.
