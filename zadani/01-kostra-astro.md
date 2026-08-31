# Zadání 1 — Kostra webu (Astro)

Cíl: ve složce `vystup/web/` založit funkční kostru webu, která se sestaví
příkazem `npm run build` a dá se rovnou nahrát na běžný hosting.

## Požadavky

1. **Projekt Astro se šablonou Starlight** (`npm create astro@latest -- --template starlight`).
   Žádný vlastní design — použij vestavěný vzhled Starlightu. Jediná
   úprava vzhledu: soubor `src/styles/custom.css` s barvou značky
   (přes proměnné Starlightu) a systémovým písmem.
   Jazyky přes vestavěnou i18n Starlightu: čeština jako výchozí (root, `lang: cs`),
   slovenština jako `sk` (`/sk/`). Zapni vestavěné české a slovenské
   texty rozhraní. Slovenskou větev zatím jen založ s jednou ukázkovou
   stránkou — překlady přijdou v pozdějším úkolu; Starlight u chybějících
   překladů sám zobrazí český obsah s upozorněním, to je žádoucí.

2. **Stránky první vlny (česky), zatím jako podklady s nadpisem, osnovou
   a značkami [DOPLNIT].** Složky = sekce boční nabídky (autogenerate),
   popisky sekcí česky podle názvů v závorkách:
   - `index.mdx` — úvod (šablona `splash`, naplní se v zadání 2)
   - `zaciname/` (Začínáme): co-je-openwork, ekosystem, instalace, prvni-agent,
     slovnicek (obsah převezmi ze slovnicek.md v této složce), casta-otazky
   - `vase-data/` (Vaše data): index, kde-bezi-vypocet, `zdr/` (index, tabulka.mdx),
     gdpr-a-nis2, bezpecnost
   - `kolik-to-stoji/` (Kolik to stojí): index, spolecna-penezenka, bezplatne-urovne.mdx
   - `modely/` (Modely a poskytovatelé): index, `nejlepsi-pro/` (kod, cestinu, domacnost)
   - `prace-se-slozkou/` (Práce se složkou): zaklady, struktura-slozek, agents-md
   - `o-webu/` (O webu): proc-tento-web, zasady, zmenovnik, pravni
   Slovo „suverenita" se na webu nepoužívá — viz slovnicek.md.

3. **Šablona stránky:** použij výchozí rozvržení Starlightu. Zapni volbu
   `lastUpdated` (řádek „Aktualizováno:"). Boční nabídku (sidebar) nastav
   podle sekcí ze seznamu výše s českými popisky. Do patičky přidej
   (komponentou Footer, ne úpravou šablony) větu:
   „Openwork.cz je nezávislý český průvodce. Nejsme spojeni s OpenWork Labs, Inc."
   a odkaz na zásady. Úvodní stránka použije šablonu `splash`
   (naplní se v zadání 2).

4. **Živé tabulky:** vytvoř komponentu `src/components/TabulkaZDat.astro`,
   která z YAML v `src/data/` vykreslí HTML tabulku (sloupce a české popisky
   podle YAML), nad ní řádek „Naposledy ověřeno: …" a odkaz na změnovník.
   Zkopíruj `data/zdr-poskytovatele.yaml` a `data/bezplatne-urovne.yaml`
   do `src/data/` a použij komponentu na stránkách `vase-data/zdr/tabulka.mdx`
   a `kolik-to-stoji/bezplatne-urovne.mdx`. Živé stránky označ v nabídce
   odznakem `sidebar.badge` s textem „Živé".

5. **Vzhled:** nic navíc nad Starlight. Pro poctivé výhrady používej
   vestavěné rámečky (`:::note`, `:::tip`, `:::caution`). Ikony jen
   z vestavěné sady Starlightu. Žádné obrázky (viz AGENTS.md).

6. **Kontrola:** `npm run build` musí proběhnout bez chyb. Do
   `vystup/JAK-NAHRAT.md` napiš tři kroky, jak složku `dist/` nahrát
   přes FTP na hosting (pro laika).

## Čeho se vyvarovat

- Nepřidávej stránky nad rámec seznamu — struktura poroste podle plánu.
- Nepiš finální texty stránek (kromě názvů a osnov) — texty jsou zadání 2 a další.
- Žádné ukázkové obrázky, ikonové sady ani webfonty ze zahraničních serverů.
