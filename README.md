# OpenWork.cz

Zdrojové soubory webu **[www.openwork.cz](https://www.openwork.cz)**. Je to
nezávislý český a slovenský průvodce aplikací OpenWork. OpenWork je
aplikace, ve které AI agent pracuje přímo s vašimi soubory ve složce.
Pomůže třeba roztřídit dokumenty, sepsat text nebo zpracovat tabulku.

Web vysvětluje práci s AI agenty běžným lidem, jednoduše a česky. Stojí na
třech pilířích:

1. **Vaše data zůstávají u vás.**
2. **Platíte za to, co spotřebujete, ne za počet lidí.**
3. **Nikde nejste zamčení.**

> OpenWork.cz není spojený s OpenWork Labs, Inc.

## Co na webu najdete

- **Začínáme:** instalace a první kroky v OpenWorku.
- **Vaše data:** kde se data zpracovávají, co je ZDR (poskytovatel neukládá
  vaše zadání), GDPR a srovnání s Claude Cowork.
- **Kolik to stojí:** placení za spotřebu, předplatné a AI zdarma.
- **Modely a poskytovatelé:** katalog AI modelů, které běží v EU, a srovnání
  poskytovatelů Melious, Cortecs, OpenCode Go, OpenCode Zen a OpenRouter.
- **Témata:** návody pro konkrétní práci, například faktury, smlouvy
  nebo daňové přiznání.

Celý web je i ve slovenštině, na adrese `/sk/`.

## Jak web vzniká

Web je čistě statický a postavený na [Astro](https://astro.build)
se šablonou [Starlight](https://starlight.astro.build). Texty se píšou
v Markdownu. Tabulky s cenami a modely se generují z dat v YAML. Obsah
tvoří AI agent podle pravidel projektu a provozovatel ho kontroluje.

| Soubor / složka | K čemu slouží |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Pravidla pro AI agenta: jazyk, fakta, doporučení, technika, SEO. |
| [`slovnicek.md`](slovnicek.md) | Závazný slovník: jak psát česky, co nechat v originále. |
| [`zadani/`](zadani/) | Zadání úkolů pro agenta, včetně kontroly češtiny. |
| [`vystup/web/`](vystup/web/) | Projekt webu (Astro + Starlight). |
| [`vystup/web/src/content/docs/`](vystup/web/src/content/docs/) | Texty stránek (čeština, slovenština v `sk/`). |
| [`vystup/web/src/data/`](vystup/web/src/data/) | Údaje pro tabulky: modely, ceny poskytovatelů, bezplatné úrovně. |
| [`vystup/web/scripts/kontrola-obsahu.mjs`](vystup/web/scripts/kontrola-obsahu.mjs) | Kontrola obsahu před sestavením (štítky, témata, data). |
| [`vystup/hlidac-zdroju/`](vystup/hlidac-zdroju/) | Skript, který hlídá novinky u zdrojů faktů (OpenWork, opencode). |
| [`vystup/JAK-NAHRAT.md`](vystup/JAK-NAHRAT.md) | Jak se web nasazuje. |

## Spuštění u vás

Potřebujete [Node.js](https://nodejs.org) ve verzi 22.12 nebo novější.

```bash
cd vystup/web
npm install
npm run dev
```

Web pak poběží na `http://localhost:4321`. Příkaz `npm run build` nejdřív
zkontroluje obsah a potom sestaví hotový web do `vystup/web/dist/`.

## Nasazení

Každá změna ve větvi `main` se sama sestaví a zveřejní přes GitHub Pages
(viz [`.github/workflows/nasazeni.yml`](.github/workflows/nasazeni.yml)).
Když kontrola obsahu nebo sestavení selže, zůstane na webu předchozí verze.
Podrobnosti najdete v [`vystup/JAK-NAHRAT.md`](vystup/JAK-NAHRAT.md).

## Chyba nebo nápad?

Našli jste chybu, zastaralou cenu nebo máte nápad na téma? Založte
[issue](https://github.com/Staticke-weby/OpenWork.cz/issues), nebo se
ozvěte v komunitě [OpenWork CZ/SK na Discordu](https://discord.gg/dKYspwbsSR).
