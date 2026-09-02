---
title: "OpenWork pro domácnost"
description: "Co AI agent udělá nad složkou domácnosti: smlouvy, rodinný rozpočet, plánování. Ukázkové prompty — a data přitom zůstávají u vás."
sidebar:
  order: 2
tagy: [finance/uctenky, finance/rozpocet, urady/reklamace]
---

Doma se papíry hromadí stejně jako ve firmě: smlouvy, výpisy, vyúčtování,
dokumenty ke škole nebo k autu. AI agent v OpenWorku je projde za vás —
a soubory přitom v desktopovém režimu [zůstávají u vás](/vase-data/).

## Co s tím zvládnete

- **Udržet pořádek v dokumentech** — roztřídit smlouvy a vyúčtování, vypsat,
  co kdy končí a co je potřeba řešit.
- **Rodinný rozpočet** — z výpisů z účtu udělat přehled výdajů po kategoriích.
- **Plánování** — z podkladů poskládat plán dovolené, srovnání nabídek nebo
  seznam úkolů kolem stěhování.
- **Dopisy a formuláře** — připravit odpověď úřadu, reklamaci nebo výpověď
  smlouvy podle vašich podkladů.

## Ukázková složka

- **domacnost/**
  - `AGENTS.md` — pravidla pro agenta
  - **smlouvy/** — energie, internet, pojištění, telefon
  - **finance/** — výpisy z účtu, vyúčtování
  - **rodina/** — škola, kroužky, auto, bydlení
  - **vystup/** — sem agent ukládá výsledky

## Ukázkové prompty

Každé zadání ukazuje jeden dobrý zvyk — všimněte si jich, vyplatí se.

**Řekněte, kam výsledek uložit, a co s údaji, které chybí:**

```text
Projdi složku smlouvy/ a vypiš mi do vystup/ přehled: co mám sjednané,
za kolik měsíčně, do kdy trvá závazek a jaká je výpovědní lhůta. Když
některý údaj ve smlouvě nenajdeš, napiš „nenalezeno" — neodhaduj.
```

**Nenechte agenta domýšlet kategorie — chtějte nezařazené zvlášť:**

```text
Z výpisů ve složce finance/ udělej přehled výdajů za poslední tři měsíce
po kategoriích (bydlení, jídlo, doprava, ostatní). Ukaž, kde utrácíme
nejvíc. Pohyby, které nejde jednoznačně zařadit, dej do „nezařazeno"
a vypiš je zvlášť.
```

**U porovnání chtějte čísla ze souborů, ne dojmy:**

```text
Ve složce smlouvy/ máme vyúčtování elektřiny za loňský a letošní rok.
Porovnej je a napiš srozumitelně, co se změnilo a o kolik — u každého
čísla uveď, ze kterého souboru a řádku vyúčtování pochází.
```

**Dopisy jen připravit ke kontrole — nikdy rovnou odesílat:**

```text
Připrav výpověď smlouvy o internetu podle podkladů ve smlouvy/internet/.
Dodrž výpovědní lhůtu a formu, kterou smlouva vyžaduje. Nikam nic
neodesílej — ulož mi text do vystup/ ke kontrole a napiš, co mám
zkontrolovat, než ho pošlu.
```

**U plánování si nechte sepsat, co ještě chybí:**

```text
Z podkladů ve složce dovolena/ (termíny, rozpočet 40 000 Kč, co chceme
vidět) navrhni plán cesty po dnech s odhadem nákladů. Kde ti chybí
informace, neodhaduj — napiš seznam otázek, na které ti mám odpovědět.
```

:::tip[Dobré zvyky při zadávání]
Říct, **kam** výsledek uložit · chybějící údaje **označit, ne odhadovat** ·
u čísel chtít **odkaz na zdroj** · dopisy a e-maily **jen připravit, ne
odeslat** · na nejasnosti si nechat sepsat **otázky**.
:::

## Kudy dál

- **Kde končí vaše data:** hlavní zásadu vysvětluje sekce
  [Vaše data](/vase-data/) — poslat něco do cloudu je volba, ne nutnost.
- **Nechcete platit:** spoustu domácích úkolů zvládnete
  s [poskytovateli AI zdarma](/kolik-to-stoji/poskytovatele-ai-zdarma/).
- **Jaký model doma použít:** radí stránka
  [Nejlepší AI model pro domácnost](/modely/nejlepsi-pro/domacnost/).
