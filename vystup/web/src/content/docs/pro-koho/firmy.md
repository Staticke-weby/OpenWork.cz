---
title: "OpenWork pro firmy a živnostníky"
description: "Co AI agent udělá nad složkou s fakturami, smlouvami a nabídkami — ukázkové prompty pro firmy a OSVČ. Platíte za spotřebu, ne za počet lidí."
sidebar:
  order: 1
tagy: [finance/faktury, podnikani/nabidky]
---

Máte složku s fakturami, smlouvami a podklady? Přesně nad takovou složkou umí
AI agent v OpenWorku pracovat: projde dokumenty, vytáhne z nich čísla, připraví
přehled nebo návrh — a vy jen zkontrolujete výsledek.

## Co s tím zvládnete

- **Přehledy z faktur** — z hromady PDF udělat tabulku částek po měsících nebo
  po odběratelích.
- **Podklady pro účetní** — roztřídit doklady, dohledat chybějící náležitosti,
  připravit souhrn za čtvrtletí.
- **Návrhy nabídek a e-mailů** — podle vašich starších nabídek a ceníku
  připravit první verzi nové.
- **Kontrola smluv** — vypsat termíny, výpovědní lhůty a povinnosti ze smluv
  do jednoho seznamu.

## Ukázková složka

- **firma/**
  - `AGENTS.md` — pravidla pro agenta (co smí, jak psát výstupy)
  - **faktury/** — přijaté a vydané faktury
  - **smlouvy/** — smlouvy s dodavateli a odběrateli
  - **nabidky/** — starší nabídky a ceník
  - **vystup/** — sem agent ukládá výsledky

Jak složku uspořádat a co napsat do `AGENTS.md`, popisuje sekce
[Práce se složkou](/prace-se-slozkou/zaklady/).

## Ukázkové prompty

Každé zadání ukazuje jeden dobrý zvyk — všimněte si jich, vyplatí se.

**Popište přesně sloupce a řekněte, co s chybějícími údaji:**

```text
Projdi složku faktury/ a udělej mi do vystup/ tabulku: číslo faktury,
dodavatel, částka, datum splatnosti. Seřaď po měsících a sečti součty.
Původní soubory neměň. Když některý údaj na faktuře chybí, nech buňku
prázdnou a přidej sloupec Poznámka — nic nedomýšlej.
```

**U termínů a lhůt chtějte odkaz na zdroj, ať jde vše ověřit:**

```text
Ve složce smlouvy/ najdi u každé smlouvy výpovědní lhůtu a datum, do kdy
ji lze nejpozději vypovědět. Výsledek zapiš do vystup/terminy-smluv.md
a u každé lhůty uveď soubor a článek smlouvy, ze kterého vychází.
```

**Nejistoty nechte označit — a otázky si nechte sepsat:**

```text
Podle nabídek ve složce nabidky/ a ceníku připrav návrh nabídky pro nového
zákazníka: úklid kanceláří 200 m², dvakrát týdně. Drž se struktury a tónu
našich starších nabídek. Údaje, které z podkladů nevyplývají, označ
[DOPLNIT] a na konec připiš seznam otázek pro zákazníka.
```

**U větších zásahů chtějte nejdřív návrh, pak teprve provedení:**

```text
Navrhni, jak roztřídit doklady ve složce ucetnictvi-2026/ do podsložek
po měsících a typech (přijaté, vydané, banka). Zatím nic nepřesouvej —
ukaž mi návrh struktury a seznam, co kam patří. Přesun uděláme, až ho
schválím.
```

**Opakované úkoly zadejte tak, aby šly příště zopakovat stejně:**

```text
Z podkladů ve složce reporty/2026-08/ připrav měsíční report pro vedení:
tržby, náklady, tři největší zakázky, co se nestihlo. Ulož do vystup/
a popiš mi postup tak, abych ti příští měsíc mohl zadat jen „udělej
report za září" a vzniklo to samé.
```

:::tip[Dobré zvyky při zadávání]
Říct, **kam** výsledek uložit · **neměnit originály** · chybějící údaje
**označit, ne domýšlet** · u tvrzení chtít **odkaz na zdrojový soubor** ·
u velkých zásahů **nejdřív návrh, pak provedení**.
:::

## Kudy dál

- **Kolik to stojí:** platíte [za skutečnou spotřebu, ne za počet
  lidí](/kolik-to-stoji/) — a tým může platit z jedné
  [společné peněženky](/kolik-to-stoji/spolecna-penezenka/).
- **Citlivé dokumenty:** v desktopovém režimu soubory
  [neopouštějí váš počítač](/vase-data/) — poskytovateli jde jen zadání.
- **První spuštění:** krok za krokem v návodu
  [První agent](/zaciname/prvni-agent/).
