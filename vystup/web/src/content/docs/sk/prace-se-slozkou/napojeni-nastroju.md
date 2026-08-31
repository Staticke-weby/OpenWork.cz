---
title: "Napojenie nástrojov na OpenWork: MCP a pripojené služby"
description: "Ako v aplikácii OpenWork dať agentovi prístup k ďalším službám (e-mail, kalendár, Slack, Notion…): OpenWork Connect pre bežné služby a vlastný MCP server pre všetko ostatné."
sidebar:
  order: 4
last_verified: 2026-08-31
---

Sám o sebe pracuje agent len s vaším priečinkom a vstavaným prehliadačom. Keď
ho chcete pustiť aj k ďalším službám — napríklad e-mailu, kalendáru alebo
Slacku — pripojíte ich priamo v aplikácii OpenWork. Nejde o programovanie:
je to pár kliknutí v nastavení.

## Čo je MCP

**MCP** (Model Context Protocol) je spôsob, ako agent pripojí ďalší nástroj
alebo službu. Len čo nástroj cez MCP pripojíte, agent s ním vie sám pracovať
popri tom, čo zvládal doteraz.

## Cesta 1: OpenWork Connect (bežné služby)

Pre **Gmail, Google Kalendár, Google Drive, Slack, Notion alebo Linear** má
OpenWork pripravené pripojenie — nemusíte nič nastavovať ručne:

1. V aplikácii otvorte `Settings` → `OpenWork Connect` a prihláste sa.
2. Pri službe vo výpise `Needs your sign-in` kliknite na `Connect` a povoľte
   prístup na prihlasovacej stránke služby.
3. Po návrate do OpenWorku sa služba presunie do `Ready to use` — hotovo.

Potom už agentovi hovoríte, **čo chcete**, nie ako sa nástroj volá: „Zhrň mi
päť najnovších e-mailov" alebo „Aké mám zajtra stretnutia?"

:::note
OpenWork Connect vyžaduje prihlásenie k účtu OpenWork a organizáciu, ktorá má
Connect zapnutý (typicky tímy a firmy). Chcete zostať bez účtu a čisto
lokálne? Použite cestu 2 — tá je zadarmo a funguje bez prihlásenia.
:::

## Cesta 2: vlastný MCP server (všetko ostatné)

Službu, ktorá v Connecte nie je — alebo keď nechcete účet — pripojíte ako
**vlastný MCP server**, zadarmo a len pre aktuálny priečinok (workspace):

1. V aplikácii otvorte `Settings` → `Library`, rozbaľte `Advanced settings`
   a kliknite na `Add workspace MCP`.
2. Vyplňte názov a adresu (URL) servera a označte, či vyžaduje prihlásenie
   cez OAuth (odovzdanie prístupu bez zdieľania hesla).
3. Dokončite schválenie v prehliadači — potom vás vráti späť do OpenWorku.

Adresu MCP servera nájdete v dokumentácii danej služby; vlastné MCP dnes má
mnoho nástrojov. Keď služba ponúka namiesto toho len klientský kľúč (client
ID a secret), pridajte ju cez `Add workspace MCP` → `OAuth on this device`.

### Most k ďalším službám: Composio

Nemá služba vlastné MCP? Poslúži
**[Composio](https://composio.dev/)** — brána k viac než 1 000 integráciám,
ktorá sama funguje ako MCP server. Pridáte ju cestou 2 s adresou
`https://connect.composio.dev/mcp`; má aj bezplatný plán bez platobnej karty.
Kde vlastné MCP existuje, pripojte ho ale priamo — bez prostredníka.

## Na čo si dať pozor

Pripojením nástroja dávate agentovi prístup k danej službe — pripájajte len
to, čomu rozumiete a čo agent naozaj potrebuje. Pri citlivých službách
zvážte, aké oprávnenia udelíte (viď [Bezpečnosť](/sk/vase-data/bezpecnost/)).

---

**Odkiaľ čerpáme:** dokumentácia OpenWork
([pripojenie služieb](https://openworklabs.com/docs/start-here/connect-your-stack/connect-services),
[vlastný MCP server](https://openworklabs.com/docs/start-here/connect-your-stack/add-an-mcp-server))
a [composio.dev](https://composio.dev/).
