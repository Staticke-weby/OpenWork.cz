---
title: "OpenWork pre profesie s mlčanlivosťou"
description: "Ako s AI pracovať nad citlivými dokumentmi — advokáti, lekári, účtovníci. Lokálna AI, nulové uchovávanie dát (ZDR) a ukážkové prompty."
sidebar:
  order: 4
---

Advokáti, lekári, účtovníci a ďalšie profesie viazané mlčanlivosťou majú jasné
pravidlo: **citlivé dáta nesmú nikam odísť.** OpenWork s tým počíta — v
desktopovom režime súbory neopúšťajú váš počítač a vy si vyberáte, kde beží
výpočet: u [poskytovateľa s nulovým uchovávaním dát](/sk/vase-data/zdr/),
alebo úplne [u vás na počítači](/sk/vase-data/lokalni-ai/).

## Najprv rozhodnite o dátach

1. **Najprísnejšia možnosť:** [lokálny AI model](/sk/vase-data/lokalni-ai/) —
   dáta neopustia váš stôl, výpočet beží u vás.
2. **Praktický kompromis:** poskytovateľ so **ZDR** — zadanie sa spracuje
   a hneď zahodí. Koho zvoliť, ukazuje
   [porovnanie poskytovateľov](/sk/vase-data/zdr/srovnani-poskytovatelu/).
3. **Vždy platí:** posielajte len to, čo je nutné. Čo sa dá anonymizovať,
   anonymizujte — aj to za vás agent pripraví.

## Čo s tým zvládnete

- **Revízia dokumentov** — vypísať termíny, povinnosti a riziká zo zmlúv
  alebo spisov do prehľadu.
- **Anonymizácia** — pred odoslaním poskytovateľovi nahradiť mená, rodné
  čísla a adresy zástupnými údajmi.
- **Podklady a koncepty** — prvá verzia vyjadrenia, správy alebo listu podľa
  vašich podkladov; rozhodnutie a zodpovednosť zostávajú na vás.
- **Poriadok v spisoch** — roztriediť dokumenty ku kauze či klientovi a viesť
  ich prehľad.

## Ukážkový priečinok

- **kancelaria/**
  - `AGENTS.md` — pravidlá pre agenta (napr. „nikdy neposielaj obsah
    priečinka klienti/ poskytovateľovi bez anonymizácie")
  - **klienti/** — spisy po klientoch
  - **vzory/** — vaše vzory zmlúv a podaní
  - **vystup/** — prehľady a koncepty

## Ukážkové prompty

```text
Prejdi dokumenty v priečinku klienti/novak/ a vytvor v ňom anonymizovanú
kópiu do podpriečinka anonymizovane/: nahraď mená, adresy, rodné čísla
a názvy firiem zástupnými údajmi a vytvor prevodnú tabuľku len lokálne.
```

```text
Zo zmluvy klienti/novak/anonymizovane/zmluva.md vypíš všetky lehoty,
povinnosti strán a sankcie do prehľadnej tabuľky vo vystup/.
```

```text
Porovnaj návrh zmluvy s naším vzorom vo vzory/kupna-zmluva.md a vypíš,
v čom sa líšia a ktoré ustanovenia v návrhu chýbajú.
```

## Kadiaľ ďalej

- **Čo je ZDR a ako ho spoznať:** [nulové uchovávanie dát](/sk/vase-data/zdr/)
  a [porovnanie poskytovateľov](/sk/vase-data/zdr/srovnani-poskytovatelu/)
  so zdrojmi.
- **Európske pravidlá:** čo pre vás znamená
  [GDPR a NIS2](/sk/vase-data/gdpr-a-nis2/).
- **Kľúče a prístupy:** ako si ich postrážiť, radí
  [Bezpečnosť](/sk/vase-data/bezpecnost/).
