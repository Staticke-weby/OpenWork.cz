---
title: "OpenWork pro profese s mlčenlivostí"
description: "Jak s AI pracovat nad citlivými dokumenty — advokáti, lékaři, účetní. Lokální AI, nulové uchovávání dat (ZDR) a ukázkové prompty."
sidebar:
  order: 4
tagy: [dokumenty/smlouvy]
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

Každé zadání ukazuje jeden dobrý zvyk — u citlivých dat na nich záleží
dvojnásob.

**Anonymizujte dřív, než cokoli půjde poskytovateli — a nic nedomýšlejte:**

```text
Projdi dokumenty ve složce klienti/novak/ a vytvoř v ní anonymizovanou
kopii do podsložky anonymizovano/: nahraď jména, adresy, rodná čísla
a názvy firem zástupnými údaji (Osoba A, Firma 1…). Převodní tabulku
ulož jen lokálně do klienti/novak/prevod.md. Do anonymizované kopie nic
nedoplňuj ani nedomýšlej.
```

**Před odesláním si nechte anonymizaci zkontrolovat:**

```text
Zkontroluj všechny soubory v klienti/novak/anonymizovano/, jestli v nich
nezůstalo žádné jméno, rodné číslo, adresa ani název firmy. Co najdeš,
vypiš se souborem a řádkem — nic zatím neopravuj.
```

**U lhůt a povinností chtějte odkaz na konkrétní ustanovení:**

```text
Ze smlouvy klienti/novak/anonymizovano/smlouva.md vypiš všechny lhůty,
povinnosti stran a sankce do přehledné tabulky ve vystup/. U každé
položky uveď číslo článku a odstavce, ze kterého vychází.
```

**Porovnání se vzorem — s rozdíly po bodech:**

```text
Porovnej návrh smlouvy s naším vzorem ve vzory/kupni-smlouva.md a vypiš
po bodech: co je v návrhu jinak, která ustanovení vzoru chybí a co je
v návrhu navíc. U každého rozdílu uveď obě znění vedle sebe.
```

**Koncepty jen z podkladů — a s označením děr:**

```text
Připrav koncept vyjádření pro klienta z podkladů ve složce
klienti/novak/anonymizovano/. Vycházej jen z těchto podkladů; každé
tvrzení opři o konkrétní dokument. Kde podklad chybí, napiš
[CHYBÍ PODKLAD] — nic nedovozuj. Koncept ulož do vystup/ ke kontrole.
```

:::tip[Dobré zvyky při zadávání]
**Anonymizovat před odesláním** poskytovateli · anonymizaci si nechat
**zkontrolovat** · u tvrzení chtít **odkaz na dokument a článek** · koncepty
**jen z podkladů**, díry označit · převodní tabulky a citlivé soubory držet
**jen lokálně**.
:::

## Kudy dál

- **Co je ZDR a jak ho poznat:** [nulové uchovávání dat](/vase-data/zdr/)
  a [srovnání poskytovatelů](/vase-data/zdr/srovnani-poskytovatelu/) se zdroji.
- **Evropská pravidla:** co pro vás znamená
  [GDPR a NIS2](/vase-data/gdpr-a-nis2/).
- **Klíče a přístupy:** jak si je pohlídat, radí
  [Bezpečnost](/vase-data/bezpecnost/).
