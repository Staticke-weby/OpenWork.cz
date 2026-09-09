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
- Ceník (aktualizováno 2026-08-31 z openworklabs.com/pricing): **Free 0 do 5
  uživatelů; Team 20 $/místo/měs. do 100 uživatelů; Enterprise 50 $/uživatel/měs.**
  (SSO/SAML, self-host, vlastní modely). Stejná cena cloud i self-host.
  ⚠ Ceník se mění (dřívější fetch uváděl jiné hodnoty) — ověřovat.
  Na homepage jsem **vypustil tvrzení „žádný paušál za hlavu"** — Team plán je
  per-seat. Homepage tvrdí jen: aplikace zdarma, za AI platíš za spotřebu.
- **UI OpenWorku je anglicky** — UI popisky psát anglicky + české vysvětlení
  (pravidlo v AGENTS.md). Zdroj: openworklabs.com/docs.
- **Napojení nástrojů:** MCP; napojení OpenCode Go = Settings → AI Providers →
  Connect → opencode → OpenCode Go → API key. Nativní MCP preferovat; kde chybí,
  **Composio** (composio.dev, 1000+ integrací, free plán). Nová stránka
  `prace-se-slozkou/napojeni-nastroju`.

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
- **Výchozí doporučený model (současný): GLM 5.3 Flash.**
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

## Opravy webu, SEO a parita CZ/SK (2026-08-31)

- **Opravy:** klikací sloupec Zdroj v živých tabulkách; kotvy bloků poskytovatelů
  bez mezer (`opencode-go`) a h2 místo h3; odstraněn uniklý redakční placeholder
  z `bezplatne-urovne.yaml`; historie změn srovnána se skutečným obsahem tabulek;
  „viz níže" → „viz samostatná stránka"; přístupnost tabulek (`scope="col"`,
  skrytý `<caption>`); světlý akcent ztmaven na `#187a63` (kontrast ≥ 4,5:1).
- **Smazány zastaralé YAML v kořeni repa** (`data/*.yaml`) — živá data jsou jen
  ve `vystup/web/src/data/`; odkazy v README/AGENTS.md/hlídači opraveny.
- **SEO:** `og:title` na úvodních stránkách; náhledový obrázek `public/og.png`
  (1200×630, zdroj návrhu `vystup/web/og-zdroj.svg` — povolená výjimka
  z pravidla „žádné rastrové obrázky", zapsána v AGENTS.md; PNG se generuje
  přes `sharp` z node_modules: `sharp(svg).resize(1200, 630).png()`; meta URL
  nese `?v=N` kvůli cache sociálních sítí — při změně obrázku zvýšit verzi
  v `astro.config.mjs` u `og:image` i `twitter:image`); JSON-LD WebSite +
  Organization site-wide a FAQPage na častých otázkách (CZ i SK, ve frontmatter
  `head:` — při změně otázek aktualizovat i JSON-LD).
- **Parita CZ/SK:** doplněny vypuštěné pasáže v `sk/vase-data/openwork-vs-cowork`
  a chybějící `:::note` v `sk/modely/nejlepsi-pro/domacnost`; dvojjazyčná 404
  (`src/content/docs/404.md`); „pár korún" → „pár desiatok centov".
- **Centralizace:** `last_verified` z frontmatteru se nově renderuje pod
  nadpisem (override `PageTitle.astro`, schéma rozšířeno v `content.config.ts`);
  ruční věty „Naposledy ověřeno/overené …" z textů odstraněny. Konstanta
  doporučeného modelu v `src/data/konstanty.yaml`; konzistenci hlídá
  `scripts/kontrola-obsahu.mjs` (`npm run check`, spouští se i před buildem).
- **Slovenské slugy: ODLOŽENO.** Starlight 0.41 páruje překlady CZ↔SK výhradně
  shodným slugem za prefixem `/sk/` — přejmenování by rozbilo sidebar, přepínač
  jazyků a vyrobilo fallback duplicity. Mapa 16 přejmenování (kolik-to-stoji →
  kolko-to-stoji, prace-se-slozkou → praca-s-priecinkom, nejlepsi-pro/cestinu →
  najlepsi-pre/slovencinu, instalace → instalacia, prvni-agent → prvy-agent,
  casta-otazky → caste-otazky, slovnik-pojmu → slovnik-pojmov,
  placene-poskytovatele → plateni-poskytovatelia, poskytovatele-ai-zdarma →
  poskytovatelia-ai-zadarmo, spolecna-penezenka → spolocna-penazenka,
  struktura-slozek → struktura-priecinkov, napojeni-nastroju →
  napojenie-nastrojov, proc-tento-web → preco-tento-web, historie-zmen →
  historia-zmien, pravni → pravne, zaklady/kod/domacnost/agents-md jen změna
  adresáře) se použije až u samostatného **openwork.sk** (SK jako root locale),
  s přesměrováními přes Astro `redirects:` (meta-refresh, funguje na FTP).

## Vylepšení slugů před prvním nasazením (2026-08-31)

Web ještě nebyl nasazen → přejmenování bez přesměrování. Provedeno (CZ i SK
zrcadla, sidebar, všechny interní odkazy):
`casta-otazky` → `caste-otazky` (gramatika); `kde-bezi-vypocet` → `lokalni-ai`;
`zdr/tabulka` → `zdr/srovnani-poskytovatelu`; `openwork-vs-cowork` →
`openwork-vs-claude-cowork`; `nejlepsi-pro/kod` → `nejlepsi-pro/programovani`
(titulek nově „…na programování a kód"). Dále sjednoceno názvosloví odkazů
„bezplatné úrovně" → „poskytovatelé AI zdarma", popisky Zen odkazů na referral
přejmenovány na „OpenCode Zen/Go" a oslovení na úvodu je neutrální
(„Jste tu poprvé?" / „Ste tu prvýkrát?").
