---
title: "ZDR — nulové uchovávání dat: co to je a jak ho poznáte"
description: "Nulové uchovávání dat (zero data retention, ZDR) znamená, že poskytovatel vaše zadání neukládá ani na nich netrénuje. Jak to poznáte a na co se ptát."
sidebar:
  order: 2
last_verified: 2026-08-31
---

**ZDR** znamená **nulové uchovávání dat** (anglicky *zero data retention*).
U poskytovatele s nulovým uchováváním dat se vaše zadání zpracuje a **hned
zahodí** — neukládá se do žádného záznamu a nepoužije se k učení modelu.

## Tři věci, které se pletou

Než si vyberete, oddělte si tři různé věci:

1. **Trénink na datech.** Učí se model z vašich zadání? U seriózních
   poskytovatelů placených modelů zpravidla ne; u některých bezplatných modelů
   ano — proto je dobré to ověřit.
2. **Uchovávání záznamů.** Ukládá si poskytovatel vaše zadání, a na jak dlouho?
   „Nulové uchovávání" znamená, že se nic neukládá. Někteří velcí poskytovatelé
   naopak drží záznamy pár dní (třeba 30) kvůli bezpečnosti.
3. **Kde běží výpočet.** Na cizím serveru, nebo
   [u vás na počítači](/vase-data/lokalni-ai/)? Když běží u vás, otázka
   uchovávání odpadá.

## Jak to poznáte

- **Podívejte se do podmínek poskytovatele** na slova jako „zero data
  retention", „no training" nebo „data se neukládají".
- **Vyberte bránu, která to má ve výchozím stavu.** Evropská brána
  [Cortecs](/zaciname/ekosystem/) zpracovává data jen v Evropě a bez uchovávání.
- **Nechcete řešit vůbec nic?** Sáhněte po
  [lokálních AI modelech](/vase-data/lokalni-ai/) — data pak nikam
  neodejdou.

## Na co se ptát

- Trénuje se na mých datech? (Chcete slyšet „ne".)
- Jak dlouho se uchovávají záznamy? (Ideálně „neuchovávají se".)
- Kde fyzicky probíhá výpočet? (Kvůli EU pravidlům může záležet na zemi.)

Konkrétní poskytovatele vedle sebe najdete ve
**[srovnávací tabulce (ZDR)](/vase-data/zdr/srovnani-poskytovatelu/)** — každý údaj tam má
zdroj a datum ověření.

---

**Odkud čerpáme:** [OpenCode Zen/Go](https://opencode.ai/go?ref=K0VC03J925)
a podmínky jednotlivých poskytovatelů.
