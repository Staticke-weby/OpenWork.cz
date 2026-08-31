# OPENWORK.CZ + OPENWORK.SK — Projektový plán

*Verze 2.0 · 31. srpna 2026 · pracovní dokument*
*Změny oproti 1.0: struktura přepsaná pro Astro + Starlight; slovo „suverenita" nahrazeno; boční nabídka pojmenovaná podle tří pilířů.*

---

## 1. Vize a pozice

**Openwork.cz je nezávislý český průvodce prací s AI agenty nad vlastními soubory — pro obyčejné lidi.**

Web vzniká kolem otevřené aplikace OpenWork (openworklabs.com, alternativa ke Claude Cowork), ale jeho skutečným tématem je širší myšlenka: **vlastní model → vlastní výpočet → vlastní data.** OpenWork je vstupní bod; tři pilíře jsou páteř.

### Tři pilíře (úvodní stránka i celý projekt)

1. **Vaše data zůstávají u vás.**
2. **Platíte za to, co spotřebujete — ne za hlavy.** (největší rozdíl proti velkým platformám: společná peněženka pro rodinu i firmu místo licence na osobu)
3. **Nikde nejste zamčení.** (desítky poskytovatelů, přepnutí jedním výběrem)

Boční nabídka webu kopíruje pilíře: sekce **Vaše data** (pilíř 1), **Kolik to stojí** (pilíř 2), **Modely a poskytovatelé** (pilíř 3). Čtenář tak vidí, co se řeší, ne jaký je pojem.

### Rozvedené zásady

1. **Nezávislost na uzavřených platformách.** Doporučujeme podle skutečné hodnoty, ne podle provizí. Přednost mají otevřené modely a otevřená infrastruktura.
2. **Data patří vám.** Vše, co jde udělat na vlastním počítači, ukazujeme na vlastním počítači. Cizí server je volba, ne nutnost.
3. **Peněženka místo licence.** Velké platformy prodávají paušál na osobu bez ohledu na spotřebu; otevřený svět umožňuje společný kredit s vlastním klíčem a stropem útraty pro každého člena. Kdo se ptá jednou týdně, stojí koruny.
4. **Poctivost o kompromisech.** Zdarma často znamená „platíte svými daty". Píšeme to na rovinu, včetně slabin otevřených modelů.
5. **Praktičnost pro Čechy a Slováky.** ARES/ORSR, DPH, datové a elektronické schránky, GDPR, NIS2, MetaCentrum/Devana — obsah, který za nás nikdo v zahraničí neudělá.
6. **Bez drahého předplatného.** Vše ze současných možností AI jde dělat bez prémiových paušálů: otevřené modely + bezplatné úrovně + platba za spotřebu + běh na vlastním počítači. Předplatné kupuje pohodlí, ne schopnosti.
7. **Transparentní financování.** Doporučující odkazy označujeme, žádný sponzorovaný obsah bez štítku, výdělek primárně přes služby a vzdělávání.

### Jazyk webu (redakční zásada)

**Celý web je psaný hezky česky pro obyčejné lidi.** Technický žargon a amerikanismy jen tam, kde je to nezbytné.

