---
title: "Text, obrázek, zvuk, video: jaké vstupy AI model přijme"
description: "AI modely se zásadně liší v tom, co přijmou: některé jen text, jiné i obrázky, zvuk a video. Co to znamená pro skeny, fotky účtenek a PDF — a jak si vybrat."
sidebar:
  order: 2
  label: "Vstupy: text, obrázek, video"
---

Modely se na první pohled liší cenou a chytrostí. V praxi ale nejčastěji
narazíte na jiný rozdíl: **co model přijme jako vstup**. Některé umí jen
text, jiné i obrázky, zvuk a video — říká se jim **multimodální** (zvládají
víc druhů vstupu než jen text).

## Proč na tom záleží

Agent v OpenWorku pracuje s tím, co máte ve složce. A složky nebývají jen
text:

- **Fotky a skeny** — účtenky, papírové smlouvy, vizitky. Model bez
  obrázkového vstupu je nepřečte vůbec; viz
  [Skeny a fotky dokumentů](/co-vytvorite/skeny-a-fotky/).
- **PDF se skenovanými stránkami** — text z nich vytáhne jen model, který
  „vidí"; viz [Práce s PDF](/co-vytvorite/prace-s-pdf/).
- **Snímky obrazovky** — chybová hláška vyfocená na obrazovce je obrázek,
  ne text.
- **Zvuk a video** — záznam porady nebo přednášky zpracuje jen hrstka
  modelů se zvukovým, resp. video vstupem.

Čistě textový model přitom nemusí být horší volba — na texty bývá levnější
a rychlejší. Jen musíte vědět, co od něj chtít.

## A kam patří Word nebo Excel?

Tady vzniká nejvíc zmatku. **Textové soubory zvládne agent s každým
modelem** — a to platí i pro Word, Excel nebo obyčejné PDF s textem. Agent
totiž soubor otevře a modelu předá jeho textový obsah; „vstup" modelu je pak
jen text.

Obrázkový vstup potřebujete až ve chvíli, kdy je obsah **obrazový**:

- fotka nebo sken (i uložené jako PDF),
- obrázky vložené ve Wordu — text okolo přečte každý model, ale co je na
  vloženém obrázku, „uvidí" jen model s obrázkovým vstupem,
- graf nebo razítko, které existuje jen jako obrázek.

Zjednodušeně: **jde o to, co se dá ze souboru vytáhnout jako text.** Co jde,
zvládne každý model; co zbyde jen jako obraz či zvuk, chce multimodální model.

## Co který vstup znamená

| Vstup | Co modelu můžete poslat | Typický úkol |
|---|---|---|
| **text** | dokumenty, tabulky, kód | zápisy, přehledy, programování |
| **+ obrázek** | fotky, skeny, snímky obrazovky | účtenky do tabulky, čtení skenů |
| **+ soubory** | celá PDF se zachovaným rozvržením | dlouhé smlouvy a výkazy |
| **+ zvuk** | nahrávky | přepis a shrnutí porady |
| **+ video** | videozáznamy | co se děje v záznamu, výtah |

## Jak si vybrat

1. **Podívejte se do složky.** Samý text? Stačí textový model (nejlevnější
   je DeepSeek V4 Flash). Jsou tam fotky, skeny nebo nahrávky? Chcete
   multimodální model.
2. **Výchozí doporučení webu — GLM 5.3 Flash — bere text, obrázky i video,**
   takže se s ním většina domácností i firem nemusí rozhodovat. Spoustu
   práce zvládne prakticky zadarmo i MiMo-V2.5 (bere i zvuk).
3. Přesné vstupy každého modelu najdete v
   **[katalogu modelů](/modely/katalog/)** — sloupec Vstupy, s datem ověření.

---

**Odkud čerpáme:** přehled modelů a vstupů na
[OpenRouter](https://openrouter.ai/models) a dokumentace
[OpenCode Go](https://opencode.ai/go?ref=K0VC03J925).
