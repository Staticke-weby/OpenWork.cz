---
title: "OpenWork pro profese s mlčenlivostí"
description: "Jak s AI pracovat nad citlivými dokumenty — advokáti, lékaři, účetní. Lokální AI, nulové uchovávání dat (ZDR) a ukázkové prompty."
sidebar:
  order: 4
---

Advokáti, lékaři, účetní a další profese vázané mlčenlivostí mají jasné
pravidlo: **citlivá data nesmí nikam odejít.** OpenWork s tím počítá — v
desktopovém režimu soubory neopouštějí váš počítač a vy si vybíráte, kde běží
výpočet: u [poskytovatele s nulovým uchováváním dat](/vase-data/zdr/), nebo
úplně [u vás na počítači](/vase-data/lokalni-ai/).

## Nejdřív rozhodněte o datech

1. **Nejpřísnější varianta:** [lokální AI model](/vase-data/lokalni-ai/) —
   data neopustí váš stůl, výpočet běží u vás.
2. **Praktický kompromis:** poskytovatel s **ZDR** — zadání se zpracuje a hned
   zahodí. Koho zvolit, ukazuje
   [srovnání poskytovatelů](/vase-data/zdr/srovnani-poskytovatelu/).
3. **Vždy platí:** posílejte jen to, co je nutné. Co jde anonymizovat,
   anonymizujte — i to za vás agent připraví.

## Co s tím zvládnete

- **Revize dokumentů** — vypsat termíny, povinnosti a rizika ze smluv nebo
  spisů do přehledu.
- **Anonymizace** — před odesláním poskytovateli nahradit jména, rodná čísla
  a adresy zástupnými údaji.
- **Podklady a koncepty** — první verze vyjádření, zprávy nebo dopisu podle
  vašich podkladů; rozhodnutí a odpovědnost zůstávají na vás.
- **Pořádek ve spisech** — roztřídit dokumenty ke kauze či klientovi a vést
  jejich přehled.

## Ukázková složka

- **kancelar/**
  - `AGENTS.md` — pravidla pro agenta (např. „nikdy neposílej obsah složky
    klienti/ poskytovateli bez anonymizace")
  - **klienti/** — spisy po klientech
  - **vzory/** — vaše vzory smluv a podání
  - **vystup/** — přehledy a koncepty

## Ukázkové prompty

```text
Projdi dokumenty ve složce klienti/novak/ a vytvoř v ní anonymizovanou
kopii do podsložky anonymizovano/: nahraď jména, adresy, rodná čísla
a názvy firem zástupnými údaji a vytvoř převodní tabulku jen lokálně.
```

```text
Ze smlouvy klienti/novak/anonymizovano/smlouva.md vypiš všechny lhůty,
povinnosti stran a sankce do přehledné tabulky ve vystup/.
```

```text
Porovnej návrh smlouvy s naším vzorem ve vzory/kupni-smlouva.md a vypiš,
v čem se liší a která ustanovení v návrhu chybí.
```

## Kudy dál

- **Co je ZDR a jak ho poznat:** [nulové uchovávání dat](/vase-data/zdr/)
  a [srovnání poskytovatelů](/vase-data/zdr/srovnani-poskytovatelu/) se zdroji.
- **Evropská pravidla:** co pro vás znamená
  [GDPR a NIS2](/vase-data/gdpr-a-nis2/).
- **Klíče a přístupy:** jak si je pohlídat, radí
  [Bezpečnost](/vase-data/bezpecnost/).
