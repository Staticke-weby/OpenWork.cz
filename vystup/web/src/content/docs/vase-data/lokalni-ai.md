---
title: "Kde běží výpočet: poskytovatel, nebo lokální AI"
description: "Pro většinu lidí je nejpraktičtější poskytovatel modelů — začnete zdarma a platíte za spotřebu. Lokální AI modely mají smysl jen pro menšinu. Jak si vybrat."
sidebar:
  order: 1
last_verified: 2026-08-31
tagy: [domacnost/zdravi]
---

Když AI zpracovává vaše zadání, říká se tomu **výpočet** (anglicky *inference*).
Ten výpočet musí někde proběhnout — buď na **serveru poskytovatele**, nebo
**přímo u vás na počítači**. Pro naprostou většinu lidí je praktičtější to první.

## Poskytovatel modelů (doporučená cesta)

Nejjednodušší a nejběžnější je svěřit výpočet **poskytovateli**: vaše zadání se
pošle na jeho server, tam se zpracuje a odpověď se vám vrátí.

- **Nejlepší modely bez nároků na váš počítač.** Dosáhnete i na ty nejchytřejší
  modely, ať máte doma jakýkoli stroj.
- **Vyzkoušet můžete zdarma.** Řada modelů má
  [bezplatnou úroveň](/kolik-to-stoji/poskytovatele-ai-zdarma/), takže si OpenWork
  osaháte bez placení.
- **Pro každodenní práci doporučujeme placené modely.** Bezplatné modely jsou
  fajn na vyzkoušení, ale placené dají znatelně lepší **rychlost, kvalitu
  a stabilitu**. Nejjednodušší je pořídit si základní předplatné
  [OpenCode Go](https://opencode.ai/go?ref=K0VC03J925) — jedné brány, přes
  kterou se dostanete k dobrým modelům, a platíte jen za spotřebu (viz
  [Kolik to stojí](/kolik-to-stoji/)).
- **Data opouštějí váš počítač**, proto záleží na tom, komu je svěříte a jestli
  si je někde neukládá. Vyberte si poskytovatele s
  [nulovým uchováváním dat (ZDR)](/vase-data/zdr/) — pak i tato cesta drží vaše
  data v bezpečí.

V OpenWorku přitom **vaše soubory zůstávají na počítači** — poskytovateli se
posílá jen samotné zadání vámi zvolenému modelu.

## Lokální AI modely (jen pro menšinu)

**Lokální AI modely** si stáhnete a spustíte přímo na svém počítači. Zní to
lákavě — data nikam neodejdou a za výpočet neplatíte — ale pro většinu lidí se
to nevyplatí:

- Slušné modely potřebují **výkonný počítač** (hlavně paměť a grafickou kartu).
  Na běžném notebooku rozjedete jen menší modely, které nestačí těm od
  poskytovatelů.
- Zprovoznění dá **víc práce** než pár kliknutí.

Smysl to dává hlavně tehdy, když **data opravdu nesmí opustit váš stůl** (třeba
u profesí s mlčenlivostí) nebo když chcete běžet **bez internetu** — a zároveň
máte dost výkonný počítač. OpenWork staví na nástroji **opencode**, který
lokální modely umí (přes **Ollama**, **LM Studio** nebo **llama.cpp**).
V aplikaci je připojíte jako vlastní model (v angličtině: **Settings → AI
Providers → Add a custom LLM**), kde zadáte adresu svého lokálního serveru.

## Jak si vybrat

- **Většina lidí:** poskytovatel — začněte zdarma a plaťte za spotřebu, jak
  potřebujete. Kvůli soukromí zvolte poskytovatele s nulovým uchováváním dat.
- **Citlivá data nebo provoz bez internetu + výkonný počítač:** zvažte lokální
  AI modely.
- Nejste svázaní s jednou volbou — v OpenWorku model kdykoli vyměníte.

:::tip
Nevíte, kde začít? Nastavte si evropskou bránu [Melious](/modely/poskytovatele/melious/)
— počítá jen v Evropě a z vašich zadání si nic neukládá. Jako výchozí
doporučujeme **DeepSeek V4.1 Flash** — dobrý poměr rychlosti, kvality a ceny.
:::

## Kudy dál

- **[Nulové uchovávání dat (ZDR)](/vase-data/zdr/)** — kompromis, když lokální
  model není praktický.
- **[Katalog modelů](/modely/katalog/)** — které modely jsou otevřené a kde je vzít.
- **[Profese s mlčenlivostí](/pro-koho/profese-s-mlcenlivosti/)** — citlivá data
  v praxi.

---

**Odkud čerpáme:** dokumentace [opencode](https://opencode.ai/docs/) a
[OpenWork](https://openworklabs.com/). Změny sledujeme v [historii změn](/o-webu/historie-zmen/).
