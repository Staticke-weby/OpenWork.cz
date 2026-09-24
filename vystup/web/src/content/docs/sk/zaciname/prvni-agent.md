---
title: "Prvý agent: prvá úloha nad vlastným priečinkom"
description: "Ako spustiť prvého AI agenta v OpenWorku a nechať ho urobiť úlohu nad vašimi súbormi — krok za krokom."
sidebar:
  order: 4
last_verified: 2026-08-31
---

Máte nainštalované a pripojenú bránu k modelom? Potom ste pripravení pustiť
prvého **AI agenta** — pomocníka, ktorému zadáte úlohu vlastnými slovami a on ju
nad vašimi súbormi urobí.

## Než začnete

- Nainštalovaný OpenWork (viď [Inštalácia](/sk/zaciname/instalace/)).
- Pripojenú bránu k modelom, napríklad
  [Melious](/sk/modely/poskytovatele/melious/) alebo
  [OpenCode Go](https://opencode.ai/go?ref=K0VC03J925) s modelom
  **DeepSeek V4.1 Flash**.

## Krok za krokom

1. **Vyberte pracovný priečinok.** Otvorte v OpenWorku priečinok so súbormi, s
   ktorými má agent pracovať. Tento priečinok je jeho **pracovný priestor** —
   vidí len to, čo je v ňom.
2. **Vyberte model.** V chate v prepínači modelov (anglicky **model picker**)
   zvoľte, s akým modelom chcete pracovať (na štart odporúčame
   **DeepSeek V4.1 Flash**).
3. **Zadajte úlohu vlastnými slovami.** Do chatu napíšte, čo potrebujete — napríklad
   „*prejdi tieto faktúry a urob prehľad súm po mesiacoch*" alebo
   „*nájdi v tých dokumentoch všetky termíny a spíš ich do zoznamu*" — a
   odošlite.
4. **Sledujte, čo agent robí.** Agent vám ukáže, ako postupuje, a pri dôležitých
   krokoch sa spýta. Nič zásadné neurobí bez vášho vedomia.
5. **Skontrolujte výsledok.** Prejdite, čo agent pripravil. Keď niečo nesedí,
   pokojne mu to povedzte a nechajte upraviť.

## Čo sa deje s vašimi súbormi

V desktopovom režime **súbory neopúšťajú váš počítač**. Poskytovateľovi modelu
sa posiela len vaše zadanie (a časti textu, ktoré agent potrebuje k práci) — nie
celý priečinok. Podrobne to rozoberá stránka
[Kde beží výpočet](/sk/vase-data/lokalni-ai/).

## Pár tipov na začiatok

- **Začnite v malom.** Vyskúšajte agenta na jednej úlohe a jednom priečinku.
- **Buďte konkrétni.** Čím jasnejšie úlohu opíšete, tým lepší výsledok dostanete.
- **Pravidlá na jedno miesto.** Keď budete chcieť, aby agent dodržiaval stále
  pravidlá, spíšete si ich do súboru [AGENTS.md](/sk/prace-se-slozkou/agents-md/).

## Kadiaľ ďalej

- **[Základy práce s priečinkom](/sk/prace-se-slozkou/zaklady/)** — ako agentovi
  nachystať priestor.
- **[Čo s ním vytvoríte](/sk/co-vytvorite/)** — ďalšie zadania na vyskúšanie.
- **[Zručnosti (skills)](/sk/prace-se-slozkou/dovednosti-skills/)** — podarené
  postupy si uložte na nabudúce.
- **[OpenWork komunita CZ/SK na Discorde](https://discord.gg/dKYspwbsSR)** —
  keď sa zaseknete, poradíme po česky a slovensky.

---

**Odkiaľ čerpáme:** [openworklabs.com](https://openworklabs.com/) a
[opencode](https://opencode.ai/docs/).
