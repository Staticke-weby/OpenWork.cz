---
title: "Napojení nástrojů na OpenWork: MCP a připojené služby"
description: "Jak v aplikaci OpenWork dát agentovi přístup k dalším službám (e-mail, kalendář, Slack, Notion…): OpenWork Connect pro běžné služby a vlastní MCP server pro vše ostatní."
sidebar:
  order: 4
last_verified: 2026-08-31
---

Sám o sobě pracuje agent jen s vaší složkou a vestavěným prohlížečem. Když ho
chcete pustit i k dalším službám — třeba e-mailu, kalendáři nebo Slacku —
připojíte je přímo v aplikaci OpenWork. Nejde o programování: je to pár
kliknutí v nastavení.

## Co je MCP

**MCP** (Model Context Protocol) je způsob, jak agent připojí další nástroj
nebo službu. Jakmile nástroj přes MCP připojíte, agent s ním umí sám pracovat
vedle toho, co zvládal doteď.

## Cesta 1: OpenWork Connect (běžné služby)

Pro **Gmail, Google Kalendář, Google Drive, Slack, Notion nebo Linear** má
OpenWork připravené připojení — nemusíte nic nastavovat ručně:

1. V aplikaci otevřete `Settings` → `OpenWork Connect` a přihlaste se.
2. U služby ve výpisu `Needs your sign-in` klikněte na `Connect` a povolte
   přístup na přihlašovací stránce služby.
3. Po návratu do OpenWorku se služba přesune do `Ready to use` — hotovo.

Pak už agentovi říkáte, **co chcete**, ne jak se nástroj jmenuje: „Shrň mi
pět nejnovějších e-mailů" nebo „Jaké mám zítra schůzky?"

:::note
OpenWork Connect vyžaduje přihlášení k účtu OpenWork a organizaci, která má
Connect zapnutý (typicky týmy a firmy). Chcete zůstat bez účtu a čistě
lokálně? Použijte cestu 2 — ta je zdarma a funguje bez přihlášení.
:::

## Cesta 2: vlastní MCP server (vše ostatní)

Službu, která v Connectu není — nebo když nechcete účet — připojíte jako
**vlastní MCP server**, zdarma a jen pro aktuální složku (workspace):

1. V aplikaci otevřete `Settings` → `Library`, rozbalte `Advanced settings`
   a klikněte na `Add workspace MCP`.
2. Vyplňte název a adresu (URL) serveru a označte, zda vyžaduje přihlášení
   přes OAuth (předání přístupu bez sdílení hesla).
3. Dokončete schválení v prohlížeči — pak vás vrátí zpět do OpenWorku.

Adresu MCP serveru najdete v dokumentaci dané služby; vlastní MCP dnes má
řada nástrojů. Když služba nabízí místo toho jen klientský klíč (client ID
a secret), přidejte ji přes `Add workspace MCP` → `OAuth on this device`.

### Most k dalším službám: Composio

Nemá služba vlastní MCP? Poslouží
**[Composio](https://composio.dev/)** — brána k více než 1 000 integrací,
která sama funguje jako MCP server. Přidáte ji cestou 2 s adresou
`https://connect.composio.dev/mcp`; má i bezplatný plán bez platební karty.
Kde vlastní MCP existuje, připojte ho ale přímo — bez prostředníka.

## Na co si dát pozor

Připojením nástroje dáváte agentovi přístup k dané službě — připojujte jen
to, čemu rozumíte a co agent opravdu potřebuje. U citlivých služeb zvažte,
jaká oprávnění udělíte (viz [Bezpečnost](/vase-data/bezpecnost/)).

## Kudy dál

- **[Dovednosti (skills)](/prace-se-slozkou/dovednosti-skills/)** — postupy nad
  připojenými službami.
- **[Automatizace činností](/co-vytvorite/automatizace/)** — co s připojenými
  systémy zvládnete.
- **[Bezpečnost](/vase-data/bezpecnost/)** — oprávnění s rozmyslem.

---

**Odkud čerpáme:** dokumentace OpenWork
([připojení služeb](https://openworklabs.com/docs/start-here/connect-your-stack/connect-services),
[vlastní MCP server](https://openworklabs.com/docs/start-here/connect-your-stack/add-an-mcp-server))
a [composio.dev](https://composio.dev/).
