---
title: "ZDR — nulové uchovávanie dát: čo to je a ako ho spoznáte"
description: "Nulové uchovávanie dát (zero data retention, ZDR) znamená, že poskytovateľ vaše zadania neukladá ani na nich netrénuje. Ako to spoznáte a na čo sa pýtať."
sidebar:
  order: 2
last_verified: 2026-08-31
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
   [u vás na počítači](/sk/vase-data/kde-bezi-vypocet/)? Keď beží u vás, otázka
   uchovávania odpadá.

## Ako to spoznáte

- **Pozrite sa do podmienok poskytovateľa** na slová ako „zero data retention",
  „no training" alebo „dáta sa neukladajú".
- **Vyberte bránu, ktorá to má východiskovo.** Európska brána
  [Cortecs](/sk/zaciname/ekosystem/) spracúva dáta len v Európe a bez uchovávania.
- **Nechcete riešiť vôbec nič?** Siahnite po
  [lokálnych AI modeloch](/sk/vase-data/kde-bezi-vypocet/) — dáta potom nikam
  neodídu.

## Na čo sa pýtať

- Trénuje sa na mojich dátach? (Chcete počuť „nie".)
- Ako dlho sa uchovávajú záznamy? (Ideálne „neuchovávajú sa".)
- Kde fyzicky prebieha výpočet? (Kvôli pravidlám EÚ môže záležať na krajine.)

Konkrétnych poskytovateľov vedľa seba nájdete v
**[porovnávacej tabuľke (ZDR)](/sk/vase-data/zdr/tabulka/)** — každý údaj tam má
zdroj a dátum overenia.

---

**Odkiaľ čerpáme:** [dokumentácia OpenCode Zen](https://opencode.ai/docs/zen/)
a podmienky jednotlivých poskytovateľov. Naposledy overené 31. augusta 2026.
