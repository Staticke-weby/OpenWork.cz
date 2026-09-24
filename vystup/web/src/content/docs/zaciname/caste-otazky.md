---
title: "OpenWork: časté otázky"
description: "Odpovědi na první otázky o OpenWorku: je to zdarma, musím umět programovat, kam jdou data, jaký model zvolit a na čem to běží."
sidebar:
  order: 6
last_verified: 2026-08-31
# Strukturovaná data pro vyhledávače. Při změně otázek níže aktualizuj i JSON-LD.
head:
  - tag: script
    attrs:
      type: application/ld+json
    content: >-
      {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"Je OpenWork opravdu zdarma?","acceptedAnswer":{"@type":"Answer","text":"Samotná aplikace ano — OpenWork je zdarma a má otevřený kód. Za AI platíte poskytovateli za spotřebu; vyzkoušet to jde i s bezplatnými modely."}},
      {"@type":"Question","name":"Musím umět programovat?","acceptedAnswer":{"@type":"Answer","text":"Ne. Úkol zadáte vlastními slovy a agent ho udělá za vás."}},
      {"@type":"Question","name":"Odcházejí moje data někam pryč?","acceptedAnswer":{"@type":"Answer","text":"V desktopovém režimu vaše soubory zůstávají na počítači. Poskytovateli modelu se posílá jen vaše zadání; s lokálními modely neodchází nic."}},
      {"@type":"Question","name":"Jaký model si mám vybrat?","acceptedAnswer":{"@type":"Answer","text":"Pro start doporučujeme DeepSeek V4.1 Flash přes evropskou bránu Melious nebo Cortecs, které počítají jen v Evropě. Podle typu práce se hodí různé modely."}},
      {"@type":"Question","name":"Potřebuju výkonný počítač?","acceptedAnswer":{"@type":"Answer","text":"Pro běžné použití ne — když necháte výpočet na poskytovateli, stačí obyčejný počítač. Výkonný stroj je potřeba jen pro lokální AI modely."}},
      {"@type":"Question","name":"Čím se OpenWork liší od Claude Cowork nebo Codexu?","acceptedAnswer":{"@type":"Answer","text":"Dělá v jádru totéž, ale je zdarma, s otevřeným kódem a bez svázání s jedním dodavatelem."}},
      {"@type":"Question","name":"Na čem OpenWork běží?","acceptedAnswer":{"@type":"Answer","text":"Na Windows, macOS i Linuxu. Stáhnete ho zdarma na openworklabs.com."}},
      {"@type":"Question","name":"Funguje OpenWork bez internetu?","acceptedAnswer":{"@type":"Answer","text":"Jen s lokálními AI modely, které běží přímo u vás. U poskytovatele je internet potřeba."}},
      {"@type":"Question","name":"Můžu OpenWork používat ve firmě?","acceptedAnswer":{"@type":"Answer","text":"Ano. Pro jednotlivce je desktopová aplikace zdarma; pro týmy a firmy jsou placené plány s centrální správou."}},
      {"@type":"Question","name":"Můžu agentovi dát přístup k e-mailu, kalendáři nebo dalším službám?","acceptedAnswer":{"@type":"Answer","text":"Ano, přes MCP a Composio. Kde má služba vlastní připojení, použijete ho přímo."}},
      {"@type":"Question","name":"Kde se poradit s ostatními?","acceptedAnswer":{"@type":"Answer","text":"V Discord komunitě OpenWork komunita CZ/SK — česky a slovensky, od prvních krůčků po pokročilé postupy."}}
      ]}
---

Nejčastější otázky nováčků. Delší témata mají vlastní stránku — odkazujeme na ně.

## Je to opravdu zdarma?

Samotná aplikace ano — OpenWork je **zdarma a má otevřený kód**. Za AI pak
platíte poskytovateli za spotřebu; vyzkoušet to můžete s bezplatnými modely,
ale pro každodenní práci doporučujeme **placené modely** (lepší rychlost,
kvalita a stabilita). Podrobně: [Kolik to stojí](/kolik-to-stoji/).

## Musím umět programovat?

Ne. Úkol zadáte **vlastními slovy** a agent ho udělá za vás. Nemusíte znát
žádný programovací jazyk.

## Odcházejí moje data někam pryč?

V desktopovém režimu **vaše soubory zůstávají na počítači**. Poskytovateli
modelu se posílá jen vaše zadání — a jen když si výpočet u poskytovatele
zvolíte. Když nechcete posílat nic, můžete použít
[lokální AI modely](/vase-data/lokalni-ai/). Víc o datech:
[Vaše data](/vase-data/) a [nulové uchovávání dat](/vase-data/zdr/).

## Jaký model si mám vybrat?

Pro start doporučujeme **[DeepSeek V4.1 Flash](/modely/eu/deepseek-v4-1-flash/)** přes evropskou
bránu [Melious](/modely/poskytovatele/melious/) nebo
[Cortecs](/modely/poskytovatele/cortecs/), které počítají jen v Evropě.
Podle typu práce se hodí různé modely — přehled je v
[katalogu modelů](/modely/katalog/).

## Potřebuju výkonný počítač?

Pro běžné použití ne — když necháte výpočet na
[poskytovateli](/vase-data/lokalni-ai/), stačí obyčejný počítač. Výkonný
stroj potřebujete jen pro provoz lokálních AI modelů přímo u sebe.

## Čím se liší od Claude Cowork nebo Codexu?

OpenWork dělá v jádru totéž, ale je **zdarma, s otevřeným kódem a bez svázání
s jedním dodavatelem**. Srovnání:
[OpenWork vs. Claude Cowork a Codex](/vase-data/openwork-vs-claude-cowork/).

## Na čem OpenWork běží?

Na **Windows, macOS i Linuxu**. Stáhnete ho zdarma na
[openworklabs.com/download](https://openworklabs.com/download).

## Funguje OpenWork bez internetu?

Bez internetu funguje jen s [lokálními AI modely](/vase-data/lokalni-ai/),
které běží přímo u vás. Když necháte výpočet na poskytovateli, internet potřeba
je — model běží na jeho serveru.

## Můžu OpenWork používat ve firmě?

Ano. Pro jednotlivce je desktopová aplikace zdarma; pro týmy a firmy jsou
placené plány s centrální správou a sdílením přístupů (viz
[Kolik to stojí](/kolik-to-stoji/)).

## Můžu agentovi dát přístup k e-mailu, kalendáři nebo dalším službám?

Ano, přes [MCP a Composio](/prace-se-slozkou/napojeni-nastroju/). Kde má služba
vlastní připojení (MCP), použijete ho přímo; kde ne, poslouží Composio.

## Kde se poradit s ostatními?

V Discord komunitě
**[OpenWork komunita CZ/SK](https://discord.gg/dKYspwbsSR)** — česky
a slovensky, od prvních krůčků po pokročilé postupy. Zeptejte se na cokoli,
nebo se podělte o to, co se vám povedlo.

## Kudy dál

- **[Co je OpenWork](/zaciname/co-je-openwork/)** — základní představení.
- **[Kolik to stojí](/kolik-to-stoji/)** — platba za spotřebu podrobně.
- **[Vaše data](/vase-data/)** — co zůstává u vás.

---

**Odkud čerpáme:** [openworklabs.com](https://openworklabs.com/) a
[opencode](https://opencode.ai/docs/).
