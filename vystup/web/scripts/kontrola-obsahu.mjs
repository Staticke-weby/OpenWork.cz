// Kontrola konzistence obsahu. Spouští se před sestavením (npm run build)
// i samostatně (npm run check). Když najde nesoulad, build spadne.
//
// Co hlídá:
// 1. Názvy modelů GLM — každý výskyt „GLM …" v obsahu musí být model
//    z katalogu (modely-eu.yaml) nebo z ceníku poskytovatele; doporučený model
//    (konstanty.yaml) v evropském katalogu být musí.
// 2. V textu stránek nesmí zůstat ruční věta „Naposledy ověřeno/overené" —
//    datum se zobrazuje z frontmatteru `last_verified` (PageTitle.astro).
// 3. Stáří `last_verified` v živých datech (src/data/*.yaml) — jen varování.
// 4. Poskytovatelé (poskytovatele.yaml) a evropské modely (modely-eu.yaml):
//    každý má stránku CZ i SK, štítek v bočním menu odpovídá hodnocení
//    v datech a odkazy na modely v ceníku vedou na existující model.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';

const koren = fileURLToPath(new URL('..', import.meta.url));
const slozkaObsahu = join(koren, 'src', 'content', 'docs');
const slozkaDat = join(koren, 'src', 'data');

const konstanty = load(readFileSync(join(slozkaDat, 'konstanty.yaml'), 'utf8'));
const model = konstanty.doporuceny_model;
if (!model) {
  console.error('kontrola-obsahu: v konstanty.yaml chybí doporuceny_model.');
  process.exit(1);
}

const dataPoskytovatelu = load(readFileSync(join(slozkaDat, 'poskytovatele.yaml'), 'utf8'));
const dataModeluEu = load(readFileSync(join(slozkaDat, 'modely-eu.yaml'), 'utf8'));
const poskytovatele = dataPoskytovatelu.poskytovatele ?? [];
const modelyEu = dataModeluEu.modely ?? [];

// Známé názvy GLM: katalog (modely-eu.yaml) + volné názvy v ceníkách poskytovatelů.
const znameGlm = new Set(
  [...modelyEu.map((m) => m.nazev), ...poskytovatele.flatMap((p) => (p.modely ?? []).map((c) => c.model))]
    .filter((n) => typeof n === 'string' && n.startsWith('GLM'))
);
const VARIANTY_GLM = new Set(['Flash', 'Air', 'Turbo', 'Lite', 'Pro', 'Mini', 'Max', 'Plus']);

function soubory(slozka) {
  const vysledek = [];
  for (const nazev of readdirSync(slozka)) {
    const cesta = join(slozka, nazev);
    if (statSync(cesta).isDirectory()) vysledek.push(...soubory(cesta));
    else if (/\.(md|mdx)$/.test(nazev)) vysledek.push(cesta);
  }
  return vysledek;
}

const chyby = [];

for (const cesta of soubory(slozkaObsahu)) {
  const text = readFileSync(cesta, 'utf8');
  const kratka = relative(koren, cesta);

  // 1. Název modelu: „GLM" + verze + případné slovo (varianta). Musí jít
  // o model z katalogu — zachytí zastaralé názvy jako „GLM 5.1 Flash".
  // Zalomení řádku uprostřed názvu je v Markdownu v pořádku — normalizujeme.
  for (const shoda of text.matchAll(/GLM\s+\d[\d.]*\d(?:\s+[A-Za-z][\w-]*)?/g)) {
    const nalezeno = shoda[0].replace(/\s+/g, ' ');
    const slova = nalezeno.split(' ');
    const bezVarianty = slova.slice(0, 2).join(' ');
    const varianta = slova[2];
    const ok =
      znameGlm.has(nalezeno) ||
      (varianta !== undefined && !VARIANTY_GLM.has(varianta) && znameGlm.has(bezVarianty)) ||
      (varianta === undefined && znameGlm.has(bezVarianty));
    if (!ok) {
      chyby.push(`${kratka}: „${nalezeno}" není model z katalogu (modely-eu.yaml) — zastaralý název?`);
    }
  }

  // 2. Ruční věta s datem ověření (mimo frontmatter klíč last_verified).
  if (/Naposledy (ověřeno|overené)/.test(text)) {
    chyby.push(`${kratka}: obsahuje ruční větu „Naposledy ověřeno/overené" — datum patří jen do frontmatteru last_verified.`);
  }
}

// 3. Tematické stránky (tagy). Každý tag ve frontmatteru musí mít kvalitní
//    stránku v temata/ (CZ i SK zrcadlo) — viz šablona v AGENTS.md.
const pocetOdkazu = new Map(); // tag -> počet CZ článků, které na něj odkazují
for (const cesta of soubory(slozkaObsahu)) {
  const text = readFileSync(cesta, 'utf8');
  const kratka = relative(koren, cesta).replace(/\\/g, '/');
  const shodaTagy = text.match(/^tagy:\s*\[([^\]]*)\]/m);
  if (!shodaTagy) continue;
  const tagy = shodaTagy[1].split(',').map((t) => t.trim()).filter(Boolean);
  const jeSk = kratka.includes('/docs/sk/');
  for (const tag of tagy) {
    const cil = join(slozkaObsahu, ...(jeSk ? ['sk'] : []), 'temata', ...tag.split('/'));
    const existuje = ['.md', '.mdx'].some((p) => {
      try { return statSync(cil + p).isFile(); } catch { return false; }
    });
    if (!existuje) {
      chyby.push(`${kratka}: tag „${tag}" nemá stránku v temata/ — nejdřív napiš kvalitní tematickou stránku, pak taguj.`);
    }
    if (!jeSk) pocetOdkazu.set(tag, (pocetOdkazu.get(tag) ?? 0) + 1);
  }
}

