# Plán tvorby obsahu — openwork.cz

Jak budeme psát obsah po sobě. Řídí se `AGENTS.md` (jazyk, SEO, zdroje) a
`openwork-cz-projektovy-plan.md` (struktura). Pořadí je podle dopadu:
nejdřív **nosné stránky** (nesou hlavní sdělení i hledané termíny), pak základy,
nakonec tvrdá data a překlady.

Legenda stavu: ✅ hotovo · 🟡 kostra (osnova + `[DOPLNIT]`) · ⬜ nezačato

---

## Průřezová pravidla (platí pro každou stránku)

- **Jeden hledaný termín na stránku** jako hlavní téma → promítni ho do
  `title`, `description`, H1 a jednoho–dvou podnadpisů. Při prvním výskytu
  cizí/technický pojem vysvětli (viz slovník pojmů).
- **Fakta jen z oficiálních zdrojů** (AGENTS.md → „Zdroje"): OpenWork
  (`openworklabs.com`, `different-ai/openwork`), opencode (`opencode.ai`,
  `anomalyco/opencode`). Chybí-li fakt, napiš `[DOPLNIT: co]` — nikdy nehádej.
- **Interní prolinky:** každá stránka odkáže 2–4 související stránky
  (rozcestníky, „viz také"). Nosné stránky jsou cílem odkazů z ostatních.
- **OpenCode Go** = referral odkaz `https://opencode.ai/go?ref=K0VC03J925`
  jako CTA „začít/vyzkoušet". Odkaz na stažení `openworklabs.com/download`.
- **Datové tabulky** (`data/*.yaml`) needitujeme dohady — plníme až po ověření
  a značíme `last_verified`.
- **Definice hotového (per stránka):**
  1. text projde kontrolou `zadani/03-kontrola-cestiny.md` (slovník, test
     běžného člověka, krátké věty, žádné vymyšlené fráze/fakta),
  2. `title` + `description` + H1 s klíčovým slovem, interní prolinky,
  3. `npm run build` bez chyb,
  4. záznam do `poznamky-agenta.md` (co doplnit, co ověřit).

---

## Vlna 0 — hotovo ✅

- ✅ Úvodní stránka (`index.mdx`) — hero, 4 bloky, rozcestník, callouty
- ✅ Slovník pojmů (`zaciname/slovnik-pojmu`)
- ✅ Kostra webu (Astro + Starlight, i18n, živé tabulky, hlídač zdrojů)

---

## Vlna 1 — nosné stránky (SEO + hodnota) 🎯

Převážně text, dají se napsat hned. Nejvyšší priorita.

| # | Stránka | Účel / hlavní sdělení | Klíčová slova | Zdroj |
|---|---|---|---|---|
| 1 | `vase-data/kde-bezi-vypocet` ✅ | Kde běží výpočet: lokální AI vs. cizí server | lokální AI modely, kde běží AI, AI na vlastním počítači | opencode/OpenWork docs |
| 2 | `vase-data/openwork-vs-cowork` ✅ *(nová)* | Otevřená alternativa k Claude Cowork / Codexu, bez lock-inu | OpenWork vs Claude Cowork, alternativa Codex | openworklabs.com (feature parity, migrace) |
| 3 | `kolik-to-stoji/index` ✅ | Jak se platí: aplikace zdarma, za AI za spotřebu, řada modelů zdarma | AI zdarma, kolik stojí AI, platba za spotřebu | openworklabs.com (ceník) |
| 4 | `zaciname/co-je-openwork` ✅ | Co OpenWork je a k čemu, tři pilíře, stažení | co je OpenWork, AI agent nad soubory | openworklabs.com |

> Pozn.: řádek 2 je nová stránka nad rámec původní kostry, přidaná kvůli silnému
> vyhledávacímu záměru. Slug: `/vase-data/openwork-vs-cowork/` (schváleno).
> Otevřené `[DOPLNIT]`: fakta o Claude Cowork/Codexu (ceny, data, účet), lokální
> modely přímo v OpenWorku, ceny týmového/firemního plánu, příklady z praxe.

---

## Vlna 2 — základy a onboarding 🟡→✅

Rychlé stránky, které navazují na hero a nosné stránky.

| Stránka | Účel | Klíčová slova |
|---|---|---|
| `zaciname/instalace` ✅ | Stažení a instalace krok za krokem (Win/macOS/Linux) | instalace OpenWork, stáhnout OpenWork |
| `zaciname/prvni-agent` ✅ | První agent nad vlastní složkou | první AI agent, jak spustit AI agenta |
| `zaciname/ekosystem` ✅ | opencode, OpenCode Zen/Go, Cortecs, MCP a jejich vztahy | opencode, OpenCode Go, MCP |
| `zaciname/casta-otazky` ✅ | FAQ nováčka (cena, data, nutnost umět programovat) | OpenWork časté otázky |

> `[DOPLNIT]` z Vlny 2: kroky instalace per OS, názvy obrazovek/tlačítek
> v aplikaci (instalace, brána+klíč, první agent), příklady k MCP, další FAQ.

---

## Vlna 3 — doplňkové stránky (prosa) ✅ hotovo

| Sekce | Stránky |
|---|---|
| Vaše data | `vase-data/index`, `vase-data/zdr/index` (co je ZDR, prosa), `gdpr-a-nis2`, `bezpecnost` |
| Kolik to stojí | `kolik-to-stoji/spolecna-penezenka` |
| Modely | `modely/index`, `modely/nejlepsi-pro/kod`, `.../cestinu`, `.../domacnost` (prosa + doporučení; tvrdá data až ve vlně 4) |
| Práce se složkou | `prace-se-slozkou/zaklady`, `struktura-slozek`, `agents-md`, ✅ `napojeni-nastroju` (MCP + Composio — nová) |

Klíčová slova této vlny: nulové uchovávání dat / ZDR, GDPR AI, nejlepší AI na
češtinu, nejlepší AI na kód, lokální AI pro domácnost, soubor AGENTS.md.

---

## Vlna 4 — datové tabulky (až po ověření faktů) 🔒

Plní se, jakmile hlídač zdrojů a ruční ověření dodají fakta. Každý řádek má
zdroj a datum.

- `data/zdr-poskytovatele.yaml` → stránka `vase-data/zdr/tabulka` (živá)
- `data/bezplatne-urovne.yaml` → stránka `kolik-to-stoji/bezplatne-urovne` (živá)
- **Katalog modelů** (nový datový soubor) → napojit na `modely/*` — hlavní účel
  hlídání zdrojů (viz `vystup/hlidac-zdroju/`).

Pravidlo: dokud řádek nemá `overeno`, drží upozornění „předběžné".

---

## Vlna 5 — O webu (důvěryhodnost) ✅ hotovo

> Zbývá jen `pravni.md`: provozovatel, kontakt, licence textů — potřebuje reálné
> údaje uživatele (nelze vymyslet).

| Stránka | Účel |
|---|---|
| `o-webu/proc-tento-web` | Motivace, tři pilíře, nezávislost |
| `o-webu/zasady` | Jak píšeme, ověřená fakta, nezávislost |
| `o-webu/pravni` | Provozovatel, odpovědnost, kontakt `[DOPLNIT]` |
| `o-webu/historie-zmen` | Záznamy změn (napojit na hlídač) |

---

## Vlna 6 — slovenská mutace 🇸🇰

Až je český obsah hotový: přeložit do `/sk/` podle jazykové zásady
(pěkně po slovensky pro běžné lidi), slovník pojmů jako závazný glosář.
Do té doby Starlight u chybějících překladů ukazuje český obsah s upozorněním.

---

## Vlna 7 — SEO a technické dotažení 🔧

- Audit interních prolinků (každá stránka má vstupy i výstupy).
- Kontrola `title`/`description` napříč webem (klíčová slova, délky).
- Open Graph / náhledové meta (bez rastrových obrázků — řešit textově/SVG).
- `sitemap` a `robots` kontrola, ověření po nasazení.

---

## Postup práce

1. Píšeme **po jedné stránce**, každou dotáhneme do „definice hotového".
2. Po každé stránce krátké shrnutí + commit; průběžně náhled v prohlížeči.
3. Pořadí vln držíme, ale v rámci vlny lze prohodit podle toho, kde máme fakta.
4. Otevřené otázky a rozhodnutí zapisujeme do `poznamky-agenta.md`.

**Další krok:** Vlna 1 / stránka 1 — `vase-data/kde-bezi-vypocet` (lokální AI).
