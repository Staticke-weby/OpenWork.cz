---
title: "Dovednosti (skills): uložené postupy, které agent zná napořád"
description: "Co jsou dovednosti (skills) v OpenWorku: psaný postup, který si agent načte, když úkol odpovídá. Jak dovednost vytvořit z chatu, upravit a kdy ji použít místo AGENTS.md."
sidebar:
  order: 3.5
  label: "Dovednosti (skills)"
---

Když s agentem něco vyladíte — třeba přesný postup vyúčtování — je škoda to
příště vysvětlovat znovu. Na to jsou **dovednosti** (anglicky *skills*):
**psaný postup, který si agent sám načte, kdykoli úkol odpovídá.** Kuchařka
na jeden druh práce.

## Jak dovednost vznikne

Nejjednodušší cesta vede **z chatu**:

1. Dodělejte úkol s agentem tak, aby výsledek vypadal přesně podle vašich
   představ.
2. Napište: „**Udělej z toho, co jsme právě dokončili, opakovatelnou
   dovednost.**"
3. Agent postup sepíše a uloží. Příště dovednost vyvoláte jménem — nebo ji
   agent použije sám, když pozná odpovídající úkol.

Dovednost jde založit i ručně: je to obyčejný
[soubor .md](/prace-se-slozkou/soubory-md/) — `SKILL.md` ve složce
(`.opencode/skills/<název>/`). Taková **lokální dovednost je zdarma
a nevyžaduje žádný účet**; platí jen pro danou složku. S přihlášením k účtu
OpenWork jde dovednosti spravovat i v `Settings` → `Library`.

## Jak dovednost upravit

Řeknete to v chatu — třeba: „Uprav dovednost *vyúčtování cesty*, ať se před
uložením tabulky vždy zeptá na měnu." Dovednost je soukromá; sdílení
s týmem je samostatný krok, který děláte vědomě.

## Dovednost, AGENTS.md, nebo MCP?

Tři věci se pletou — každá dělá něco jiného:

| Co | K čemu je |
|---|---|
| **[MCP / připojená služba](/prace-se-slozkou/napojeni-nastroju/)** | **přístup** do systému (e-mail, kalendář, firemní systém) |
| **Dovednost (skill)** | **postup** pro jeden druh práce — načte se, když úkol odpovídá |
| **[AGENTS.md](/prace-se-slozkou/agents-md/)** | **pravidla platná vždy** v dané složce, u každého úkolu |

Zjednodušeně: připojení říká *kam agent dosáhne*, dovednost *jak se dělá
tahle práce*, AGENTS.md *co platí pokaždé*. (Pod kapotou se dovednosti
balí do „pluginů" — balíčků, které mohou nést víc dovedností najednou;
běžně to ale řešit nemusíte.)

## Ukázková zadání

**Vytvoření dovednosti z hotové práce:**

```text
Postup, který jsme právě dokončili (bločky → tabulka vyúčtování), ulož
jako opakovatelnou dovednost „vyúčtování cesty". Do postupu zapiš
i pravidla: nečitelné položky označit, originály neměnit.
```

**Použití dovednosti:**

```text
Udělej vyúčtování cesty ze složky sluzebka-brno/.
```

**Úprava dovednosti:**

```text
Uprav dovednost „vyúčtování cesty": výslednou tabulku nově ukládej jako
XLSX a přidej sloupec s kurzem, když jsou účtenky v cizí měně.
```

:::tip
Dobrá dovednost vzniká z **hotové, vyladěné práce** — ne z popisu předem.
Nejdřív úkol jednou dotáhněte v chatu, teprve pak ho nechte uložit.
:::

## Kudy dál

- **[Automatizace činností](/co-vytvorite/automatizace/)** — kde dovednosti
  zapadají do opakované práce.
- **[Soubor AGENTS.md](/prace-se-slozkou/agents-md/)** — pravidla platná
  při každém spuštění.
- **[Soubory .md](/prace-se-slozkou/soubory-md/)** — formát, ve kterém
  dovednosti žijí.
