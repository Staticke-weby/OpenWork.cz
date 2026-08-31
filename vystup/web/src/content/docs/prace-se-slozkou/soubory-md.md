---
title: "Soubory .md (Markdown): co to je a jak s nimi pracovat"
description: "Co je soubor .md, proč v něm AI agent píše výstupy, čím ho otevřete a jak z něj udělat Word nebo PDF. Základní značky Markdownu na jedné stránce."
sidebar:
  order: 2.5
  label: "Soubory .md (Markdown)"
---

Agent v OpenWorku často ukládá výstupy do souborů s příponou **`.md`** —
zápisy, přehledy, koncepty. I pravidla pro agenta bývají v souboru
`AGENTS.md`. Co to vlastně je?

## Co je Markdown

**Markdown** (přípona `.md`) je **obyčejný text s pár jednoduchými
značkami** pro nadpisy, tučné písmo nebo seznamy. Žádný speciální formát —
soubor otevřete v libovolném textovém editoru a přečtete ho i bez
jakéhokoli programu navíc.

Proto ho mají agenti (a programátoři) tak rádi:

- **Přežije cokoliv** — otevře se dnes, za deset let, na jakémkoli počítači.
- **Je vidět, co se změnilo** — po úpravě jde snadno porovnat starou a novou
  verzi.
- **Snadno se převádí** — z `.md` udělá agent Word, PDF nebo webovou
  stránku na jedno zadání.

## Jak vypadá uvnitř

Značek je pár a pochopíte je z příkladu:

```markdown
# Nadpis stránky

## Menší nadpis

Běžný odstavec. **Tučný text** a *kurzíva*.

- položka seznamu
- další položka

1. číslovaný seznam
2. druhý bod

[Odkaz na web](https://openwork.cz)

| Sloupec A | Sloupec B |
|-----------|-----------|
| hodnota   | hodnota   |
```

To je v podstatě vše, co v běžných výstupech potkáte.

## Čím soubor .md otevřít

- **Přímo v OpenWorku** — agent vám obsah ukáže, shrne nebo upraví.
- **V libovolném textovém editoru** — Poznámkový blok ve Windows,
  TextEdit na Macu. Uvidíte text se značkami, číst se dá bez problémů.
- **Hezky naformátovaný** ho zobrazí většina moderních editorů (třeba
  bezplatný VS Code) a řada aplikací na poznámky.

## Potřebujete Word nebo PDF?

Stačí říct agentovi:

```text
Převeď vystup/zapis-porady.md do Wordu, ať ho můžu poslat kolegům.
Formátování zachovej: nadpisy, seznamy, tabulku.
```

Funguje to i obráceně — z Wordu umí agent udělat `.md`, se kterým se dál
snadno pracuje.

:::tip
Vlastní poznámky a podklady klidně pište do `.md` souborů také — agentovi
se čtou nejlíp a nikdy nenarazíte na „nepodporovaný formát".
:::

## Kudy dál

- **[Soubor AGENTS.md](/prace-se-slozkou/agents-md/)** — nejdůležitější
  `.md` soubor ve složce: pravidla pro agenta.
- **[Struktura složek](/prace-se-slozkou/struktura-slozek/)** — jak složku
  uspořádat, aby se agentovi dobře pracovalo.
