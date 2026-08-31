---
title: "OpenWork pro firmy a živnostníky"
description: "Co AI agent udělá nad složkou s fakturami, smlouvami a nabídkami — ukázkové prompty pro firmy a OSVČ. Platíte za spotřebu, ne za počet lidí."
sidebar:
  order: 1
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

```text
Projdi složku faktury/ a udělej mi do vystup/ tabulku: číslo faktury,
dodavatel, částka, datum splatnosti. Seřaď po měsících a sečti součty.
```

```text
Ve složce smlouvy/ najdi u každé smlouvy výpovědní lhůtu a datum, do kdy
ji lze nejpozději vypovědět. Výsledek zapiš do vystup/terminy-smluv.md.
```

```text
Podle nabídek ve složce nabidky/ a ceníku připrav návrh nabídky pro nového
zákazníka: úklid kanceláří 200 m², dvakrát týdně. Drž se struktury a tónu
našich starších nabídek.
```

## Kudy dál

- **Kolik to stojí:** platíte [za skutečnou spotřebu, ne za počet
  lidí](/kolik-to-stoji/) — a tým může platit z jedné
  [společné peněženky](/kolik-to-stoji/spolecna-penezenka/).
- **Citlivé dokumenty:** v desktopovém režimu soubory
  [neopouštějí váš počítač](/vase-data/) — poskytovateli jde jen zadání.
- **První spuštění:** krok za krokem v návodu
  [První agent](/zaciname/prvni-agent/).
