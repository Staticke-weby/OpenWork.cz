---
title: "Skeny a fotky dokumentov: z papiera do tabuľky"
description: "AI agent v OpenWorku prečíta skeny a fotky dokumentov — bločky, papierové zmluvy, vizitky — a prevedie ich na text alebo tabuľku, s ktorou sa dá ďalej pracovať."
sidebar:
  order: 9
  label: "Skeny a fotky dokumentov"
tagy: [finance/faktury, finance/uctenky]
---

Bločky v škatuli, papierové zmluvy v šanóne, vizitky v šuplíku. Stačí ich
odfotiť alebo naskenovať do priečinka — agent ich prečíta a prevedie na text
alebo tabuľku, s ktorou sa dá pracovať.

**Prínos:** papierové dokumenty prestanú byť mŕtvy archív. Čo bolo v škatuli,
je v tabuľke — dá sa prehľadať, spočítať a doložiť.

## Čo všetko sa dá

- **Bločky do tabuľky** — z fotiek bločkov prehľad výdavkov: dátum, obchod,
  suma, kategória.
- **Papierové zmluvy do textu** — sken previesť na text a ďalej s ním
  pracovať ako s bežným dokumentom.
- **Vizitky do kontaktov** — z fotiek vizitiek tabuľka mien, firiem
  a telefónov.
- **Roztriedenie skenov** — kopu naskenovaných dokumentov pomenovať
  a roztriediť do priečinkov podľa obsahu.
- **Prepis ručných poznámok** — čitateľné ručne písané poznámky previesť
  na text.

## Ukážkové zadania

Každé zadanie ukazuje jeden dobrý zvyk — všimnite si ich, oplatí sa.

**Nečitateľné označiť, nie odhadnúť:**

```text
V priečinku blocky/ sú fotky bločkov zo služobnej cesty. Vytvor tabuľku
na vyúčtovanie: dátum, obchod, suma, čo bolo kúpené. Nečitateľné položky
označ — neodhaduj ich.
```

**Premenovanie a presuny: najprv návrh, potom vykonanie:**

```text
Prejdi skeny v priečinku sken-archiv/ a navrhni, ako každý súbor
pomenovať (typ dokumentu, protistrana, rok) a kam ho roztriediť
(zmluvy/, faktury/, ostatne/). Ukáž mi zoznam čo → kam; premenuj
a presuň, až to schválim.
```

**Presné stĺpce aj pre kontakty:**

```text
Z fotiek vizitiek v priečinku vizitky/ urob tabuľku kontaktov: meno,
firma, funkcia, telefón, e-mail. Kde údaj na vizitke nie je, nechaj
bunku prázdnu.
```

**Pri dôležitých číslach chcite druhú kontrolu proti predlohe:**

```text
Skontroluj prepis vo vystup/blocky.xlsx proti fotkám v priečinku
blocky/: pri sumách nad 50 € porovnaj každú s fotkou a označ riadky,
kde si nie si istý — skontrolujem ich sám.
```

**Ručné poznámky: čo sa nedá prečítať, dostane otáznik:**

```text
Prepíš ručne písané poznámky z fotiek v priečinku poznamky/ do jedného
textu vo vystup/. Slová, ktoré sa nedajú spoľahlivo prečítať, označ
otáznikom — nedomýšľaj ich.
```

:::tip
Čím čitateľnejšia predloha, tým spoľahlivejší výsledok — foťte na rovnej
ploche a pri dobrom svetle. Agent neisté miesta označí, ale pri dôležitých
číslach (sumy, rodné čísla) si prepis skontrolujte.
:::

## Kadiaľ ďalej

- Ukážky pre [domácnosť](/sk/pro-koho/domacnost/)
  a [firmy](/sk/pro-koho/firmy/).
- Skenované PDF rieši aj stránka
  [Práca s PDF](/sk/co-vytvorite/prace-s-pdf/).
