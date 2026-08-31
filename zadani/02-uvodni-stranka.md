# Zadání 2 — Úvodní stránka

Cíl: napsat text úvodní stránky openwork.cz (šablona Starlightu `splash`,
hlavní věta do bloku `hero`) a vytvořit její ústřední SVG.
Toto je výkladní skříň celého webu — jazykové pravidlo z AGENTS.md tu platí
dvojnásob.

## Obsah stránky (v tomto pořadí)

1. **Hlavní věta (claim):**
   „Všechno, co dnes AI umí. Bez předplatného a s daty pod vaší kontrolou."
   Pod ní jedna věta pro úplného nováčka: co tu najde a pro koho to je.

2. **Tři pilíře** — každý jako krátký odstavec (2–4 věty), ne odrážky:
   - **Vaše data zůstávají u vás.** Pracujete nad vlastní složkou souborů.
     Co jde udělat na vlastním počítači, ukazujeme na vlastním počítači;
     cizí server je volba, ne nutnost.
   - **Platíte za to, co spotřebujete — ne za hlavy.** Největší rozdíl proti
     velkým platformám: místo paušálu za každého člověka jedna společná
     peněženka pro rodinu nebo firmu. Každý má svůj klíč a svůj strop útraty;
     kdo se ptá jednou týdně, stojí koruny.
   - **Nikde nejste zamčení.** Aplikace OpenWork umí desítky poskytovatelů
     modelů. Když jeden zdraží nebo se nehodí, přepnete jedním výběrem —
     soubory, návyky i nastavení vám zůstanou.

3. **Ústřední SVG diagram „licence vs. peněženka"** mezi pilířem 2 a 3:
   - Levá polovina: pět postaviček, u každé cedulka s paušálem, součet dole.
   - Pravá polovina: pět postaviček kolem jedné společné peněženky, od každé
     postavičky vede vlastní klíč, u peněženky jeden malý součet.
   - Postavičky jako jednoduché siluety z kruhu a oblouku, žádné tváře.
   - Text v SVG česky, barvy výhradně přes CSS proměnné, prvek `<title>`
     a `<desc>` s popisem pro čtečky. Musí být čitelné na šířce mobilu.

4. **Rozcestník podle čtenáře** — čtyři dlaždice pomocí komponent
   Starlightu `CardGrid` a `Card` (ikony z vestavěné sady, ne obrázky):
   Firma či živnostník · Domácnost · Student · Profese s mlčenlivostí.
   Každá dlaždice: oslovení jednou větou + odkaz (zatím na podkladové stránky: firmy → kolik-to-stoji, domácnost → vase-data,
   student → kolik-to-stoji/bezplatne-urovne, mlčenlivost → vase-data/zdr).

5. **Rozhodovací trojice** jako jedna věta s odkazy:
   „Začněte s Go, sáhněte po Cortecs, když data nesmí opustit Evropu,
   a po vlastním počítači, když nesmí opustit váš stůl."

6. **Závěr:** dvě věty o tom, kdo web dělá (nezávislá iniciativa) a výzva
   k odběru novinek. Bez nátlaku.

## Kontrola

- Projdi text podle zadani/03-kontrola-cestiny.md a oprav, co neprojde.
- SVG zkontroluj v sestavené stránce ve světlém i tmavém režimu.
- Do poznamky-agenta.md napiš dvě alternativy hlavní věty — vybere člověk.