- Preferované výrazy: poskytovatel (ne provider), společná peněženka (ne shared billing), platba za spotřebu (ne pay-as-you-go), bezplatná úroveň (ne free tier), běh na vlastním počítači (ne local inference), klíč (ne API key), složka (ne workspace), nastavení (ne settings), **data pod vaší kontrolou / nezávislost na velkých platformách (ne suverenita)**.
- V originále s vysvětlením při prvním výskytu: OpenWork, opencode, Zen, Go, Cortecs, MCP, AGENTS.md, ZDR („nulové uchovávání dat"), GDPR, token.
- Slovníček (/zaciname/slovnicek) je závazný glosář pro celý web i pro překlad do slovenštiny.
- Krátké věty, činný rod, oslovování čtenáře. Žádné marketingové fráze.
- Test čitelnosti: každou stránku pochopí rodič či prarodič autora. Pokud ne, přepsat.
- Výjimka: návody pro pokročilé (vlastní server, zařízení) smějí být hutnější, ale i tam česky.

### Vymezení rozsahu (co web NEpokrývá)

- **Programování a vývojářské nástroje.** Kódovací nástroj opencode zmiňujeme jedinkrát (/zaciname/ekosystem) kvůli vysvětlení vztahu k OpenWork a názvům bran Zen/Go. Běžné „programovací" potřeby obyčejného člověka (skript, makro, úprava souborů) zvládne OpenWork sám.
- Recenze chatbotů a předplatných služeb (jen srovnání cen v sekci Kolik to stojí).
- Obecné zpravodajství o AI — Novinky pokrývají jen to, co se dotýká témat webu.

### Právní vymezení

- Patička každé stránky: *„Openwork.cz je nezávislý český průvodce. Nejsme spojeni s OpenWork Labs, Inc."*
- Vlastní vizuální identita = barva značky ve Starlightu; logo OpenWork Labs nepoužívat.
- Známka: v USA existuje starší registrace OPENWORK nesouvisející firmy; OpenWork Labs (YC 2026) registrovanou EU známku pravděpodobně nemá. **Úkol před spuštěním:** rešerše v TMview (tmview.europa.eu) + ÚPV. Informační užití názvu je v pořádku.
- Subjekt: nezávislá iniciativa / studio (agentura i hobby web obstojí).

### Cílové skupiny (v pořadí priority)

| Skupina | Motivace | Co jim web dává | Výdělek |
|---|---|---|---|
| Malé firmy a OSVČ | úspora času, obavy z GDPR | návody, CZ dovednosti, balíčky | vysoký (služby, kurzy) |
| Profese s mlčenlivostí (advokáti, lékaři, účetní, daňaři) | doložitelné ZDR | tabulka ZDR, audity | nejvyšší |
| Domácnosti | praktická pomoc, soukromí rodiny | scénáře, balíček Domácnost | nízký přímý, vysoký virální |
| Studenti a akademici | nulový rozpočet | bezplatné úrovně, MetaCentrum/Devana | nízký teď, školy platí workshopy |
| IT komunita | vlastní server | technické návody | střední (implementace) |

---

## 2. Struktura webu = boční nabídka Starlightu

Web je jeden Starlight projekt. Obsah leží v `src/content/docs/` (česky, výchozí jazyk, URL bez předpony) a `src/content/docs/sk/` (slovensky, URL `/sk/…`). Boční nabídka se generuje automaticky ze složek (`autogenerate`), pořadí a popisky řídí frontmatter (`sidebar.order`, `sidebar.label`, `sidebar.badge`).

Konvence: `⟳` = živá stránka s pravidelnou revizí (ve Starlightu odznak `Živé` v nabídce + frontmatter `last_verified`); `📦` = stahovatelný balíček.

```
src/content/docs/
│
├── index.mdx                       Úvod — šablona `splash`
│     hero: „Všechno, co dnes AI umí. Bez předplatného a s daty pod vaší kontrolou."
│     tři pilíře jako odstavce · ústřední SVG „licence vs. peněženka"
│     CardGrid: Firma či živnostník · Domácnost · Student · Profese s mlčenlivostí
│     rozhodovací trojice: Go → Cortecs (data nesmí z Evropy) → vlastní počítač (nesmí ze stolu)
│
├── zaciname/                       ZAČÍNÁME
│   ├── co-je-openwork.md           popis aplikace; srovnání s Cowork, Codex, ChatGPT desktop
│   ├── ekosystem.md                „OpenWork, opencode a Zen/Go — jak to spolu souvisí" — jediná
│   │                               zmínka o kódovacím nástroji; SVG: opencode = motor, OpenWork =
│   │                               aplikace, Zen/Go = brány k modelům; věta o hranici webu
│   ├── instalace.md                Steps komponenta; Windows/Mac/Linux v Tabs; bez screenshotů
│   ├── prvni-agent.md              první úloha za 15 minut nad ukázkovou složkou (Steps)
│   ├── slovnicek.md                závazný glosář (viz kap. 1)
│   └── casta-otazky.md           ⟳ FAQ — průběžně z dotazů čtenářů
│
├── vase-data/                      VAŠE DATA (pilíř 1)
│   ├── index.md                    „Kde jsou vaše data, když používáte AI" — úvod do sekce, lidsky
│   ├── kde-bezi-vypocet.md         tři místa: váš počítač · server v Evropě · server ve světě
│   │                               (dřívější „tři úrovně"); co to znamená pro vaše soubory
│   ├── zdr/                        NULOVÉ UCHOVÁVÁNÍ DAT (ZDR) — vlajkový podcelek
│   │   ├── index.md                „netrénujeme na datech" ≠ „neukládáme data" ≠ „kde běží výpočet"
│   │   ├── tabulka.mdx           ⟳ srovnání poskytovatelů z data/zdr-poskytovatele.yaml
│   │   ├── zebrik.md               5 stupňů v praxi: vlastní počítač → vlastní server → evropský
│   │   │                           poskytovatel → smluvní dodatek → běžné API (nepoužívat pro citlivá data)
│   │   ├── smlouvy.md              co chtít ve smlouvě o zpracování, jak ZDR doložit klientovi
│   │   └── kudy-utikaji-data.md    vyhledávání na webu, cizí MCP, synchronizace složky — pasti
│   ├── gdpr-a-nis2.md              co právo skutečně chce; mýty a fakta
│   └── bezpecnost.md               podvržené pokyny v souborech, oprávnění agenta, zálohy, síť
│
├── kolik-to-stoji/                 KOLIK TO STOJÍ (pilíř 2)
│   ├── index.md                  ⟳ VLAJKOVÁ STRÁNKA: co zvládnete za 0 Kč / ~100 Kč / ~500 Kč
│   │                               měsíčně; srovnání s cenou prémiových předplatných
│   ├── spolecna-penezenka.md       jedna peněženka pro rodinu i firmu: Zen workspace = společný
│   │                               kredit, vlastní klíč a strop útraty pro každého; POCTIVĚ: Go je
│   │                               na osobu (dle dokumentace jeden člen pracovního prostoru), ale
│   │                               i tak zlomek ceny paušálu; klíč nesdílet mezi lidmi
│   ├── bezplatne-urovne.mdx      ⟳ tabulka z data/bezplatne-urovne.yaml + návod na skládání
│   │                               úrovní (Groq rychlost · Cerebras denní objem · Zen zdarma
│   │                               v OpenWork · OpenRouter ~30 modelů za jeden klíč jako záloha);
│   │                               výhrady: bezplatné modely se mění, zacházení s daty podle modelu
│   └── kalkulacka.mdx              interaktivní ostrůvek: cizí server vs. vlastní zařízení
│                                   (cena + kWh v Kč vs. tokeny u Go/Cortecs). Poctivě: často
│                                   vyhraje cizí server.
│
├── modely/                         MODELY A POSKYTOVATELÉ (pilíř 3)
│   ├── index.md                    doporučená cesta: OPENCODE GO jako výchozí (nativní pro
│   │                               OpenWork, kurátorovaný katalog, zero-retention, prodej za
│   │                               nákupní cenu; doporučující odkaz označen; poctivě: servery v USA)
│   ├── nejlepsi-pro/               „Nejlepší modely pro…" — stránka = use case, doporučení uvnitř
│   │   ├── kod.md                ⟳   se kvartálně přepisuje; ŽÁDNÉ stránky per model
│   │   ├── cestinu.md            ⟳   (napojeno na vlastní benchmark)
│   │   ├── dlouhe-dokumenty.md   ⟳
│   │   ├── domacnost.md          ⟳   levný a bezpečný výchozí model
│   │   ├── slaby-pocitac.md      ⟳   podle RAM
│   │   ├── citliva-data.md       ⟳   most do vase-data/zdr
│   │   └── zdarma.md             ⟳   bezplatné modely (Zen zdarma + ostatní), výhrada o rotaci
│   ├── na-vlastnim-pocitaci.md     Ollama, LM Studio, llama.cpp; tabulka „co rozjedu na 8/16/32/64 GB"
│   ├── na-vlastnim-serveru.md      vLLM krok za krokem (Steps); pro firmy
│   ├── evropsti-poskytovatele.md ⟳ CORTECS jako doporučený evropský výchozí bod (jeden klíč,
│   │                               kurátorovaný katalog, výpočet výhradně v EU, žádné ukládání
│   │                               pokynů, ceny bez přirážky + 5 % při dobití, smlouva o zpracování);
│   │                               pod tím přímí poskytovatelé (Scaleway, IONOS, STACKIT, Lyceum, Mistral)
│   ├── dalsi-poskytovatele.md    ⟳ OpenRouter jako druhotné doporučení (záloha pro skládání
│   │                               bezplatných úrovní), Zen platba za spotřebu, Groq, Cerebras…
│   └── cestina-benchmark.md      ⟳ vlastní testovací sada češtiny (20–30 úloh) — unikát
│
├── zarizeni/                       ZAŘÍZENÍ PRO AI (fyzický vrchol pilíře 1)
│   ├── index.md                    „tři čísla": paměť × propustnost × software (CUDA/ROCm/Metal)
│   ├── vstupni.md                ⟳ Mac mini, PC s RTX, ojetá 3090 jako levná cesta
│   ├── trida-128-gb.md           ⟳ DGX Spark, Strix Halo, Mac Studio — srovnání
│   ├── pracovni-stanice.md       ⟳ GPU věže, doladění modelů
│   ├── rodinny-server.md         ⟳ provoz 24/7, hluk, teplo, spotřeba — most do domacnost
│   ├── pro-firmy.md                inference server ve firmě = fyzické ZDR; most do firmy/sluzby
│   └── nakup-cz.md               ⟳ dostupnost u českých prodejců, záruka, ceny (letos kolísají)
│
├── prace-se-slozkou/               PRÁCE SE SLOŽKOU (metodika)
│   ├── zaklady.md                  složka jako pracovní prostor, opakování, kontrola
│   ├── struktura-slozek.md         podsložky, pojmenování, vzor inbox/archiv — strom jako `<ul>`
│   ├── agents-md.md                jak psát AGENTS.md: pravidla, zákazy, tón, příklady
│   ├── ceho-se-vyvarovat.md        hesla, rodná čísla, exporty databází; časté chyby
│   └── zalohy.md                   git pro nekodéry; záloha před spuštěním agenta
│
├── dovednosti/                     DOVEDNOSTI PRO ČR (skilly a MCP)
│   ├── index.md                  ⟳ katalog s odkazy na GitHub
│   ├── ares.md                     hledání firmy podle IČO
│   ├── dph.md                      spolehlivost plátce DPH
│   ├── fakturace.md                faktura s českými náležitostmi, ISDOC
│   ├── datove-schranky.md          čtení a podklady
│   └── vlastni-dovednost.md        jak napsat vlastní (Steps) + šablona
│
├── balicky/                        BALÍČKY KE STAŽENÍ (struktura složek + AGENTS.md + README + ukázky)
│   ├── index.md                    anatomie balíčku, jak si upravit vlastní
│   ├── domacnost.md              📦
│   ├── osvc.md                   📦
│   ├── mala-firma.md             📦
│   ├── student.md                📦 + kapitola o poctivém citování
│   ├── ucetni.md                 📦 (kandidát na placený)
│   └── pravnik.md                📦 (kandidát na placený, vázaný na ZDR)
│
├── domacnost/                      PRO DOMÁCNOST
│   ├── index.md                    proč je domácnost nejcitlivější prostředí; model doma
│   ├── scenare.md                  rodinný archiv, termíny (STK, revize), finance, energie, škola
│   └── navody/                     každý scénář samostatně (dlouhý ocas vyhledávání)
│
├── studenti/                       PRO STUDENTY
│   ├── index.md                    „AI za nula korun" — rozcestník; odkaz na kolik-to-stoji/bezplatne-urovne
│   ├── metacentrum.md              vlastní model na MetaCentru přes vLLM — unikát
│   ├── na-notebooku.md             modely podle RAM, realistická očekávání
│   ├── projekty.md                 mini-projekty se zadáním + balíček
│   └── eticky-kodex.md             AI a škola: hranice, citování
│
├── firmy/                          PRO FIRMY (obchodní sekce)
│   ├── index.md                    obchodní argument: NIS2, GDPR, závislost na dodavateli
│   ├── sluzby.md                   implementace, vlastní server, ZDR audit, školení, správa serveru
│   ├── pripadove-studie.md       ⟳
│   └── kontakt.md                  zatím e-mail (mailto:)
│
├── novinky/                        NOVINKY (měsíční přehled) — zásuvný modul starlight-blog,
│   └── 2026-09.md …                nebo prosté stránky po měsících; RSS ze Starlightu
│
└── o-webu/
    ├── proc-tento-web.md           dřívější „manifest": esej, proč web existuje, tři pilíře rozvedené
    ├── zasady.md                   redakční nezávislost, doporučující odkazy, jak aktualizujeme
    ├── zmenovnik.md              ⟳ změny živých tabulek (generuje se ze zmenovniku v YAML)
    ├── pravni.md                   nejsme OpenWork Labs, licence obsahu (CC BY-SA)
    └── podpora.md                  dobrovolná podpora hobby části
```

### Poznámky ke struktuře

- **Dvě živé vlajkové stránky**: `vase-data/zdr/tabulka` a `kolik-to-stoji/bezplatne-urovne`. Na ně se odkazuje a lidé se k nim vracejí. Obě mají viditelné `last_verified` a odkaz na změnovník.
- **Úvod každé sekce (`index.md`)** je psaný pro úplného nováčka a odpovídá na otázku „proč mě to má zajímat" — teprve podstránky jdou do hloubky. Ve Starlightu je to zároveň cílová stránka kliknutí na název sekce.
- **Obsah balíčků žije na GitHubu** (`openwork-cz/balicky`), web odkazuje na poslední vydání; ZIPy se generují z tagů.
- Každý návod končí komponentou `LinkCard` „Související balíček / dovednost / služba".
- Sekce Novinky: pokud zásuvný modul starlight-blog přidá údržbu, stačí prosté stránky po měsících — RSS Starlight umí i tak.

---

## 3. Živá data: co, odkud, jak často

Zásada: **méně živých stránek, ale spolehlivě aktuálních.** Každá má `last_verified`, změnovník a zdroje. Odznak `Živé` v boční nabídce dává čtenáři najevo, že stránku hlídáme.

### 3.1 Tabulka ZDR (`data/zdr-poskytovatele.yaml`)

| Parametr | Hodnota |
|---|---|
| Sloupce | poskytovatel · trénuje na datech? · uchovávání záznamů (dny) · ZDR (výchozí / na vyžádání / smluvně) · kde běží výpočet · smlouva o zpracování · zdroj · ověřeno |
| Zdroje | oficiální stránky o zacházení s daty, smlouvy o zpracování, změnovníky podmínek |
| Frekvence | **měsíčně plná revize** + při oznámení změny |
| Postup | agent (dogfooding, 3.5) stáhne aktuální znění, porovná s uloženou kopií, vyznačí rozdíl → člověk schválí a přepíše YAML |
| Riziko | právní text se špatně strojově vykládá → **schvaluje vždy člověk**; sporné buňky „nejasné" + odkaz |

Referenční řádky od začátku: OpenCode Zen/Go, Cortecs, běh na vlastním počítači (měřítko).

### 3.2 Tabulka bezplatných úrovní (`data/bezplatne-urovne.yaml`)

| Parametr | Hodnota |
|---|---|
| Sloupce | poskytovatel · modely zdarma · limit · karta nutná? · data k tréninku? · trvalá úroveň / jednorázový kredit · zdroj · ověřeno |
| Zdroje | oficiální ceníky a limity; komunitní přehledy jen jako druhý signál |
| Frekvence | **měsíčně** (mění se téměř měsíčně) |
| Postup | stejný postup rozdílů; kvartálně namátkový praktický test 2–3 úrovní |

### 3.3 Modely, poskytovatelé, zařízení

| Stránky | Frekvence | Zdroj |
|---|---|---|
| modely/nejlepsi-pro/* | kvartálně přepis doporučení; adresy stránek se NEMĚNÍ | vlastní testy, katalog Go/Zen, žebříčky (s datem) |
| modely/index (doporučená cesta) | při změně ceníku/katalogu Go, min. kvartálně | opencode.ai |
| modely/cestina-benchmark | kvartálně | vlastní sada 20–30 úloh |
| modely/evropsti-, dalsi-poskytovatele | kvartálně ceny, noví hráči průběžně | oficiální ceníky |
| zarizeni/* | nové zařízení nebo změna ceny (letos kolísají), min. kvartálně | výrobci + komunitní měření s uvedením zdroje |
| kolik-to-stoji/index | měsíčně spolu s bezplatnými úrovněmi | odvozeno z obou tabulek |

Bezplatné modely v Zenu jsou oficiálně „na omezenou dobu" — `nejlepsi-pro/zdarma` to říká na rovinu.

### 3.4 Ostatní

| Obsah | Frekvence |
|---|---|
| novinky/ | měsíčně, pevný den (první pondělí) — rytmus drží newsletter |
| zaciname/instalace, prvni-agent | při nové verzi OpenWork (sledovat vydání na GitHubu different-ai/openwork) |
| zaciname/casta-otazky | průběžně z dotazů |
| balíčky (GitHub) | průběžně, verzované |
| metodika, o-webu | roční revize |

### 3.5 Dogfooding jako proces i marketing

Aktualizace dělá **OpenWork sám**: složka `data-watch/` s AGENTS.md (příloha B), agent měsíčně stáhne podmínky a ceníky, vytvoří přehled rozdílů, člověk schválí. Poté článek *„Jak si openwork.cz hlídá aktuálnost vlastním agentem"*. Složka `data-watch` = další balíček ke stažení.

Stejným způsobem vzniká i sám web: **stavba webu = nultý běh benchmarku češtiny** (GLM-5.3-Flash přes Go); spotřebu zapisovat do `naklady.md` → článek *„Tento web vznikl za předplatné 10 dolarů měsíčně"*.

### 3.6 Kalendář údržby

| Rytmus | Úkony | Čas |
|---|---|---|
| Měsíčně | ZDR tabulka, bezplatné úrovně, kolik-to-stoji, novinky + newsletter, kontrola nové verze OpenWork, fronta nepřeložených SK rozdílů | 5–10 h |
| Kvartálně | nejlepsi-pro, benchmark češtiny, ceníky, zařízení, praktický test bezplatných úrovní | 8–16 h |
| Ročně | metodika, právní texty | 2–3 dny |
| Průběžně | zásadní změny (nový model, změna podmínek, nová verze OpenWork) | podle události |

---

## 4. Obsahová strategie a vyhledávání

- **Dlouhý ocas v češtině je prázdný.** „AI nad vlastními soubory", „AI česky na vlastním počítači", „nulové uchovávání dat", „AI agent GDPR" nemají kvalitní českou odpověď. Každý scénář z domacnost/navody a každá dovednost = samostatná stránka.
- **„Bez předplatného" jako brána pro širokou veřejnost.** Dotazy „AI zdarma", „alternativa k ChatGPT zdarma", „kolik stojí AI" mají obrovský objem a mizernou kvalitu odpovědí; `kolik-to-stoji/` je vstup pro laiky, odkud interní odkazy vedou dál. Nejsdílenější formát („co zvládnete za 0 Kč").
- **Srovnávací stránky** („OpenWork vs. Claude Cowork", „Ollama vs. LM Studio", „evropský poskytovatel vs. OpenRouter") — nejsilnější organický kanál.
- **Formát:** první odstavec = odpověď; pak postup (Steps); na konci LinkCard. Starlight dává obsah stránky (TOC) automaticky, takže dlouhé návody jsou v pořádku.
- **Důvěryhodnost pro vyhledávače:** datované revize, změnovník, autoři, zdroje u živých tabulek.
- **Distribuce:** newsletter (měsíční = novinky), RSS, česká komunita (diskuse, LinkedIn, setkání), GitHub balíčků jako druhý vstup.

---

## 5. Výdělek (v souladu se zásadami)

### Fáze A — od spuštění
- **Doporučující odkaz OpenCode Go** — hlavní doporučovaný poskytovatel. Podmínky: viditelný štítek, doporučení stojí na skutečné hodnotě (stránka uvádí servery v USA a alternativy), zásada v o-webu/zasady.
- **Služby přes firmy/:** implementace OpenWork, vlastní server, „AI s daty pod kontrolou" jako balíček, školení. Web = přívod poptávek.
- **Dobrovolná podpora** hobby části.
- Jiné doporučující odkazy jen u infrastruktury (evropští poskytovatelé, VPS, pronájem GPU, zařízení u českých prodejců). Žádné u uzavřených platforem a chatbotů.

### Fáze B — po vybudování návštěvnosti (6–12 měsíců)
- **Placené balíčky** (účetní, právník) — jednorázově stovky Kč; základní navždy zdarma.
- **Kurz** „AI agent nad vašimi soubory — bez závislosti na velkých platformách".
- **Workshopy pro školy** (platí školy, ne studenti) a firmy.
- **Partner newsletteru** — jen firmy slučitelné se zásadami, max. 1 místo, označené.

### Fáze C — rozšíření (12+ měsíců)
- **ZDR audit** jako produkt pro profese s mlčenlivostí. Nejvyšší marže, nejčistší zásady.
- **Zařízení na klíč:** návrh, dodání a nasazení inference serveru (firma i „rodinná AI krabice"). Zákazník kupuje vlastnictví.
- **Správa serveru** OpenWork/vLLM pro firmy (měsíční paušál).
- **Partnerství s OpenWork Labs** (Team 10 $/místo, Enterprise) — oslovit; nesmí ohnout redakční nezávislost. Případně partnerský program Cortecs — zeptat se.

### Čeho se vyvarovat
- Prodej tokenů/kreditů velkých uzavřených labů. Skryté recenze. Placený přístup k obsahu o bezpečnosti a ZDR (to je mise webu; výdělek dělají služby).

---

## 6. Vzhled a technika: Starlight bez obrázků

### Proč Starlight
Vzhled neřešíme. Starlight (oficiální dokumentační šablona Astra) dává boční nabídku, vyhledávání bez serveru, tmavý/světlý režim, obsah stránky, řádek „Aktualizováno:", rámečky, dlaždice, úvodní stránku typu splash a vícejazyčnost s českými i slovenskými texty rozhraní — hotové. Jediná úprava vzhledu: `src/styles/custom.css` s barvou značky a systémovým písmem.

### Proč žádné obrázky
Snímky obrazovky zastarávají s každou verzí aplikace, fotky nic nesdělují, ilustrace z fotobank jdou proti zásadám. Veškerá grafika je vložená, verzovaná v gitu, opravitelná v textovém editoru, tmavý režim zdarma.

### Stavební prvky (co používat místo obrázků)

| Potřeba | Řešení ve Starlightu |
|---|---|
| Schéma, tok dat, žebřík ZDR, ekosystém, **ústřední „licence vs. peněženka"** | vložené SVG s `<title>`/`<desc>`, barvy přes proměnné Starlightu (`var(--sl-color-…)`) |
| Srovnání (ZDR, bezplatné úrovně, zařízení, RAM) | Astro komponenta `TabulkaZDat.astro`, která z YAML vykreslí HTML tabulku s hlavičkou, `last_verified` a odkazem na změnovník; řazení lehkým JS, bez JS stále čitelná |
| Postupy, návody | `<Steps>` |
| Varianty podle systému (Windows/Mac/Linux) nebo podle role | `<Tabs>` |
| Poctivé výhrady, tipy, varování | `:::note`, `:::tip`, `:::caution`, `:::danger` |
| Rozcestníky, „související" | `<CardGrid>`, `<Card>`, `<LinkCard>` |
| Strom složek | `<FileTree>` (vestavěné, čistý text) |
| Příkazy, AGENTS.md ukázky | bloky kódu s tlačítkem kopírovat (vestavěné) |
| Kalkulačky (peněženka vs. paušál, cizí server vs. zařízení, RAM) | malý ostrůvek JS jako Astro komponenta; bez JS zobrazí tabulku |
| Živé stránky v nabídce | `sidebar.badge: { text: 'Živé', variant: 'tip' }` |
| Ikony | jen vestavěná sada Starlightu (`<Icon>`) |

Pravidlo: každé schéma je čitelné i jako text. Výjimky z „žádné obrázky": favicon (SVG) a automaticky generované náhledy pro sdílení na sítích (ze šablony při sestavení).

### Technický stav (rozhodnuto)

**Start: Astro + Starlight + Markdown + levný hosting + FTP.**

| Vrstva | Volba | Poznámka |
|---|---|---|
| Generátor | Astro + Starlight | statický výstup `dist/`; JS jen v ostrůvcích |
| Obsah | Markdown/MDX v `src/content/docs/`; frontmatter (příloha A) | git od prvního dne — historie = změnovník zdarma |
| Živá data | `src/data/*.yaml`, komponenta `TabulkaZDat` | rozdíly čitelné, připraveno na PR od agenta |
| Jazyky | Starlight i18n: `root` = cs, `sk` = `/sk/`; vestavěné texty rozhraní cs i sk | chybějící překlad → český obsah + upozornění „Tento obsah zatím není dostupný ve vašem jazyce" = nouzový banner z kap. 11 zdarma |
| Domény | start: openwork.cz + openwork.sk přesměruje na openwork.cz/sk/ (hreflang funguje) | dva samostatné buildy s prohozeným výchozím jazykem až bude důvod (~1 h) |
| Vyhledávání | Pagefind (vestavěné, statické) | funguje na jakémkoli hostingu |
| Sestavení | lokálně: `npm run dev` pro psaní, `npm run build` pro nasazení | žádný build server |
| Nasazení | FTP synchronizace celé `dist/` (WinSCP/FileZilla) | vždy celá složka (hashované soubory); ~1× měsíčně |
| HTTPS | Let's Encrypt na hostingu | hned |
| Formulář | `mailto:` | zatím stačí |
| Analytika | self-hosted Plausible/Umami nebo nic | může počkat |
| Newsletter | Listmonk nebo evropská služba | s Vlnou 1 |
| Balíčky | GitHub `openwork-cz`, ZIPy z tagů | kap. 2 |

**Růstová cesta** (každý krok ~1 h, nic se nepředělává): FTP ručně → skript sestav-a-nahraj → GitHub Actions (odemkne PR od agenta z 3.5) → případně vlastní server.

Frontmatter `last_verified` využít pro varování při sestavení, pokud živá stránka přesáhne 45 dní (metrika kap. 10).

---

## 7. Harmonogram

### Vlna 1 — MVP (měsíc 1–2): „užitečný od prvního dne"
1. `index.mdx` (splash, tři pilíře, SVG, rozcestník) + `o-webu/proc-tento-web`
2. `zaciname/` kompletně (co-je-openwork, ekosystem, instalace, prvni-agent, slovnicek)
3. `vase-data/index`, `kde-bezi-vypocet`, `zdr/index`, `zdr/tabulka` (6–8 řádků vč. Zen/Go, Cortecs, vlastní počítač)
4. `kolik-to-stoji/index`, `spolecna-penezenka`, `bezplatne-urovne`
5. `modely/index` (Go) + `nejlepsi-pro/kod`, `cestinu`, `domacnost`
6. `prace-se-slozkou/zaklady`, `struktura-slozek`, `agents-md`
7. Balíčky **Domácnost** a **OSVČ** (GitHub)
8. `o-webu/` kompletně; newsletter + RSS
9. SK: struktura + index + zaciname přeložené

*Hotovo, když návštěvník každé skupiny najde do 3 kliknutí něco okamžitě použitelného.*

### Vlna 2 — hloubka (měsíc 3–5)
1. `modely/` zbytek (nejlepsi-pro, na-vlastnim-pocitaci, evropsti-, dalsi-poskytovatele)
2. `vase-data/zdr/` celý (zebrik, smlouvy, kudy-utikaji-data), gdpr-a-nis2, bezpecnost
3. `dovednosti/`: ARES + DPH (GitHub) + vlastni-dovednost; SK: ORSR + IČ DPH
4. `domacnost/` + 5 návodů
5. `studenti/` vč. metacentrum; SK: Devana
6. Balíčky Student a Malá firma
7. `firmy/` + první poptávkový kanál
8. Dogfooding `data-watch` + článek
9. SK: překladová vrstva dotažená na úroveň CZ

### Vlna 3 — autorita a byznys (měsíc 6–12)
1. `modely/cestina-benchmark` — unikát, PR magnet
2. ZDR audit jako produkt, případové studie
3. Placené balíčky + kurz
4. `modely/na-vlastnim-serveru`, MetaCentrum pokročile
5. `zarizeni/` kompletně + `kolik-to-stoji/kalkulacka` (druhý PR magnet)
6. Oslovení OpenWork Labs, Cortecs
7. Workshopy

---

## 8. Možnosti rozšíření (zásobník)

- Komunita (Matrix/Discord); kurátorovaný katalog cizích balíčků a dovedností.
- EN mutace vybraných stránek (ZDR tabulka, benchmark) — Starlight třetí jazyk = složka `en/`.
- Zvuková verze novinek (15 min měsíčně).
- Další kalkulačky (náklady tokenů v Kč, generátor AGENTS.md z formuláře).
- Šablony směrnic pro obce a školy → workshopy.
- Odznak „Data pod kontrolou" pro firmy po ZDR auditu.
- Roční přehled „Stav otevřené AI v ČR a SR".
- Spolupráce s fakultami; doporučené pokyny pro češtinu podle benchmarku.
- Deník provozu jedné reálné krabice (např. Strix Halo) jako rodinného serveru — vlastní naměřená data.

---

## 9. Rizika

| Riziko | Pravděpodobnost | Dopad | Mitigace |
|---|---|---|---|
| OpenWork Labs změní směr / zanikne | střední | vysoký | páteří jsou tři pilíře, ne aplikace; sekce vase-data, kolik-to-stoji, modely, prace-se-slozkou platí i pro jiné nástroje |
| Živé tabulky zastarají | vysoká bez procesu | vysoký | kalendář 3.6, dogfooding, viditelné `last_verified`, méně řádků, ale ověřených |
| Právní výtka ke jménu | nízká | střední | patička, vlastní vizuál, rešerše TMview; podtitul unese i přejmenování |
| Špatný výklad podmínek ZDR | střední | vysoký | zdroje u každé buňky, „není právní poradenství", schvaluje člověk |
| Vyhoření na údržbě | střední | vysoký | automatizace rozdílů, limit živých stránek, měsíční rytmus |
| SK verze zaostane | střední | střední | tři vrstvy (kap. 11), překlad agentem, vestavěné upozornění Starlightu na nepřeložený obsah |
| Dokumentační vzhled působí „technicky" | nízká–střední | střední | úvodní stránka splash, úvod každé sekce pro nováčka, jazyk podle kap. 1; boční nabídka pojmenovaná podle toho, co čtenář řeší |
| Konkurenční CZ web | nízká–střední | střední | rychlost + unikáty (benchmark, MetaCentrum, ZDR tabulka, kalkulačky) |

---

## 10. Metriky

| Horizont | Metrika | Cíl |
|---|---|---|
| 3 měsíce | návštěvy z vyhledávání | 1–2 tis./měs. |
| 3 měsíce | odběratelé newsletteru | 150+ |
| 6 měsíců | stažení balíčků | 500+ |
| 6 měsíců | odkazy na ZDR / bezplatné úrovně | 20+ domén |
| 6 měsíců | první placená zakázka | ≥ 1 |
| 12 měsíců | opakovaný příjem (server/kurz/servis) | pokrytí nákladů + odměna za údržbu |
| průběžně | živé stránky s `last_verified` < 45 dní | 100 % |
| průběžně | SK stránky bez upozornění na nepřeložený obsah | ≥ 90 % sdíleného jádra |

---

## 11. Slovenská verze — openwork.sk

**Zásada: jedna pravda, dva výstupy.** Souběžně s CZ, bez dvojnásobné údržby.

### 11.1 Tři vrstvy obsahu

| Vrstva | Co | Údržba |
|---|---|---|
| **Sdílené jádro** (~70–80 %) | metodika, modely, zařízení, ZDR, kolik-to-stoji, zaciname | píše se jednou česky; CZ je zdrojová pravda |
| **Překladová vrstva** | SK mutace jádra v `src/content/docs/sk/` | agent překládá (CZ→SK je pro model spolehlivé), člověk reviduje rozdíly; frontmatter `source_hash` odhalí zaostalé stránky při sestavení |
| **Národní specifika** | vlastní stránky (11.2) | samostatně per země; nepřekládají se křížem |

Živé tabulky v jednom YAML → obě jazykové verze. Ceny: CZ přepočet do Kč s kurzem a datem, SK v EUR nativně (bez kurzové údržby).

### 11.2 Národní specifika

| Oblast | openwork.cz | openwork.sk |
|---|---|---|
| Registr firem (dovednost) | ARES | ORSR / RPO |
| DPH (dovednost) | spolehlivost plátce (FS ČR) | zoznam platiteľov IČ DPH (FS SR) |
| Úřední komunikace | datové schránky | elektronické schránky na slovensko.sk |
| Fakturace | české náležitosti, ISDOC | slovenské náležitosti, e-faktúra |
| Studenti — výpočet | MetaCentrum | NSCC — Devana (ověřit podmínky pro studenty) |
| Zařízení — nákup | zarizeni/nakup-cz | zarizeni/nakup-sk |
| Právo | česká transpozice NIS2, ÚOOÚ | slovenská (zákon o KB), ÚOOÚ SR |
| Balíčky | CZ šablony | SK varianty OSVČ / Malá firma (Domácnost, Student ~90 % sdílené) |
| firmy/ | CZ trh, Kč | SK trh, EUR; služby na dálku z ČR |

### 11.3 Technika ve Starlightu
- `locales: { root: { lang: 'cs' }, sk: { lang: 'sk' } }`; vestavěné texty rozhraní pro obě.
- Chybějící SK stránka → automaticky český obsah s upozorněním (nouzový banner zdarma).
- hreflang cs-CZ ↔ sk-SK generuje Starlight z i18n; národní specifika bez páru.
- Start: openwork.sk přesměruje na openwork.cz/sk/; později dva buildy.

### 11.4 Proces
- Stránka sdíleného jádra není hotová bez SK mutace. Vlny platí pro obě verze; vícepráce +15–25 %.
- Národní specifika se párují po vlnách (ARES↔ORSR, MetaCentrum↔Devana).
- Měsíčně +1–2 h na frontu nepřeložených rozdílů. Newsletter zpočátku společný.
- Jazyková zásada z kap. 1 platí i pro slovenštinu: pekne po slovensky pre obyčajných ľudí; glosář ze slovníčku je součástí pokynu překladovému agentovi.

### 11.5 Byznys
- SK služby na dálku z ČR; EUR fakturace. Doporučující odkazy beze změny; Cortecs pro SK díky EUR ještě přímočařejší. Dva trhy zvyšují hodnotu pro partnerství s OpenWork Labs.

### 11.6 Riziko
- SK zaostane → `source_hash` při sestavení + vestavěné upozornění Starlightu; strojový překlad pustí chybu → lidská revize + glosář; chybějící lokální znalost → jen ověřitelná fakta, „našli ste chybu?" na SK stránkách.

---

## Příloha A — frontmatter živé stránky (Starlight)

```yaml
---
title: "Nulové uchovávání dat — srovnání poskytovatelů"
description: "Kdo trénuje na vašich datech, kdo je uchovává a kde běží výpočet."
lastUpdated: 2026-08-30          # Starlight zobrazí „Aktualizováno:"
sidebar:
  order: 2
  badge:
    text: Živé
    variant: tip
# vlastní pole (rozšíření schématu v content.config.ts):
last_verified: 2026-08-30
review_cadence: monthly
data_source: zdr-poskytovatele   # klíč do src/data/
disclaimer: legal
source_hash: ~                   # jen u SK překladů: hash CZ originálu
---
```

## Příloha B — AGENTS.md pro složku data-watch

```markdown
# AGENTS.md — data-watch

Účel: měsíční kontrola aktuálnosti dat na openwork.cz.

Smíš: stahovat veřejné stránky poskytovatelů ze sources.yaml, porovnávat je
s kopiemi ve snapshots/, zapisovat přehled rozdílů do reports/RRRR-MM.md.

Nesmíš: měnit soubory mimo tuto složku, odesílat data třetím stranám,
vykládat právní text jako závěr — pouze cituj změněné pasáže.

Výstup: reports/RRRR-MM.md: poskytovatel → změněno ano/ne → citace změny →
odkaz na zdroj. Konečné rozhodnutí dělá člověk.
```

## Příloha C — komponenta TabulkaZDat (náčrt)

```astro
---
// src/components/TabulkaZDat.astro
import data from '../data/index.ts';           // načte všechny YAML podle klíče
const { zdroj } = Astro.props;                  // např. "zdr-poskytovatele"
const t = data[zdroj];
---
<p class="overeno">Naposledy ověřeno: {t.last_verified} ·
  <a href="/o-webu/zmenovnik/#{zdroj}">změny</a></p>
<table>
  <thead><tr>{t.sloupce.map(s => <th>{t.popisky[s]}</th>)}</tr></thead>
  <tbody>{t.radky.map(r => <tr>{t.sloupce.map(s => <td>{r[s]}</td>)}</tr>)}</tbody>
</table>
```
Použití v MDX: `<TabulkaZDat zdroj="zdr-poskytovatele" />`. Popisky sloupců jsou v YAML per jazyk, aby SK verze nevyžadovala druhý datový soubor.
