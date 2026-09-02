---
title: "Skeny a fotky dokumentů: z papíru do tabulky"
description: "AI agent v OpenWorku přečte skeny a fotky dokumentů — účtenky, papírové smlouvy, vizitky — a převede je na text nebo tabulku, se kterou se dá dál pracovat."
sidebar:
  order: 9
  label: "Skeny a fotky dokumentů"
tagy: [finance/faktury, finance/uctenky]
---

Účtenky v krabici, papírové smlouvy v šanonu, vizitky v šuplíku. Stačí je
vyfotit nebo naskenovat do složky — agent je přečte a převede na text nebo
tabulku, se kterou se dá pracovat.

**Přínos:** papírové dokumenty přestanou být mrtvý archiv. Co bylo v krabici,
je v tabulce — dá se prohledat, sečíst a doložit.

## Co všechno jde

- **Účtenky do tabulky** — z fotek účtenek přehled výdajů: datum, obchod,
  částka, kategorie.
- **Papírové smlouvy do textu** — sken převést na text a dál s ním pracovat
  jako s běžným dokumentem.
- **Vizitky do kontaktů** — z fotek vizitek tabulka jmen, firem a telefonů.
- **Roztřídění skenů** — hromadu naskenovaných dokumentů pojmenovat
  a roztřídit do složek podle obsahu.
- **Přepis ručních poznámek** — čitelné ručně psané poznámky převést na text.

## Ukázková zadání

Každé zadání ukazuje jeden dobrý zvyk — všimněte si jich, vyplatí se.

**Nečitelné označit, ne odhadnout:**

```text
Ve složce uctenky/ jsou fotky účtenek ze služební cesty. Vytvoř tabulku
pro vyúčtování: datum, obchod, částka, co bylo koupeno. Nečitelné
položky označ — neodhaduj je.
```

**Přejmenování a přesuny: nejdřív návrh, pak provedení:**

```text
Projdi skeny ve složce sken-archiv/ a navrhni, jak každý soubor
pojmenovat (typ dokumentu, protistrana, rok) a kam ho roztřídit
(smlouvy/, faktury/, ostatni/). Ukaž mi seznam co → kam; přejmenuj
a přesuň, až to schválím.
```

**Přesné sloupce i pro kontakty:**

```text
Z fotek vizitek ve složce vizitky/ udělej tabulku kontaktů: jméno,
firma, funkce, telefon, e-mail. Kde údaj na vizitce není, nech buňku
prázdnou.
```

**U důležitých čísel chtějte druhou kontrolu proti předloze:**

```text
Zkontroluj přepis ve vystup/uctenky.xlsx proti fotkám ve složce
uctenky/: u částek nad 1 000 Kč porovnej každou s fotkou a označ řádky,
kde si nejsi jistý — zkontroluju je sám.
```

**Ruční poznámky: co nejde přečíst, dostane otazník:**

```text
Přepiš ručně psané poznámky z fotek ve složce poznamky/ do jednoho
textu ve vystup/. Slova, která nejdou spolehlivě přečíst, označ
otazníkem — nedomýšlej je.
```

:::tip
Čím čitelnější předloha, tím spolehlivější výsledek — foťte na rovné ploše
a při dobrém světle. Agent nejistá místa označí, ale u důležitých čísel
(částky, rodná čísla) si přepis zkontrolujte.
:::

## Kudy dál

- Ukázky pro [domácnost](/pro-koho/domacnost/) a [firmy](/pro-koho/firmy/).
- Skenované PDF řeší i stránka [Práce s PDF](/co-vytvorite/prace-s-pdf/).
