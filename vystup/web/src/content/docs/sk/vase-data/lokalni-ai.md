---
title: "Kde beží výpočet: poskytovateľ, alebo lokálna AI"
description: "Pre väčšinu ľudí je najpraktickejší poskytovateľ modelov — začnete zadarmo a platíte za spotrebu. Lokálne AI modely majú zmysel len pre menšinu. Ako si vybrať."
sidebar:
  order: 1
last_verified: 2026-08-31
tagy: [domacnost/zdravi]
---

Keď AI spracúva vaše zadanie, hovorí sa tomu **výpočet** (anglicky *inference*).
Ten výpočet musí niekde prebehnúť — buď na **serveri poskytovateľa**, alebo
**priamo u vás na počítači**. Pre drvivú väčšinu ľudí je praktickejšie to prvé.

## Poskytovateľ modelov (odporúčaná cesta)

Najjednoduchšie a najbežnejšie je zveriť výpočet **poskytovateľovi**: vaše
zadanie sa pošle na jeho server, tam sa spracuje a odpoveď sa vám vráti.

- **Najlepšie modely bez nárokov na váš počítač.** Dosiahnete aj na tie
  najchytrejšie modely, nech máte doma akýkoľvek stroj.
- **Vyskúšať môžete zadarmo.** Rad modelov má
  [bezplatnú úroveň](/sk/kolik-to-stoji/poskytovatele-ai-zdarma/), takže si OpenWork
  osaháte bez platenia.
- **Na každodennú prácu odporúčame platené modely.** Bezplatné modely sú fajn na
  vyskúšanie, ale platené dajú citeľne lepšiu **rýchlosť, kvalitu a stabilitu**.
  Najjednoduchšie je zaobstarať si základné predplatné
  [OpenCode Go](https://opencode.ai/go?ref=K0VC03J925) a platíte len za spotrebu
  (viď [Koľko to stojí](/sk/kolik-to-stoji/)).
- **Dáta opúšťajú váš počítač**, preto záleží na tom, komu ich zveríte a či si
  ich niekde neukladá. Vyberte si poskytovateľa s
  [nulovým uchovávaním dát (ZDR)](/sk/vase-data/zdr/).

V OpenWorku pritom **vaše súbory zostávajú na počítači** — poskytovateľovi sa
posiela len samotné zadanie vami zvolenému modelu.

## Lokálne AI modely (len pre menšinu)

**Lokálne AI modely** si stiahnete a spustíte priamo na svojom počítači. Znie to
lákavo — dáta nikam neodídu a za výpočet neplatíte — ale pre väčšinu ľudí sa to
neoplatí:

- Slušné modely potrebujú **výkonný počítač** (hlavne pamäť a grafickú kartu).
- Sprevádzkovanie dá **viac práce** než pár kliknutí.

Zmysel to dáva hlavne vtedy, keď **dáta naozaj nesmú opustiť váš stôl** (napríklad
pri profesiách s mlčanlivosťou) alebo keď chcete bežať **bez internetu** — a
zároveň máte dosť výkonný počítač. OpenWork stavia na nástroji **opencode**,
ktorý lokálne modely vie (cez **Ollama**, **LM Studio** alebo **llama.cpp**).
V aplikácii ich pripojíte ako vlastný model (po anglicky: **Settings → AI
Providers → Add a custom LLM**), kde zadáte adresu svojho lokálneho servera.

## Ako si vybrať

- **Väčšina ľudí:** poskytovateľ — začnite zadarmo a plaťte za spotrebu, ako
  potrebujete. Kvôli súkromiu zvoľte poskytovateľa s nulovým uchovávaním dát.
- **Citlivé dáta alebo prevádzka bez internetu + výkonný počítač:** zvážte
  lokálne AI modely.
- Nie ste zviazaní s jednou voľbou — v OpenWorku model kedykoľvek vymeníte.

:::tip
Neviete, kde začať? Nastavte si [OpenCode Go](https://opencode.ai/go?ref=K0VC03J925)
ako prvú bránu k modelom. Ako východiskový odporúčame **GLM 5.3 Flash** — dobrý
pomer rýchlosti, kvality a ceny.
:::

## Kadiaľ ďalej

- **[Nulové uchovávanie dát (ZDR)](/sk/vase-data/zdr/)** — kompromis, keď lokálny
  model nie je praktický.
- **[Katalóg modelov](/sk/modely/katalog/)** — ktoré modely sú otvorené a kde ich vziať.
- **[Profesie s mlčanlivosťou](/sk/pro-koho/profese-s-mlcenlivosti/)** — citlivé
  dáta v praxi.

---

**Odkiaľ čerpáme:** dokumentácia [opencode](https://opencode.ai/docs/) a
[OpenWork](https://openworklabs.com/). Zmeny sledujeme v [histórii zmien](/sk/o-webu/historie-zmen/).
