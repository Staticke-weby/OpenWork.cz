---
title: "OpenWork pre firmy a živnostníkov"
description: "Čo AI agent urobí nad priečinkom s faktúrami, zmluvami a ponukami — ukážkové prompty pre firmy a SZČO. Platíte za spotrebu, nie za počet ľudí."
sidebar:
  order: 1
---

Máte priečinok s faktúrami, zmluvami a podkladmi? Presne nad takým priečinkom
vie AI agent v OpenWorku pracovať: prejde dokumenty, vytiahne z nich čísla,
pripraví prehľad alebo návrh — a vy len skontrolujete výsledok.

## Čo s tým zvládnete

- **Prehľady z faktúr** — z kopy PDF urobiť tabuľku súm po mesiacoch alebo
  po odberateľoch.
- **Podklady pre účtovníka** — roztriediť doklady, dohľadať chýbajúce
  náležitosti, pripraviť súhrn za štvrťrok.
- **Návrhy ponúk a e-mailov** — podľa vašich starších ponúk a cenníka
  pripraviť prvú verziu novej.
- **Kontrola zmlúv** — vypísať termíny, výpovedné lehoty a povinnosti zo zmlúv
  do jedného zoznamu.

## Ukážkový priečinok

- **firma/**
  - `AGENTS.md` — pravidlá pre agenta (čo smie, ako písať výstupy)
  - **faktury/** — prijaté a vydané faktúry
  - **zmluvy/** — zmluvy s dodávateľmi a odberateľmi
  - **ponuky/** — staršie ponuky a cenník
  - **vystup/** — sem agent ukladá výsledky

Ako priečinok usporiadať a čo napísať do `AGENTS.md`, popisuje sekcia
[Práca s priečinkom](/sk/prace-se-slozkou/zaklady/).

## Ukážkové prompty

```text
Prejdi priečinok faktury/ a urob mi do vystup/ tabuľku: číslo faktúry,
dodávateľ, suma, dátum splatnosti. Zoraď po mesiacoch a spočítaj súčty.
```

```text
V priečinku zmluvy/ nájdi pri každej zmluve výpovednú lehotu a dátum,
dokedy ju možno najneskôr vypovedať. Výsledok zapíš do vystup/terminy-zmluv.md.
```

```text
Podľa ponúk v priečinku ponuky/ a cenníka priprav návrh ponuky pre nového
zákazníka: upratovanie kancelárií 200 m², dvakrát týždenne. Drž sa štruktúry
a tónu našich starších ponúk.
```

## Kadiaľ ďalej

- **Koľko to stojí:** platíte [za skutočnú spotrebu, nie za počet
  ľudí](/sk/kolik-to-stoji/) — a tím môže platiť z jednej
  [spoločnej peňaženky](/sk/kolik-to-stoji/spolecna-penezenka/).
- **Citlivé dokumenty:** v desktopovom režime súbory
  [neopúšťajú váš počítač](/sk/vase-data/) — poskytovateľovi ide len zadanie.
- **Prvé spustenie:** krok za krokom v návode
  [Prvý agent](/sk/zaciname/prvni-agent/).
