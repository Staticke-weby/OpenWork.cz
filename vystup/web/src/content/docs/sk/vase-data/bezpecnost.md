---
title: "Bezpečnosť: ako si postrážiť kľúče a prístupy"
description: "Praktická bezpečnostná hygiena pri práci s AI v OpenWorku: kam ukladať kľúče, aké oprávnenia dávať agentovi a na čo si dať pozor pri pripojených nástrojoch."
sidebar:
  order: 5
last_verified: 2026-08-31
---

Pár jednoduchých návykov, vďaka ktorým budete v pokoji.

## Strážte si kľúče

**Kľúč** je prístupové heslo pre aplikácie — napríklad kľúč k bráne
[OpenCode Go](/sk/modely/poskytovatele/). Kto ho má, môže cez neho míňať.

- **Nikam ho nevypisujte verejne** — nie do e-mailu, chatu ani do súborov,
  ktoré zdieľate.
- **Keď sa kľúč niekam dostane, zrušte ho** a vytvorte nový.
- **Nastavte si strop útraty**, aby vás neprekvapil účet, keby sa kľúč zneužil.

## Dávajte agentovi len to, čo potrebuje

- **Otvorte len správny priečinok.** Agent vidí len to, čo je v jeho pracovnom
  priečinku — nepúšťajte ho zbytočne na celý disk.
- **Kontrolujte dôležité kroky.** Pri zásadných akciách sa agent pýta;
  nepreskakujte to bez rozmyslu.

## Pozor na pripojené nástroje

Keď agentovi cez [MCP alebo Composio](/sk/prace-se-slozkou/napojeni-nastroju/)
pripojíte ďalšiu službu (e-mail, kalendár…), dávate mu k nej prístup. Pripájajte
len to, čomu rozumiete, a udeľte čo najmenšie potrebné oprávnenia.

## Kde je najbezpečnejšie

Najbezpečnejšie je to, čo nikam neodíde. Keď ide o naozaj citlivé dáta, zvážte
[lokálne AI modely](/sk/vase-data/lokalni-ai/) — potom zostane všetko u vás
na počítači.

## Kadiaľ ďalej

- **[Napojenie nástrojov](/sk/prace-se-slozkou/napojeni-nastroju/)** — oprávnenia
  pri pripájaní služieb.
- **[Nulové uchovávanie dát (ZDR)](/sk/vase-data/zdr/)** — čo sa deje s dátami
  u poskytovateľa.
- **[Spoločná peňaženka](/sk/kolik-to-stoji/spolecna-penezenka/)** — kľúče a stropy
  pre viac ľudí.

---

**Odkiaľ čerpáme:** všeobecné zásady bezpečnosti a funkcie opísané na
[openworklabs.com](https://openworklabs.com/).
