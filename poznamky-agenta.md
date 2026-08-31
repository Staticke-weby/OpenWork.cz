# Poznámky agenta

Rozhodnutí, která jsem udělal sám při nejednoznačném zadání (dle AGENTS.md).

## Zadání 1 — kostra Astro (2026-08-31)

- **Umístění projektu:** `vystup/web/` (dle zadání). Sestavený web bude ve
  `vystup/web/dist/`.
- **Scaffold ručně, ne přes `npm create astro`:** interaktivní průvodce nejde
  spustit neinteraktivně. Založil jsem stejnou strukturu ručně (package.json +
  astro.config.mjs + Starlight), obsahově odpovídá `--template starlight`.
- **Verze balíčků:** `astro` a `@astrojs/starlight` nejnovější stabilní přes
  `npm install`. Konkrétní verze viz `vystup/web/package.json`.
- **Živé tabulky z YAML:** komponenta `TabulkaZDat.astro` čte YAML ze
  `src/data/` přes `node:fs` + `js-yaml` v čase sestavení (web je statický).
  Prop `zdroj` = název souboru.
- **Sidebar:** `autogenerate` po složkách; české popisky sekcí přes `label`.
- **Patička:** vlastní `src/components/Footer.astro` přes `components` override
  Starlightu (ne úpravou šablony), obsahuje povinnou větu o nezávislosti.
- **Slovenská větev:** jen jedna ukázková stránka `sk/index.mdx`; překlady
  jsou pozdější úkol. Starlight u chybějících překladů zobrazí český obsah.
- **Obsah stránek:** zatím jen nadpis + osnova + `[DOPLNIT: …]` značky
  (finální texty jsou zadání 2+).
- **Popisky sloupců tabulek:** klíče v YAML jsou bez diakritiky (přenositelnost),
  komponenta je mapuje na české nadpisy (mapa `POPISKY`). Nový sloupec v YAML =
  doplnit řádek do mapy, jinak se jen „humanizuje" bez diakritiky.
- **Data v tabulce:** hodnoty typu datum (`last_verified`, `overeno`) se
  formátují česky („30. srpna 2026") přes `Intl.DateTimeFormat('cs-CZ')`.
- **Podskupina `modely/nejlepsi-pro/`:** autogenerate ji zobrazí jako skupinu
  s popiskem odvozeným z názvu složky („nejlepsi-pro"). K vyřešení, až se sekce
  Modely bude finalizovat (buď ruční sidebar, nebo přejmenování). Zatím ponecháno.

## Zadání 2 — úvodní stránka (2026-08-31)

- **Hlavní věta (claim):** použil jsem doporučenou z zadání, rozdělenou do hero
  na titulek + podtitulek: „Všechno, co dnes AI umí." / „Bez předplatného
  a s daty pod vaší kontrolou." **Dvě alternativy k rozhodnutí člověku:**
  1. „Umělá inteligence nad vašimi soubory — bez měsíčního paušálu a bez
     posílání dat na cizí servery."
  2. „AI, kterou máte pod kontrolou vy: vlastní data, vlastní tempo, vlastní účet."
- **Ústřední SVG** `DiagramPenezenka.astro` — **odstraněn na pokyn uživatele
  (2026-08-31), přebíjí zadání 2.** Uživatel ho označil za zbytečnou/ošklivou
  grafiku, která nic nepřidá; text pilíře říká totéž. Komponenta smazána,
  z `index.mdx` odebrán import i použití. Ikony u dlaždic a tlačítek ponechány
  (uživatel je nechal být).
- **Odběr novinek** v závěru zatím `[DOPLNIT: odkaz na odběr novinek]` —
  mechanismus (formulář/služba) není rozhodnut.
- **Ověření SVG:** panel diagramu se v náhledovém prohlížeči nedaří sejmout
  (inline SVG region vychází bílý), ale hit-test v DOM potvrdil, že se prvky
  malují na správných souřadnicích (circle/rect/text), barvy se resolvují.
  Pozn.: nadpisy panelů měly původně `--sl-color-white` (ve světlém režimu
  neviditelné) → opraveno na `--sl-color-text`.
- **Favicon** `public/favicon.svg` (klíčová dírka, barva značky natvrdo —
  favicon je jediná povolená grafika a nemá přístup k CSS proměnným webu).

## Úprava homepage na pokyn uživatele (2026-08-31)

- **Vlastní hero** `Hero.astro` (override Starlight `Hero` v configu) — výchozí
  hero se uživateli nelíbil. Bez ilustrací: eyebrow, velký nadpis, podtitulek,
  dvě pilulková tlačítka, tři chips s fajfkou, decentní akcentní gradient.
  Vše přes CSS proměnné (ověřeno světlý i tmavý režim). Pozn.: `--sl-color-white`
  ve Starlightu = barva nadpisového textu (tmavá ve světlém, světlá v tmavém),
  proto ji lze použít na titulek i text chipů.
- **Přeformulované pilíře** (uživatel: „Platíte za spotřebu, ne za hlavy" laikovi
  nic neřekne): „Platíte jako za elektřinu", „Kdykoli přejdete jinam" místo
  „Nikde nejste zamčení". Cíl: konkrétní, srozumitelné běžnému člověku.
- **Sekce „Co děláme jinak" má 4 bloky** (uživatel chtěl 4): přidán blok
  „Vyberete si z mnoha AI modelů" s odkazem na /modely/. CardGrid bez stagger
  (čisté 2×2). Nadpis změněn z „Tři věci…" na „Co děláme jinak".

## Pozicování homepage: „Zdarma a otevřené" (2026-08-31)

Rozhodnutí uživatele (AskUserQuestion): hlavní nota = **„Zdarma a otevřené —
platíte, jen když musíte"**; **Cowork zmínit** jako placenou alternativu.
Formulace „Platíte jako za elektřinu" zavržena (uživatel: „hroznej zvast").

**Zdroj faktů: <https://openworklabs.com/>** (ověřeno 2026-08-31, přeověřit po
změně webu). Použitá tvrzení na homepage:
- Desktop aplikace **zdarma a open source, bez účtu**; staví na OpenCode.
- **50+ modelů** od více poskytovatelů; bez lock-inu.
- V desktop režimu **soubory zůstávají na počítači**, zadání jde rovnou
  zvolenému poskytovateli; cloud workers volitelné a sandboxované.
