---
title: "OpenWork pre firmy a živnostníkov"
description: "Čo AI agent urobí nad priečinkom s faktúrami, zmluvami a ponukami — ukážkové prompty pre firmy a SZČO. Platíte za spotrebu, nie za počet ľudí."
sidebar:
  order: 1
tagy: [finance/faktury, podnikani/nabidky]
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

Každé zadanie ukazuje jeden dobrý zvyk — všimnite si ich, oplatí sa.

**Popíšte presne stĺpce a povedzte, čo s chýbajúcimi údajmi:**

```text
Prejdi priečinok faktury/ a urob mi do vystup/ tabuľku: číslo faktúry,
dodávateľ, suma, dátum splatnosti. Zoraď po mesiacoch a spočítaj súčty.
Pôvodné súbory nemeň. Keď niektorý údaj na faktúre chýba, nechaj bunku
prázdnu a pridaj stĺpec Poznámka — nič nedomýšľaj.
```

**Pri termínoch a lehotách chcite odkaz na zdroj, nech sa dá všetko overiť:**

```text
V priečinku zmluvy/ nájdi pri každej zmluve výpovednú lehotu a dátum,
dokedy ju možno najneskôr vypovedať. Výsledok zapíš do
vystup/terminy-zmluv.md a pri každej lehote uveď súbor a článok zmluvy,
z ktorého vychádza.
```

**Neistoty nechajte označiť — a otázky si nechajte spísať:**

```text
Podľa ponúk v priečinku ponuky/ a cenníka priprav návrh ponuky pre nového
zákazníka: upratovanie kancelárií 200 m², dvakrát týždenne. Drž sa
štruktúry a tónu našich starších ponúk. Údaje, ktoré z podkladov
nevyplývajú, označ [DOPLNIŤ] a na koniec pripíš zoznam otázok pre
zákazníka.
```

**Pri väčších zásahoch chcite najprv návrh, až potom vykonanie:**

```text
Navrhni, ako roztriediť doklady v priečinku uctovnictvo-2026/ do
podpriečinkov po mesiacoch a typoch (prijaté, vydané, banka). Zatiaľ nič
nepresúvaj — ukáž mi návrh štruktúry a zoznam, čo kam patrí. Presun
urobíme, až ho schválim.
```

**Opakované úlohy zadajte tak, aby sa dali nabudúce zopakovať rovnako:**

```text
Z podkladov v priečinku reporty/2026-08/ priprav mesačný report pre
vedenie: tržby, náklady, tri najväčšie zákazky, čo sa nestihlo. Ulož do
vystup/ a popíš mi postup tak, aby som ti budúci mesiac mohol zadať len
„urob report za september" a vzniklo to isté.
```

:::tip[Dobré zvyky pri zadávaní]
Povedať, **kam** výsledok uložiť · **nemeniť originály** · chýbajúce údaje
**označiť, nie domýšľať** · pri tvrdeniach chcieť **odkaz na zdrojový
súbor** · pri veľkých zásahoch **najprv návrh, potom vykonanie**.
:::

## Kadiaľ ďalej

- **Koľko to stojí:** platíte [za skutočnú spotrebu, nie za počet
  ľudí](/sk/kolik-to-stoji/) — a tím môže platiť z jednej
  [spoločnej peňaženky](/sk/kolik-to-stoji/spolecna-penezenka/).
- **Citlivé dokumenty:** v desktopovom režime súbory
  [neopúšťajú váš počítač](/sk/vase-data/) — poskytovateľovi ide len zadanie.
- **Prvé spustenie:** krok za krokom v návode
  [Prvý agent](/sk/zaciname/prvni-agent/).
