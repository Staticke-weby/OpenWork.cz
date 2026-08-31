---
title: "Napojení nástrojů na OpenWork: MCP a Composio"
description: "Jak dát AI agentovi přístup k dalším službám (e-mail, kalendář, GitHub…) přes MCP. Kde služba nemá vlastní MCP server, použijete Composio — most k 1000+ nástrojům."
sidebar:
  order: 4
last_verified: 2026-08-31
---

Sám o sobě pracuje agent jen s vaší složkou a vestavěným prohlížečem. Když ho
chcete pustit i k dalším službám — třeba e-mailu, kalendáři nebo GitHubu —
připojíte je přes **MCP**.

## Co je MCP

**MCP** (Model Context Protocol) je způsob, jak agent připojí další nástroj nebo
službu. Jakmile nástroj přes MCP připojíte, agent s ním umí sám pracovat vedle
toho, co zvládal doteď.

## Dvě cesty, jak nástroj připojit

### 1. Nativní MCP (když ho služba má)

Řada služeb má **vlastní MCP server** — ten připojíte přímo. Je to nejjednodušší
a **doporučená cesta všude, kde vlastní MCP existuje**. Příklady nástrojů
s vlastním MCP: **Sentry** (chyby v aplikacích), **Context7** (hledání
v dokumentaci) nebo **Grep** (hledání v kódu na GitHubu).

Nový MCP server se přidává v nastavení (v konfiguraci v sekci `mcp`). Podrobně
to popisuje [dokumentace opencode k MCP](https://opencode.ai/docs/mcp-servers/).

### 2. Composio (když nativní MCP chybí)

Ne každá služba vlastní MCP má. Pro ty ostatní se hodí **[Composio](https://composio.dev/)**
— platforma, která zpřístupní **přes 1 000 integrací** (Gmail, Slack, GitHub,
Notion, Kalendář a další) a funguje přes MCP. Má i **bezplatný plán**
(100 000 volání měsíčně, bez platební karty).

**Composio používejte jen tam, kde služba nemá vlastní MCP.** Když vlastní MCP
existuje, připojte ho přímo — je to jednodušší a bez prostředníka.

Composio se přidá jako vzdálený (remote) MCP server. Do konfigurace pod klíč
`mcp` vložíte:

```json
{
  "mcp": {
    "composio": {
      "type": "remote",
      "url": "https://connect.composio.dev/mcp",
      "enabled": true
    }
  }
}
```

Poté se otevře přihlášení v prohlížeči, kde Composio povolíte. Hotovo — v chatu
pak agentovi řeknete, ať se ke Composiu připojí, a on si vyžádá přihlášení
k dané službě.

## Na co si dát pozor

Připojením nástroje dáváte agentovi přístup k dané službě — připojujte jen to,
čemu rozumíte a co agent opravdu potřebuje. U citlivých služeb zvažte, jaká
oprávnění udělíte.

---

**Odkud čerpáme:** [dokumentace opencode k MCP](https://opencode.ai/docs/mcp-servers/),
[composio.dev](https://composio.dev/) a
[návod Composio pro OpenCode](https://composio.dev/content/mcp-with-opencode).
Naposledy ověřeno 31. srpna 2026.
