---
title: "Ekosystém okolo OpenWork: opencode, OpenCode Go, Cortecs, MCP"
description: "Ako spolu súvisia OpenWork, opencode a brány k modelom OpenCode Zen a Go, európska brána Cortecs a pripojenie služieb cez MCP — zrozumiteľne."
sidebar:
  order: 2
last_verified: 2026-08-31
---

Okolo OpenWork je pár názvov, ktoré sa pletú. Tu je stručne, čo ktorý znamená
a ako spolu súvisia.

## opencode — motor

**opencode** je otvorený nástroj (motor) pre prácu s AI agentmi, na ktorom
OpenWork stavia. Vie pripojiť **desiatky poskytovateľov modelov** a zvláda aj
[lokálne AI modely](/sk/vase-data/kde-bezi-vypocet/). OpenWork k nemu pridáva
príjemnú aplikáciu do počítača.

## OpenCode Zen a OpenCode Go — brány k modelom

**Brána k modelom** je jedno miesto, cez ktoré sa dostanete k mnohým AI modelom
od rôznych poskytovateľov — s jedným kľúčom a jedným účtom, namiesto toho, aby
ste ich riešili každý zvlášť. (**Kľúč** je prístupové heslo pre aplikácie.)

**OpenCode Zen** a **OpenCode Go** sú brány od tvorcov opencode. Pre väčšinu
ľudí odporúčame **[OpenCode Go](https://opencode.ai/go?ref=K0VC03J925)** —
základné predplatné vám dá dobré modely s rýchlosťou, kvalitou a stabilitou.
Ako východiskový model sa hodí **GLM 5.3 Flash**.

## Cortecs — európska brána

**Cortecs** je brána k modelom, ktorá beží **výhradne v Európe**. Hodí sa, keď
potrebujete, aby dáta nespracovával server mimo EÚ. Viac na stránke o
[nulovom uchovávaní dát](/sk/vase-data/zdr/).

## MCP — pripojenie ďalších služieb

**MCP** je spôsob, ako agent pripojí ďalšiu službu alebo nástroj — aby vedel
viac než len pracovať so súbormi v priečinku (napríklad e-mail, kalendár alebo
GitHub). Kde má služba **vlastný MCP server**, pripojíte ho priamo; kde ho nemá,
poslúži **Composio** ako most k tisíckam služieb. Podrobne na stránke
[Pripojenie nástrojov: MCP a Composio](/sk/prace-se-slozkou/napojeni-nastroju/).

## Ako to zapadá dokopy

- **OpenWork** je aplikácia, ktorú používate.
- **opencode** je motor pod ňou.
- **OpenCode Go / Zen** alebo **Cortecs** sú brány, cez ktoré sa dostanete
  k modelom.
- **MCP** pridá agentovi ďalšie schopnosti.

Na začiatok si vystačíte s OpenWorkom a jednou bránou (odporúčane OpenCode Go) —
zvyšok príde, keď ho budete potrebovať.

---

**Odkiaľ čerpáme:** [opencode](https://opencode.ai/docs/),
[OpenCode Zen](https://opencode.ai/docs/zen/) a
[openworklabs.com](https://openworklabs.com/). Naposledy overené 31. augusta 2026.
