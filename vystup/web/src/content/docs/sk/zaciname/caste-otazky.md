---
title: "OpenWork: časté otázky"
description: "Odpovede na prvé otázky o OpenWorku: je to zadarmo, musím vedieť programovať, kam idú dáta, aký model zvoliť a na čom to beží."
sidebar:
  order: 6
last_verified: 2026-08-31
# Štruktúrované dáta pre vyhľadávače. Pri zmene otázok nižšie aktualizuj aj JSON-LD.
head:
  - tag: script
    attrs:
      type: application/ld+json
    content: >-
      {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"Je OpenWork naozaj zadarmo?","acceptedAnswer":{"@type":"Answer","text":"Samotná aplikácia áno — OpenWork je zadarmo a má otvorený kód. Za AI platíte poskytovateľovi za spotrebu; vyskúšať to ide aj s bezplatnými modelmi."}},
      {"@type":"Question","name":"Musím vedieť programovať?","acceptedAnswer":{"@type":"Answer","text":"Nie. Úlohu zadáte vlastnými slovami a agent ju urobí za vás."}},
      {"@type":"Question","name":"Odchádzajú moje dáta niekam preč?","acceptedAnswer":{"@type":"Answer","text":"V desktopovom režime vaše súbory zostávajú na počítači. Poskytovateľovi modelu sa posiela len vaše zadanie; s lokálnymi modelmi neodchádza nič."}},
      {"@type":"Question","name":"Aký model si mám vybrať?","acceptedAnswer":{"@type":"Answer","text":"Na štart odporúčame DeepSeek V4.1 Flash cez európsku bránu Melious alebo Cortecs, ktoré počítajú len v Európe. Podľa typu práce sa hodia rôzne modely."}},
      {"@type":"Question","name":"Potrebujem výkonný počítač?","acceptedAnswer":{"@type":"Answer","text":"Na bežné použitie nie — keď necháte výpočet na poskytovateľovi, stačí obyčajný počítač. Výkonný stroj je potrebný len pre lokálne AI modely."}},
      {"@type":"Question","name":"Čím sa OpenWork líši od Claude Cowork alebo Codexu?","acceptedAnswer":{"@type":"Answer","text":"Robí v jadre to isté, ale je zadarmo, s otvoreným kódom a bez zviazania s jedným dodávateľom."}},
      {"@type":"Question","name":"Na čom OpenWork beží?","acceptedAnswer":{"@type":"Answer","text":"Na Windows, macOS aj Linuxe. Stiahnete ho zadarmo na openworklabs.com."}},
      {"@type":"Question","name":"Funguje OpenWork bez internetu?","acceptedAnswer":{"@type":"Answer","text":"Len s lokálnymi AI modelmi, ktoré bežia priamo u vás. U poskytovateľa je internet potrebný."}},
      {"@type":"Question","name":"Môžem OpenWork používať vo firme?","acceptedAnswer":{"@type":"Answer","text":"Áno. Pre jednotlivcov je desktopová aplikácia zadarmo; pre tímy a firmy sú platené plány s centrálnou správou."}},
      {"@type":"Question","name":"Môžem agentovi dať prístup k e-mailu, kalendáru či ďalším službám?","acceptedAnswer":{"@type":"Answer","text":"Áno, cez MCP a Composio. Kde má služba vlastné pripojenie, použijete ho priamo."}},
      {"@type":"Question","name":"Kde sa poradiť s ostatnými?","acceptedAnswer":{"@type":"Answer","text":"V Discord komunite OpenWork komunita CZ/SK — po česky a slovensky, od prvých krôčikov po pokročilé postupy."}}
      ]}
---

Najčastejšie otázky nováčikov. Dlhšie témy majú vlastnú stránku — odkazujeme na ne.

## Je to naozaj zadarmo?

Samotná aplikácia áno — OpenWork je **zadarmo a má otvorený kód**. Za AI potom
platíte poskytovateľovi za spotrebu; vyskúšať to môžete s bezplatnými modelmi,
ale na každodennú prácu odporúčame **platené modely** (lepšia rýchlosť, kvalita
a stabilita). Podrobne: [Koľko to stojí](/sk/kolik-to-stoji/).

## Musím vedieť programovať?

Nie. Úlohu zadáte **vlastnými slovami** a agent ju urobí za vás.

## Odchádzajú moje dáta niekam preč?

V desktopovom režime **vaše súbory zostávajú na počítači**. Poskytovateľovi
modelu sa posiela len vaše zadanie — a len keď si výpočet u poskytovateľa
zvolíte. Keď nechcete posielať nič, môžete použiť
[lokálne AI modely](/sk/vase-data/lokalni-ai/). Viac o dátach:
[Vaše dáta](/sk/vase-data/) a [nulové uchovávanie dát](/sk/vase-data/zdr/).

## Aký model si mám vybrať?

Na štart odporúčame **[DeepSeek V4.1 Flash](/sk/modely/eu/deepseek-v4-1-flash/)** cez európsku
bránu [Melious](/sk/modely/poskytovatele/melious/) alebo
[Cortecs](/sk/modely/poskytovatele/cortecs/), ktoré počítajú len v Európe.
Podľa typu práce sa hodia rôzne modely — prehľad je
v [katalógu modelov](/sk/modely/katalog/).

## Potrebujem výkonný počítač?

Na bežné použitie nie — keď necháte výpočet na
[poskytovateľovi](/sk/vase-data/lokalni-ai/), stačí obyčajný počítač.
Výkonný stroj potrebujete len na prevádzku lokálnych AI modelov priamo u seba.

## Čím sa líši od Claude Cowork alebo Codexu?

OpenWork robí v jadre to isté, ale je **zadarmo, s otvoreným kódom a bez
zviazania s jedným dodávateľom**. Porovnanie:
[OpenWork vs. Claude Cowork a Codex](/sk/vase-data/openwork-vs-claude-cowork/).

## Na čom OpenWork beží?

Na **Windows, macOS aj Linuxe**. Stiahnete ho zadarmo na
[openworklabs.com/download](https://openworklabs.com/download).

## Funguje OpenWork bez internetu?

Bez internetu funguje len s [lokálnymi AI modelmi](/sk/vase-data/lokalni-ai/),
ktoré bežia priamo u vás. Keď necháte výpočet na poskytovateľovi, internet
potrebný je.

## Môžem OpenWork používať vo firme?

Áno. Pre jednotlivcov je desktopová aplikácia zadarmo; pre tímy a firmy sú
platené plány s centrálnou správou (viď [Koľko to stojí](/sk/kolik-to-stoji/)).

## Môžem agentovi dať prístup k e-mailu, kalendáru či ďalším službám?

Áno, cez [MCP a Composio](/sk/prace-se-slozkou/napojeni-nastroju/).

## Kde sa poradiť s ostatnými?

V Discord komunite
**[OpenWork komunita CZ/SK](https://discord.gg/dKYspwbsSR)** — po česky
a slovensky, od prvých krôčikov po pokročilé postupy. Spýtajte sa na
čokoľvek, alebo sa podeľte o to, čo sa vám podarilo.

## Kadiaľ ďalej

- **[Čo je OpenWork](/sk/zaciname/co-je-openwork/)** — základné predstavenie.
- **[Koľko to stojí](/sk/kolik-to-stoji/)** — platba za spotrebu podrobne.
- **[Vaše dáta](/sk/vase-data/)** — čo zostáva u vás.

---

**Odkiaľ čerpáme:** [openworklabs.com](https://openworklabs.com/) a
[opencode](https://opencode.ai/docs/).
