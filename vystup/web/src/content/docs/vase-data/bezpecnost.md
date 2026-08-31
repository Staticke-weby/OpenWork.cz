---
title: "Bezpečnost: jak si pohlídat klíče a přístupy"
description: "Praktická bezpečnostní hygiena při práci s AI v OpenWorku: kam ukládat klíče, jaká oprávnění dávat agentovi a na co si dát pozor u připojených nástrojů."
sidebar:
  order: 5
last_verified: 2026-08-31
---

Pár jednoduchých návyků, díky kterým budete v klidu.

## Hlídejte si klíče

**Klíč** je přístupové heslo pro aplikace — třeba klíč k bráně
[OpenCode Go](/zaciname/ekosystem/). Kdo ho má, může přes něj utrácet.

- **Nikam ho nevypisujte veřejně** — ne do e-mailu, chatu ani do souborů, které
  sdílíte.
- **Když se klíč někam dostane, zrušte ho** a vytvořte nový. U poskytovatele to
  bývá otázka pár kliknutí.
- **Nastavte si strop útraty**, ať vás nepřekvapí účet, kdyby se klíč zneužil.

## Dávejte agentovi jen to, co potřebuje

- **Otevřete jen správnou složku.** Agent vidí jen to, co je v jeho pracovní
  složce — nepouštějte ho zbytečně na celý disk.
- **Kontrolujte důležité kroky.** U zásadních akcí se agent ptá; nepřeskakujte
  to bez rozmyslu.

## Pozor na připojené nástroje

Když agentovi přes [MCP nebo Composio](/prace-se-slozkou/napojeni-nastroju/)
připojíte další službu (e-mail, kalendář…), dáváte mu k ní přístup. Připojujte
jen to, čemu rozumíte, a udělte co nejmenší potřebná oprávnění.

## Kde je nejbezpečněji

Nejbezpečnější je to, co nikam neodejde. Když jde o opravdu citlivá data,
zvažte [lokální AI modely](/vase-data/lokalni-ai/) — pak zůstane všechno
u vás na počítači.

---

**Odkud čerpáme:** obecné zásady bezpečnosti a funkce popsané na
[openworklabs.com](https://openworklabs.com/).