// Kvalita tematických stránek: dost vlastního textu (ne jen výpis odkazů).
const slozkaTemat = join(slozkaObsahu, 'temata');
try {
  for (const cesta of soubory(slozkaTemat)) {
    const kratka = relative(koren, cesta).replace(/\\/g, '/');
    const jeRozcestnik = /temata[\\/]index\.mdx?$/.test(cesta);
    const telo = readFileSync(cesta, 'utf8')
      .replace(/^---[\s\S]*?---/, '')
      .replace(/^import .*$/gm, '')
      .replace(/<[^>]+>/g, '');
    const minimum = jeRozcestnik ? 300 : 900;
    if (telo.replace(/\s+/g, ' ').trim().length < minimum) {
      chyby.push(`${kratka}: tematická stránka má míň než ${minimum} znaků vlastního textu — každý tag musí být kvalitně zpracovaný (šablona v AGENTS.md).`);
    }
  }
} catch { /* složka temat ještě nemusí existovat */ }

// Varování: téma, na které odkazuje méně než 2 články (kromě kategorií).
for (const [tag, pocet] of pocetOdkazu) {
  if (tag.includes('/') && pocet < 2) {
    console.warn(`kontrola-obsahu: VAROVÁNÍ — téma „${tag}" má jen ${pocet} otagovaný článek; ať má výpis smysl, otaguj aspoň dva.`);
  }
}

// 4. Poskytovatelé a evropské modely: stránky CZ + SK, štítek v menu, odkazy.
if (!modelyEu.some((m) => m.nazev === model)) {
  chyby.push(`src/data/modely-eu.yaml: doporučený model „${model}" (konstanty.yaml) v katalogu chybí.`);
}
const STITKY = {
  doporucujeme: { cs: 'Doporučujeme', sk: 'Odporúčame' },
  'dobra-volba': { cs: 'Dobrá volba', sk: 'Dobrá voľba' },
  specialni: { cs: 'Pro určité případy', sk: 'Pre určité prípady' },
  'na-zkousku': { cs: 'Spíš na zkoušku', sk: 'Skôr na skúšku' },
};
function najdiStranku(...cesta) {
  const zaklad = join(slozkaObsahu, ...cesta);
  for (const p of ['.mdx', '.md']) {
    try { if (statSync(zaklad + p).isFile()) return zaklad + p; } catch { /* další přípona */ }
  }
  return null;
}
function zkontrolujStranky(polozky, slozka, datovySoubor) {
  for (const x of polozky) {
    const stitek = STITKY[x.doporuceni];
    if (!stitek) {
      chyby.push(`${datovySoubor}: „${x.slug}" má neznámé doporuceni „${x.doporuceni}".`);
      continue;
    }
    for (const [jazyk, prefix] of [['cs', []], ['sk', ['sk']]]) {
      const stranka = najdiStranku(...prefix, ...slozka, x.slug);
      if (!stranka) {
        chyby.push(`${datovySoubor}: „${x.slug}" nemá stránku ${[...prefix, ...slozka, x.slug].join('/')}.mdx.`);
        continue;
      }
      const text = readFileSync(stranka, 'utf8');
      const badge = text.match(/badge:\s*\n\s*text:\s*"([^"]+)"/);
      if (!badge || badge[1] !== stitek[jazyk]) {
        chyby.push(`${relative(koren, stranka)}: štítek v menu musí být „${stitek[jazyk]}" (podle ${datovySoubor}).`);
      }
    }
  }
}
zkontrolujStranky(poskytovatele, ['modely', 'poskytovatele'], 'poskytovatele.yaml');
zkontrolujStranky(modelyEu, ['modely', 'eu'], 'modely-eu.yaml');

const slugyModelu = new Set(modelyEu.map((m) => m.slug));
for (const p of poskytovatele) {
  for (const c of p.modely ?? []) {
    // Slug (malá písmena a pomlčky) musí existovat; volný název je model mimo katalog.
    if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(c.model) && !slugyModelu.has(c.model)) {
      chyby.push(`poskytovatele.yaml: ${p.slug} odkazuje na neznámý model „${c.model}".`);
    }
  }
}
// Základnou katalogu je nabídka Melious — každý model v ní musí být.
const melious = poskytovatele.find((p) => p.slug === 'melious');
for (const m of modelyEu) {
  if (!(melious?.modely ?? []).some((c) => c.model === m.slug)) {
    chyby.push(`modely-eu.yaml: model „${m.slug}" nenabízí Melious — katalog stojí na jeho nabídce.`);
  }
}

// 5. Stáří živých dat — varování po 60 dnech.
for (const nazev of readdirSync(slozkaDat)) {
  if (!nazev.endsWith('.yaml') || nazev === 'konstanty.yaml') continue;
  const data = load(readFileSync(join(slozkaDat, nazev), 'utf8'));
  const overeno = data?.last_verified;
  if (overeno instanceof Date) {
    const stariDni = Math.floor((Date.now() - overeno.getTime()) / 86_400_000);
    if (stariDni > 60) {
      console.warn(`kontrola-obsahu: VAROVÁNÍ — src/data/${nazev} má last_verified staré ${stariDni} dní. Ověř údaje.`);
    }
  }
}

if (chyby.length > 0) {
  console.error('kontrola-obsahu: nalezeny nesrovnalosti:\n');
  for (const ch of chyby) console.error('  - ' + ch);
  console.error(`\nCelkem: ${chyby.length}. Oprav soubory (nebo uprav src/data/konstanty.yaml) a spusť znovu.`);
  process.exit(1);
}

console.log('kontrola-obsahu: OK (modely, poskytovatelé, štítky i data ověření konzistentní).');
