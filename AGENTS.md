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
- **Nevymýšlej neobvyklá ani krkolomná slova** (např. „změnovník"). Použij
  běžný, zavedený český výraz („historie změn"). Když si nejsi jistý, zvol
  to nejobyčejnější pojmenování.
- **UI OpenWorku je anglicky** (aplikace nemá češtinu). Názvy tlačítek a
  obrazovek uváděj **anglicky, jak je uživatel vidí** (Settings, AI Providers,
  Connect, model picker…), a doplň krátké české vysvětlení. Přesné popisky ber
  z dokumentace na `openworklabs.com/docs`.
- Názvy produktů zůstávají v originále: OpenWork, opencode, OpenCode Zen,
  OpenCode Go, Cortecs, MCP, Astro. Při prvním výskytu na stránce je jednou
  větou vysvětli.
- **Značku piš vždy „OpenWork" a „OpenWork.cz"** (velké O i W). Malá písmena
  „openwork.cz" jen v URL/doméně. Pozor: „opencode" se naopak píše malým „o".
- **OpenCode Go a OpenCode Zen vždy plným názvem** — nikdy jen „Go" / „Zen".
  **Každý odkaz na OpenCode Go směřuj vždy na referral URL**
  `https://opencode.ai/go?ref=K0VC03J925` — nejen jako CTA, ale kdekoli
  OpenCode Go odkazuješ (kanonický zdroj odkazu).
- **OpenCode Go upřednostňuj** jako doporučenou cestu. Důvod: jde v něm nechat
  jen modely s nulovým uchováváním dat (ZDR) — nevyhovující modely (např. free
  modely trénující na datech, nebo OpenAI/Anthropic API s 30denním uchováním)
  admin ve workspace vypne. ⚠ Není to automatický přepínač „jen ZDR", je to
  ruční kurace výběru modelů — piš přesně, netvrď víc, než zdroj říká.
- **Fakta o produktech čerpej primárně z oficiálních zdrojů opencode a OpenWork
  a jejich GitHubu** (viz sekce „Zdroje a hlídání aktuálnosti" na konci). Když
  fakt nemáš ověřený z těchto zdrojů, použij `[DOPLNIT: co]`.
- **Doporučovaná cesta pro čtenáře** (pořadí důrazu):
  1. **Placené modely přes základní předplatné OpenCode Go** — pro každodenní
     práci; dají lepší rychlost, kvalitu a stabilitu. Toto je hlavní cesta.
  2. **Bezplatné modely** — na vyzkoušení a lehké použití, ne jako cíl.
  3. **Lokální AI modely** — jen okrajově, pro menšinu (citlivá data / offline
     + výkonný počítač). Nenech se jimi unést; většině lidí se nevyplatí.
  Výchozí doporučený model (současný, ověřovat hlídačem): **GLM 5.3 Flash**.
- **Napojení nástrojů (MCP):** agent připojuje další služby přes MCP. **Nativní
  MCP preferuj** — kde má služba vlastní MCP server, připojí se přímo. Kde
  vlastní MCP nemá, doporuč **Composio** (`composio.dev`) jako most (1000+
  integrací přes MCP, má bezplatný plán). Composio jen jako záloha, ne první
  volba.

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
  Tři výjimky: favicon jako SVG, náhledový obrázek pro sdílení
  `public/og.png` (sociální sítě SVG neumí; zdroj návrhu je
  `vystup/web/og-zdroj.svg`) a screenshot aplikace
  `public/aplikace-openwork.webp` na úvodní stránce (skutečné UI nejde
  věrně nakreslit v SVG).
- Přidávat ilustrační diagramy a schémata. Diagram nasadíme jen tam, kde je
  nezbytně nutný (bez něj se věc nedá vysvětlit) — ne jako dekoraci. Když text
  řekne totéž, diagram vynech. Ověřená potřeba > hezká grafika.
- Vymýšlet si fakta, ceny nebo vlastnosti služeb. Kde ti fakta chybí, napiš
  do textu značku `[DOPLNIT: co]` a pokračuj.

## Technická pravidla webu

- Generátor: **Astro se šablonou Starlight**, obsah v Markdownu, živé tabulky
  z YAML ve `vystup/web/src/data/`. Vzhled neřešíme — bereme Starlight tak, jak je,
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
- **Tematické stránky (`temata/`):** tagy ve frontmatteru (`tagy:`) jsou cesty
  stránek v `temata/` (max. dvě úrovně: kategorie/téma). Každý tag musí mít
  **kvalitně zpracovanou** stránku — povinná šablona: úvod cílený na hledanou
  frázi, „Co zvládne" (odrážky), 2–3 ukázková zadání s dobrými zvyky,
  upozornění, komponenta `<StrankyTematu>` a „Kudy dál". Nejdřív stránka, pak
  tagování — vynucuje `scripts/kontrola-obsahu.mjs` (existence tagu, minimum
  vlastního textu). Témata se nedávají do sidebaru (počítáme se stovkami);
  navigace jde přes štítky pod nadpisy, rozcestník `/temata/` a patičku.
- Odkazy mimo náš web (http/https) vždy `target="_blank"` + `rel="noopener
  noreferrer"`. V Markdownu/MDX to řeší plugin `rehype-external-links`
  (v `astro.config.mjs`); ve vlastních `.astro` komponentách to nastav ručně
  podle vzoru v `Hero.astro`. Interní (root-relativní) odkazy target nemají.

## SEO (projekt stojí na návštěvnosti)

Cílem webu je návštěvnost — bez ní projekt nesplní účel. Piš proto s ohledem
na to, co lidé skutečně hledají, ale nikdy na úkor pravdivosti.

- **Používej vyhledávané termíny:** „lokální AI", „AI zdarma", „AI agenti",
  „AI nad vlastními soubory", „alternativa Claude Cowork", názvy modelů.
  Kde se sráží s pravidlem jednoduché češtiny, vyhrává vyhledávaný termín —
  ale při prvním výskytu ho vysvětli jednou větou.
- **SEO výjimky ze slovníku pojmů:** „lokální AI / lokální modely" **používáme**
  (místo opisu „na vlastním počítači"), protože se to hledá. Vysvětli:
  „běží přímo u vás na počítači". Slovo „suverenita" zůstává zakázané.
- **Každá stránka:** výstižný `<title>` s klíčovým slovem, smysluplný
  `description` ve frontmatteru, jeden jasný nadpis H1, klíčová slova
  i v podnadpisech. Popisky nepřeplňuj — čitelnost pro člověka je přednější.
- Interní prolinkování mezi souvisejícími stránkami (rozcestníky, „viz také").

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
`vystup/web/src/data/*.yaml`) a fakta o produktech. Každý zdroj v hlídači má pole `ucel` —
proč ho sledujeme a co z něj do webu teče. Nový zdroj (např. poskytovatel
modelů) přidávej jen tehdy, když napojíš na konkrétní potřebu.
