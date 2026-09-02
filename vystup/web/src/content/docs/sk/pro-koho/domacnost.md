---
title: "OpenWork pre domácnosť"
description: "Čo AI agent urobí nad priečinkom domácnosti: zmluvy, rodinný rozpočet, plánovanie. Ukážkové prompty — a dáta pritom zostávajú u vás."
sidebar:
  order: 2
tagy: [finance/uctenky, finance/rozpocet, urady/reklamace]
---

Doma sa papiere hromadia rovnako ako vo firme: zmluvy, výpisy, vyúčtovania,
dokumenty ku škole alebo k autu. AI agent v OpenWorku ich prejde za vás —
a súbory pritom v desktopovom režime [zostávajú u vás](/sk/vase-data/).

## Čo s tým zvládnete

- **Udržať poriadok v dokumentoch** — roztriediť zmluvy a vyúčtovania,
  vypísať, čo kedy končí a čo treba riešiť.
- **Rodinný rozpočet** — z výpisov z účtu urobiť prehľad výdavkov po
  kategóriách.
- **Plánovanie** — z podkladov poskladať plán dovolenky, porovnanie ponúk
  alebo zoznam úloh okolo sťahovania.
- **Listy a formuláre** — pripraviť odpoveď úradu, reklamáciu alebo výpoveď
  zmluvy podľa vašich podkladov.

## Ukážkový priečinok

- **domacnost/**
  - `AGENTS.md` — pravidlá pre agenta
  - **zmluvy/** — energie, internet, poistenie, telefón
  - **financie/** — výpisy z účtu, vyúčtovania
  - **rodina/** — škola, krúžky, auto, bývanie
  - **vystup/** — sem agent ukladá výsledky

## Ukážkové prompty

Každé zadanie ukazuje jeden dobrý zvyk — všimnite si ich, oplatí sa.

**Povedzte, kam výsledok uložiť, a čo s údajmi, ktoré chýbajú:**

```text
Prejdi priečinok zmluvy/ a vypíš mi do vystup/ prehľad: čo mám dojednané,
za koľko mesačne, dokedy trvá záväzok a aká je výpovedná lehota. Keď
niektorý údaj v zmluve nenájdeš, napíš „nenájdené" — neodhaduj.
```

**Nenechajte agenta domýšľať kategórie — chcite nezaradené zvlášť:**

```text
Z výpisov v priečinku financie/ urob prehľad výdavkov za posledné tri
mesiace po kategóriách (bývanie, jedlo, doprava, ostatné). Ukáž, kde
míňame najviac. Pohyby, ktoré sa nedajú jednoznačne zaradiť, daj do
„nezaradené" a vypíš ich zvlášť.
```

**Pri porovnaní chcite čísla zo súborov, nie dojmy:**

```text
V priečinku zmluvy/ máme vyúčtovanie elektriny za vlaňajší a tohtoročný
rok. Porovnaj ich a napíš zrozumiteľne, čo sa zmenilo a o koľko — pri
každom čísle uveď, z ktorého súboru a riadku vyúčtovania pochádza.
```

**Listy len pripraviť na kontrolu — nikdy rovno odosielať:**

```text
Priprav výpoveď zmluvy o internete podľa podkladov v zmluvy/internet/.
Dodrž výpovednú lehotu a formu, ktorú zmluva vyžaduje. Nikam nič
neodosielaj — ulož mi text do vystup/ na kontrolu a napíš, čo mám
skontrolovať, než ho pošlem.
```

**Pri plánovaní si nechajte spísať, čo ešte chýba:**

```text
Z podkladov v priečinku dovolenka/ (termíny, rozpočet 1 500 €, čo chceme
vidieť) navrhni plán cesty po dňoch s odhadom nákladov. Kde ti chýba
informácia, neodhaduj — napíš zoznam otázok, na ktoré ti mám odpovedať.
```

:::tip[Dobré zvyky pri zadávaní]
Povedať, **kam** výsledok uložiť · chýbajúce údaje **označiť, nie
odhadovať** · pri číslach chcieť **odkaz na zdroj** · listy a e-maily
**len pripraviť, nie odoslať** · na nejasnosti si nechať spísať **otázky**.
:::

## Kadiaľ ďalej

- **Kde končia vaše dáta:** hlavnú zásadu vysvetľuje sekcia
  [Vaše dáta](/sk/vase-data/) — poslať niečo do cloudu je voľba, nie nutnosť.
- **Nechcete platiť:** kopu domácich úloh zvládnete
  s [poskytovateľmi AI zadarmo](/sk/kolik-to-stoji/poskytovatele-ai-zdarma/).
- **Aký model doma použiť:** radí stránka
  [Najlepší AI model pre domácnosť](/sk/modely/nejlepsi-pro/domacnost/).
