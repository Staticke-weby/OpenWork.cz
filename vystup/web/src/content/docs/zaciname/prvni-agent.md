---
title: "První agent: první úkol nad vlastní složkou"
description: "Jak spustit prvního AI agenta v OpenWorku a nechat ho udělat úkol nad vašimi soubory — krok za krokem."
sidebar:
  order: 4
last_verified: 2026-08-31
---

Máte nainstalováno a připojenou bránu k modelům? Pak jste připraveni pustit
prvního **AI agenta** — pomocníka, kterému zadáte úkol vlastními slovy a on ho
nad vašimi soubory udělá.

## Než začnete

- Nainstalovaný OpenWork (viz [Instalace](/zaciname/instalace/)).
- Připojenou bránu k modelům, třeba
  [OpenCode Go](https://opencode.ai/go?ref=K0VC03J925) s modelem
  **GLM 5.3 Flash**.

## Krok za krokem

1. **Vyberte pracovní složku.** Otevřete v OpenWorku složku se soubory, se
   kterými má agent pracovat. Tahle složka je jeho **pracovní prostor** — vidí
   jen to, co je v ní.
2. **Vyberte model.** V chatu v přepínači modelů (anglicky **model picker**)
   zvolte, s jakým modelem chcete pracovat (pro start doporučujeme
   **GLM 5.3 Flash**).
3. **Zadejte úkol vlastními slovy.** Do chatu napište, co potřebujete — třeba
   „*projdi tyhle faktury a udělej přehled částek po měsících*" nebo
   „*najdi v těch dokumentech všechny termíny a sepiš je do seznamu*" — a
   odešlete.
4. **Sledujte, co agent dělá.** Agent vám ukáže, jak postupuje, a u důležitých
   kroků se zeptá. Nic zásadního neudělá bez vašeho vědomí.
5. **Zkontrolujte výsledek.** Projděte, co agent připravil. Když něco nesedí,
   klidně mu to řekněte a nechte to upravit.

## Co se děje s vašimi soubory

V desktopovém režimu **soubory neopouštějí váš počítač**. Poskytovateli modelu
se posílá jen vaše zadání (a části textu, které agent potřebuje k práci) — ne
celá složka. Podrobně to rozebírá stránka
[Kde běží výpočet](/vase-data/lokalni-ai/).

## Pár tipů na začátek

- **Začněte v malém.** Vyzkoušejte agenta na jednom úkolu a jedné složce, ať
  vidíte, jak pracuje.
- **Buďte konkrétní.** Čím jasněji úkol popíšete, tím lepší výsledek dostanete.
- **Pravidla na jedno místo.** Až budete chtít, aby agent dodržoval stálá
  pravidla, sepíšete si je do souboru
  [AGENTS.md](/prace-se-slozkou/agents-md/).

## Kudy dál

- **[Základy práce se složkou](/prace-se-slozkou/zaklady/)** — jak agentovi
  nachystat prostor.
- **[Co s ním vytvoříte](/co-vytvorite/)** — další zadání k vyzkoušení.
- **[Dovednosti (skills)](/prace-se-slozkou/dovednosti-skills/)** — povedené
  postupy si uložte na příště.

---

**Odkud čerpáme:** [openworklabs.com](https://openworklabs.com/) a
[opencode](https://opencode.ai/docs/).
