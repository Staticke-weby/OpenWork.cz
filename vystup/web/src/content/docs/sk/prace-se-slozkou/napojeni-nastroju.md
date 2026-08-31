---
title: "Pripojenie nástrojov na OpenWork: MCP a Composio"
description: "Ako dať AI agentovi prístup k ďalším službám (e-mail, kalendár, GitHub…) cez MCP. Kde služba nemá vlastný MCP server, použijete Composio — most k 1000+ nástrojom."
sidebar:
  order: 4
last_verified: 2026-08-31
---

Sám o sebe pracuje agent len s vaším priečinkom a vstavaným prehliadačom. Keď ho
chcete pustiť aj k ďalším službám — napríklad e-mailu, kalendáru alebo GitHubu —
pripojíte ich cez **MCP**.

## Čo je MCP

**MCP** (Model Context Protocol) je spôsob, ako agent pripojí ďalší nástroj alebo
službu. Len čo nástroj cez MCP pripojíte, agent s ním vie sám pracovať.

## Dve cesty, ako nástroj pripojiť

### 1. Natívne MCP (keď ho služba má)

Rad služieb má **vlastný MCP server** — ten pripojíte priamo. Je to
najjednoduchšia a **odporúčaná cesta všade, kde vlastný MCP existuje**. Príklady
nástrojov s vlastným MCP: **Sentry** (chyby v aplikáciách), **Context7**
(hľadanie v dokumentácii) alebo **Grep** (hľadanie v kóde na GitHube).

Nový MCP server sa pridáva v nastavení (v konfigurácii v sekcii `mcp`). Podrobne
to opisuje [dokumentácia opencode k MCP](https://opencode.ai/docs/mcp-servers/).

### 2. Composio (keď natívne MCP chýba)

Nie každá služba vlastné MCP má. Pre tie ostatné sa hodí
**[Composio](https://composio.dev/)** — platforma, ktorá sprístupní **vyše 1 000
integrácií** (Gmail, Slack, GitHub, Notion, Kalendár a ďalšie) a funguje cez MCP.
Má aj **bezplatný plán** (100 000 volaní mesačne, bez platobnej karty).

**Composio používajte len tam, kde služba nemá vlastný MCP.** Keď vlastný MCP
existuje, pripojte ho priamo.

Composio sa pridá ako vzdialený (remote) MCP server. Do konfigurácie pod kľúč
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

Potom sa otvorí prihlásenie v prehliadači, kde Composio povolíte.

## Na čo si dať pozor

Pripojením nástroja dávate agentovi prístup k danej službe — pripájajte len to,
čomu rozumiete, a udeľte čo najmenšie potrebné oprávnenia.

---

**Odkiaľ čerpáme:** [dokumentácia opencode k MCP](https://opencode.ai/docs/mcp-servers/),
[composio.dev](https://composio.dev/) a
[návod Composio pre OpenCode](https://composio.dev/content/mcp-with-opencode).
