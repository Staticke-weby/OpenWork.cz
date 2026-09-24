---
title: "Text, obrázok, zvuk, video: aké vstupy AI model prijme"
description: "AI modely sa zásadne líšia v tom, čo prijmú: niektoré len text, iné aj obrázky, zvuk a video. Čo to znamená pre skeny, fotky bločkov a PDF — a ako si vybrať."
sidebar:
  order: 2
  label: "Vstupy: text, obrázok, video"
---

Modely sa na prvý pohľad líšia cenou a chytrosťou. V praxi ale najčastejšie
narazíte na iný rozdiel: **čo model prijme ako vstup**. Niektoré vedia len
text, iné aj obrázky, zvuk a video — hovorí sa im **multimodálne** (zvládajú
viac druhov vstupu než len text).

## Prečo na tom záleží

Agent v OpenWorku pracuje s tým, čo máte v priečinku. A priečinky nebývajú
len text:

- **Fotky a skeny** — bločky, papierové zmluvy, vizitky. Model bez
  obrázkového vstupu ich neprečíta vôbec; viď
  [Skeny a fotky dokumentov](/sk/co-vytvorite/skeny-a-fotky/).
- **PDF so skenovanými stranami** — text z nich vytiahne len model, ktorý
  „vidí"; viď [Práca s PDF](/sk/co-vytvorite/prace-s-pdf/).
- **Snímky obrazovky** — chybová hláška odfotená na obrazovke je obrázok,
  nie text.
- **Zvuk a video** — záznam porady alebo prednášky spracuje len hŕstka
  modelov so zvukovým, resp. video vstupom.

Čisto textový model pritom nemusí byť horšia voľba — na texty býva lacnejší
a rýchlejší. Len musíte vedieť, čo od neho chcieť.

## A kam patrí Word alebo Excel?

Tu vzniká najviac zmätku. **Textové súbory zvládne agent s každým
modelom** — a to platí aj pre Word, Excel alebo obyčajné PDF s textom. Agent
totiž súbor otvorí a modelu odovzdá jeho textový obsah; „vstup" modelu je
potom len text.

Obrázkový vstup potrebujete až vo chvíli, keď je obsah **obrazový**:

- fotka alebo sken (aj uložené ako PDF),
- obrázky vložené vo Worde — text okolo prečíta každý model, ale čo je na
  vloženom obrázku, „uvidí" len model s obrázkovým vstupom,
- graf alebo pečiatka, ktoré existujú len ako obrázok.

Zjednodušene: **ide o to, čo sa dá zo súboru vytiahnuť ako text.** Čo sa dá,
zvládne každý model; čo zostane len ako obraz či zvuk, chce multimodálny
model.

## Čo ktorý vstup znamená

| Vstup | Čo modelu môžete poslať | Typická úloha |
|---|---|---|
| **text** | dokumenty, tabuľky, kód | zápisy, prehľady, programovanie |
| **+ obrázok** | fotky, skeny, snímky obrazovky | bločky do tabuľky, čítanie skenov |
| **+ súbory** | celé PDF so zachovaným rozložením | dlhé zmluvy a výkazy |
| **+ zvuk** | nahrávky | prepis a zhrnutie porady |
| **+ video** | videozáznamy | čo sa deje v zázname, výťah |

## Ako si vybrať

1. **Pozrite sa do priečinka.** Samý text? Stačí textový model (najlacnejší
   je DeepSeek V4 Flash). Sú tam fotky, skeny alebo nahrávky? Chcete
   multimodálny model.
2. **Východiskové odporúčanie webu — DeepSeek V4.1 Flash — berie text aj obrázky,**
   takže sa s ním väčšina domácností aj firiem nemusí rozhodovať. Na video
   siahnite po GLM 5.3 Flash. Zvuk modely z nášho katalógu neprijmú —
   nahrávku najprv nechajte prepísať na text (Melious to vie lacno modelom Whisper).
3. Presné vstupy každého modelu nájdete
   v **[katalógu modelov](/sk/modely/katalog/)** — stĺpec Vstupy, s dátumom
   overenia.

## Kadiaľ ďalej

- **[Katalóg modelov](/sk/modely/katalog/)** — vstupy každého modelu s dátumom
  overenia.
- **[Skeny a fotky dokumentov](/sk/co-vytvorite/skeny-a-fotky/)**
  a **[práca s PDF](/sk/co-vytvorite/prace-s-pdf/)** — kde na vstupoch záleží najviac.

---

**Odkiaľ čerpáme:** cenník a vstupy modelov u [Melious](https://melious.ai/pricing),
prehľad modelov na [OpenRouter](https://openrouter.ai/models) a dokumentácia
[OpenCode Go](https://opencode.ai/go?ref=K0VC03J925).
