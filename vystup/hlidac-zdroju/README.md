# Hlídač zdrojů

Malý skript, který kontroluje nový obsah v oficiálních repozitářích, ze kterých
openwork.cz čerpá fakta. Cíl: **vědět, kdy je potřeba upravit web** — hlavně
katalog ověřených / ZDR modelů a bezplatných úrovní (`data/*.yaml`), a fakta
o produktech.

## Co sleduje

| Repozitář | Proč |
|---|---|
| `different-ai/openwork` | fakta o aplikaci OpenWork (zdarma/open source, funkce, ceník) |
| `anomalyco/opencode` | změny v opencode a OpenCode Zen/Go — ekosystém, modely, ZDR |

U každého repozitáře porovná **poslední vydání** a **poslední commit** proti
uloženému stavu (`stav.json`) a vypíše, co přibylo.

## Spuštění

Ve složce skriptu:

```bash
node hlidac.mjs
```

- `node hlidac.mjs` — vypíše, co je nového od posledního uloženého stavu.
- `node hlidac.mjs --uloz` — totéž a uloží aktuální stav do `stav.json`
  (příště se ukáže jen to novější).
- `node hlidac.mjs --json` — strojově čitelný výstup (pro CI/automatizaci).

Nepotřebuje žádné závislosti (stačí Node 24+). Pro vyšší limit GitHub API lze
nastavit proměnnou `GITHUB_TOKEN`.

## Jak s nálezem naložit

1. Otevři odkaz na vydání/commit a zjisti, čeho se změna týká.
2. Dotýká-li se webu (nový/změněný model, ZDR politika, ceník, funkce),
   uprav příslušnou stránku nebo `data/*.yaml` a datum `last_verified`.
3. Spusť `node hlidac.mjs --uloz`, aby se stav posunul.

## Rozšíření o další zdroje

Přidej položku do pole `ZDROJE` v `hlidac.mjs` — **vždy s polem `ucel`** (proč
zdroj sledujeme a co z něj teče do webu). Nesleduj zdroje „pro jistotu"; nový
zdroj (např. poskytovatel modelů) přidávej jen s konkrétní vazbou na obsah webu
(typicky katalog modelů). Viz `AGENTS.md` → „Zdroje a hlídání aktuálnosti".

## Automatické spouštění

Skript zatím spouštíš ručně. Pravidelné hlídání (např. týdně přes GitHub
Actions, které při novém obsahu založí issue) je volitelný krok — viz
`poznamky-agenta.md`.