- **Open-source alternativa k Claude Cowork a Codexu**, „feature parity" bez
  svázání s jedním dodavatelem; existuje migrační průvodce pro Cowork.
- Ceník (NEuvedeno na homepage, ale k dispozici): Team Starter prvních 5 míst
  zdarma, pak 10 $ / místo / měsíc; Enterprise custom + self-host / vlastní
  inference. ⚠ Kvůli tomu jsem na homepage **vypustil tvrzení „žádný paušál za
  hlavu"** — Team plán je per-seat, bylo by to nepřesné. Homepage tvrdí jen:
  aplikace zdarma, za AI platíš poskytovateli za spotřebu, řada modelů zdarma.

## Zdroje, hlídač a odkazy (2026-08-31)

- **OpenCode Go upřednostňujeme** — jde v něm nechat jen ZDR modely (ruční
  kurace: admin vypne nevyhovující; není to automat). Pravidlo v AGENTS.md.
- **Čerpat primárně z oficiálních zdrojů** opencode/OpenWork + jejich GitHub.
  Kanonické zdroje + tabulka v AGENTS.md → „Zdroje a hlídání aktuálnosti".
  Repos: `different-ai/openwork`, `anomalyco/opencode` (větev `dev`).
- **Hlídač zdrojů** `vystup/hlidac-zdroju/hlidac.mjs` (bez závislostí) —
  porovnává poslední vydání/commit repozitářů proti `stav.json`. Účelově
  řízený (pole `ucel` u zdroje); hlavní účel = katalog ověřených/ZDR modelů
  a bezplatných úrovní. Seed stavu hotov (openwork v0.18.40, opencode v1.18.25).
  Spouštění: **ručně** (`node hlidac.mjs`), zatím bez cronu — rozhodnutí
  uživatele 2026-08-31. GitHub Actions cron je možný později, pokud bude třeba.
- **Odkaz na stažení** `https://openworklabs.com/download` na: hero (primární
  CTA), karta „Zdarma a s otevřeným kódem", stránka Instalace.

## Vlna 1 obsahu + pozicování cest/modelů (2026-08-31)

- Napsány nosné stránky: `vase-data/kde-bezi-vypocet`,
  `vase-data/openwork-vs-cowork` (nová), `kolik-to-stoji/index`,
  `zaciname/co-je-openwork`. Fakta z openworklabs.com + opencode docs;
  nejistá fakta jako `[DOPLNIT]`.
- **Lokální AI netlačit** (pokyn uživatele): většině lidí se nevyplatí (drahý
  HW, setup). Hlavní cesta = poskytovatel, ideálně **placené modely přes
  základní předplatné OpenCode Go** (rychlost, kvalita, stabilita). Bezplatné
  modely jen na vyzkoušení. Pravidlo v AGENTS.md.
- **Výchozí doporučené modely (současné): GLM 5.3 Flash, Deepseek v4 Flash.**
  Proměnlivé — ověřovat hlídačem a udržovat v katalogu modelů (Vlna 4).
  ⚠ Nejsou ověřené z oficiálního zdroje, jde o zadání uživatele — před velkým
  rozšířením potvrdit dostupnost přes OpenCode Go.

### Kontrola češtiny (zadání 03) — kostra 2026-08-31

- Prošel jsem vlastní texty (osnovy, slovníček, návod JAK-NAHRAT, komponenty).
- Slovníček: 0 zakázaných slov; „suverenita" nikde. Produkty (OpenWork, opencode,
  Zen, Go, Cortecs, MCP, ZDR, token) vysvětleny při prvním výskytu.
- Fakta: všechna čísla/ceny buď z `data/*.yaml`, nebo označena `[DOPLNIT]`.
- K rozhodnutí člověku: finální texty stránek (zadání 2+) a ověření řádků obou
  YAML tabulek (zatím kostra, označeno v caution rámečku).
