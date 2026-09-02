---
title: "Automatizace opakovaných činností: skripty, systémy a uložené postupy"
description: "AI agent v OpenWorku si na opakovanou práci napíše skript, připojí se k vašim systémům přes MCP a osvědčený postup uloží jako dovednost — příště stačí jedna věta."
sidebar:
  order: 12
  label: "Automatizace činností"
tagy: [dokumenty/e-maily]
---

Největší úspora není v tom, že agent udělá úkol jednou — ale že ho pak
**dělá opakovaně**. Co jste jednou vyladili, příště spustíte jednou větou.

**Přínos:** rutina (měsíční report, vyúčtování, třídění, kontroly) přestane
žrát čas. A protože postup běží pokaždé stejně, mizí i chyby z nepozornosti.

## Tři stavební kameny automatizace

1. **Agent si napíše skript** — malý program, který hromadnou práci nad
   složkou udělá strojově: přejmenuje stovky souborů, převede formáty,
   zkontroluje čísla. Vy skript nepíšete ani nečtete — jen řeknete, co má
   dělat, a zkontrolujete výsledek.
2. **Připojí se k vašim systémům** — přes
   [MCP a připojené služby](/prace-se-slozkou/napojeni-nastroju/) čte
   a zapisuje tam, kde data žijí: e-mail, kalendář, tabulky, firemní
   systémy.
3. **Postup se uloží a opakuje** — osvědčený postup uložíte jako
   [**dovednost** (skill)](/prace-se-slozkou/dovednosti-skills/): řeknete
   „udělej z toho, co jsme právě dokončili, opakovatelnou dovednost"
   a příště ji vyvoláte jednou větou. Pravidla, která mají platit vždy,
   patří do [AGENTS.md](/prace-se-slozkou/agents-md/).

## Co všechno jde

- **Hromadné operace** — přejmenovat, roztřídit a převést stovky souborů
  najednou.
- **Pravidelné výstupy** — měsíční report, vyúčtování nebo přehled vždy
  stejným postupem nad novými daty.
- **Průběžné kontroly** — hlídat, že v datech nechybí údaje, že čísla
  sedí, že se nic nerozbilo.
- **Přenosy mezi systémy** — z e-mailů do tabulky, z tabulky do systému,
  vždy stejně.
- **Rešerše na zavolání** — jednou vyladěný postup „zjisti a porovnej"
  spouštět pro další a další položky.

## Ukázková zadání

Každé zadání ukazuje jeden dobrý zvyk — u automatizace na nich záleží
dvojnásob.

**Hromadný zásah vždy nejdřív nanečisto:**

```text
Ve složce archiv/ je 400 souborů s různým pojmenováním. Napiš si skript,
který je přejmenuje na vzor rok-mesic-nazev. Nejdřív mi ale vypiš úplný
seznam co → jak se přejmenuje; spusť to, až seznam schválím.
```

**Osvědčený postup uložit jako dovednost:**

```text
Postup, který jsme právě dokončili (bločky → tabulka vyúčtování),
ulož jako opakovatelnou dovednost „vyúčtování cesty". Příště ji chci
spustit větou „udělej vyúčtování z nové složky".
```

**Opakování podle hotového vzoru — žádné vymýšlení:**

```text
Udělej report za září úplně stejně jako vystup/report-2026-08.md:
stejná struktura, stejné tabulky, jen data ze složky podklady/2026-09/.
Co proti minulému měsíci nejde spočítat, označ — neimprovizuj.
```

**Přenos mezi systémy: nejdřív ukázka na pár položkách:**

```text
Z připojeného e-mailu vybírej objednávky z formuláře webu a zapisuj je
do tabulky vystup/objednavky.xlsx: datum, jméno, položka, částka.
Zpracuj nejdřív poslední tři e-maily na ukázku — pokračuj, až výsledek
schválím.
```

**Pravidelnou kontrolu popsat tak, aby šla spouštět stále stejně:**

```text
Zkontroluj složku klienti/ podle pravidel v AGENTS.md: u každého klienta
musí být smlouva, plná moc a kontakt. Vypiš, co kde chybí, do
vystup/kontrola.md se strukturou jako minule. Nic neopravuj.
```

:::caution
Automatizace zesiluje i chyby — co běží samo, běží samo i špatně. Proto:
hromadné zásahy nejdřív **nanečisto** (vypsat, co se stane), originály
**neměnit**, u připojených systémů dávat **nejmenší nutná oprávnění**
a výstupy prvních běhů **kontrolovat**.
:::

## Kudy dál

- **[Automatizace v prohlížeči](/co-vytvorite/prohlizec/)** — klikání
  a dohledávání na webu.
- **[Napojení nástrojů (MCP)](/prace-se-slozkou/napojeni-nastroju/)** —
  jak agenta připojit k e-mailu, kalendáři a dalším systémům.
- **[Soubor AGENTS.md](/prace-se-slozkou/agents-md/)** — pravidla, která
  platí při každém spuštění.
