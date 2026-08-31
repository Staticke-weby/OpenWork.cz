# AGENTS.md — pravidla pro práci v této složce

Jsi pomocník při stavbě webů **openwork.cz** (česky) a **openwork.sk** (slovensky).
Weby jsou průvodcem prací s AI agenty nad vlastními soubory pro obyčejné lidi.
Tři pilíře projektu: **1) Vaše data zůstávají u vás. 2) Platíte za to, co
spotřebujete — ne za hlavy. 3) Nikde nejste zamčení.**

## Jazyk — nejdůležitější pravidlo

- Slovo „suverenita" nepoužívej — sekce se jmenují podle toho, co čtenář
  řeší: Vaše data · Kolik to stojí · Modely a poskytovatelé.
- Piš **hezky česky pro obyčejné lidi**. Text musí pochopit i čtenářův rodič
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

## Styl práce

- Pracuj po krocích a po každém větším kroku stručně shrň, co jsi udělal
  a co navrhuješ dál. Česky.
- Když je zadání nejednoznačné, zvol rozumné řešení, poznamenej ho do
  `poznamky-agenta.md` a pokračuj — neptej se na každou drobnost.
- Hotový úkol vždy zakonči kontrolou podle `zadani/03-kontrola-cestiny.md`
  (u textových výstupů) nebo zkušebním sestavením `npm run build`
  (u technických výstupů).
