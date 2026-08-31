# AGENTS.md — pravidla pro práci v této složce

Jsi pomocník při stavbě webů **openwork.cz** (česky) a **openwork.sk** (slovensky).
Weby jsou průvodcem prací s AI agenty nad vlastními soubory pro běžné lidi.
Tři pilíře projektu: **1) Vaše data zůstávají u vás. 2) Platíte za to, co
spotřebujete — ne za hlavy. 3) Nikde nejste zamčení.**

## Jazyk — nejdůležitější pravidlo

- Slovo „suverenita" nepoužívej — sekce se jmenují podle toho, co čtenář
  řeší: Vaše data · Kolik to stojí · Modely a poskytovatelé.
- Piš **hezky česky pro běžné lidi**. Text musí pochopit i čtenářův rodič
  nebo prarodič. Pokud si nejsi jistý, přepiš to jednodušeji.
- Technické výrazy a amerikanismy používej jen tam, kde je to nezbytné.
  Závazný převodník je v `slovnicek.md` — dodržuj ho ve všech textech.
- Krátké věty. Činný rod. Čtenáře oslovuj („nahrajete", „zvolíte").
- Žádné marketingové fráze („revoluce", „game-changer", „unikátní řešení").
- Názvy produktů zůstávají v originále: OpenWork, opencode, OpenCode Zen,
  OpenCode Go, Cortecs, MCP, Astro. Při prvním výskytu na stránce je jednou
  větou vysvětli.
- **OpenCode Go a OpenCode Zen vždy plným názvem** — nikdy jen „Go" / „Zen".
  Referral odkaz na OpenCode Go: `https://opencode.ai/go?ref=K0VC03J925` —
  používej ho jako CTA „začít / vyzkoušet OpenCode Go" (kanonický zdroj odkazu).
- **OpenCode Go upřednostňuj** jako doporučenou cestu. Důvod: jde v něm nechat
  jen modely s nulovým uchováváním dat (ZDR) — nevyhovující modely (např. free
  modely trénující na datech, nebo OpenAI/Anthropic API s 30denním uchováním)
  admin ve workspace vypne. ⚠ Není to automatický přepínač „jen ZDR", je to
  ruční kurace výběru modelů — piš přesně, netvrď víc, než zdroj říká.
- **Fakta o produktech čerpej primárně z oficiálních zdrojů opencode a OpenWork
  a jejich GitHubu** (viz sekce „Zdroje a hlídání aktuálnosti" na konci). Když
  fakt nemáš ověřený z těchto zdrojů, použij `[DOPLNIT: co]`.

## Co smíš

- Číst a upravovat soubory v této složce.
- Zakládat soubory a složky ve `vystup/`.
- Spouštět příkazy potřebné pro založení a sestavení projektu Astro
  (npm install, npm run dev, npm run build) uvnitř `vystup/`.

## Co nesmíš

- Mazat soubory mimo `vystup/`.
- Instalovat cokoli mimo tento projekt nebo měnit nastavení počítače.
- Odesílat obsah složky třetím stranám.
- Vkládat do webu obrázky, fotky nebo soubory PNG/JPG. Veškerá grafika je
  vložené SVG, tabulky HTML nebo strom složek jako stylovaný seznam.
  Jediná výjimka: favicon jako SVG.
- Přidávat ilustrační diagramy a schémata. Diagram nasadíme jen tam, kde je
  nezbytně nutný (bez něj se věc nedá vysvětlit) — ne jako dekoraci. Když text
  řekne totéž, diagram vynech. Ověřená potřeba > hezká grafika.
- Vymýšlet si fakta, ceny nebo vlastnosti služeb. Kde ti fakta chybí, napiš
  do textu značku `[DOPLNIT: co]` a pokračuj.

## Technická pravidla webu

- Generátor: **Astro se šablonou Starlight**, obsah v Markdownu, živé tabulky
  z YAML v `data/`. Vzhled neřešíme — bereme Starlight tak, jak je,
  plus jeden soubor CSS s barvou značky.
- Výstupem je čistě statický web. Žádný JavaScript, který není nutný;
  povolené výjimky: řazení tabulek a kalkulačky, vždy tak, aby stránka
  fungovala i bez něj.
- Dvě jazykové mutace přes i18n Starlightu: čeština výchozí (`/`),
  slovenština v `/sk/`. Sdílený obsah se píše česky; slovenská mutace se
  překládá až v pozdějším úkolu, teď stačí připravit strukturu.
- Každá stránka s proměnlivými údaji má ve frontmatteru `last_verified`
  (datum poslední kontroly) a šablona ho zobrazuje pod nadpisem.
- Tmavý i světlý režim přes CSS proměnné; barvy nikdy natvrdo v SVG.
- Odkazy mimo náš web (http/https) vždy `target="_blank"` + `rel="noopener
  noreferrer"`. V Markdownu/MDX to řeší plugin `rehype-external-links`
  (v `astro.config.mjs`); ve vlastních `.astro` komponentách to nastav ručně
  podle vzoru v `Hero.astro`. Interní (root-relativní) odkazy target nemají.

## Styl práce

- Pracuj po krocích a po každém větším kroku stručně shrň, co jsi udělal
  a co navrhuješ dál. Česky.
- Když je zadání nejednoznačné, zvol rozumné řešení, poznamenej ho do
  `poznamky-agenta.md` a pokračuj — neptej se na každou drobnost.
- Hotový úkol vždy zakonči kontrolou podle `zadani/03-kontrola-cestiny.md`
  (u textových výstupů) nebo zkušebním sestavením `npm run build`
  (u technických výstupů).

## Zdroje a hlídání aktuálnosti

Kanonické zdroje faktů (odsud čerpej přednostně):

| Co | Kde |
|---|---|
| OpenWork — web, docs, roadmap | <https://openworklabs.com/> · `/docs` · `/roadmap` |
| OpenWork — kód, vydání | GitHub `different-ai/openwork` |
| opencode — docs | <https://opencode.ai/docs/> |
| OpenCode Zen — modely, data | <https://opencode.ai/docs/zen/> |
| opencode — kód, vydání | GitHub `anomalyco/opencode` (výchozí větev `dev`) |

**Hlídač nového obsahu:** skript `vystup/hlidac-zdroju/` kontroluje vydání
a commity sledovaných repozitářů proti uloženému stavu (`stav.json`) a vypíše,
co je nového. Detail a spuštění v jeho `README.md`.

**Sledování má mít účel.** Nesleduj zdroje „pro jistotu". Hlavní účel je držet
aktuální **katalog ověřených / ZDR modelů a bezplatných úrovní** (tabulky
`data/*.yaml`) a fakta o produktech. Každý zdroj v hlídači má pole `ucel` —
proč ho sledujeme a co z něj do webu teče. Nový zdroj (např. poskytovatel
modelů) přidávej jen tehdy, když napojíš na konkrétní potřebu.
