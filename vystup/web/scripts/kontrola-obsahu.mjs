// Kontrola konzistence obsahu. Spouští se před sestavením (npm run build)
// i samostatně (npm run check). Když najde nesoulad, build spadne.
//
// Co hlídá:
// 1. Název doporučeného modelu (src/data/konstanty.yaml) — každý výskyt
//    „GLM …" v obsahu musí přesně odpovídat konstantě.
// 2. V textu stránek nesmí zůstat ruční věta „Naposledy ověřeno/overené" —
//    datum se zobrazuje z frontmatteru `last_verified` (PageTitle.astro).
// 3. Stáří `last_verified` v živých datech (src/data/*.yaml) — jen varování.

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

  // 1. Název modelu: „GLM" + verze + případné jedno slovo (varianta).
  // Zalomení řádku uprostřed názvu je v Markdownu v pořádku — normalizujeme.
  for (const shoda of text.matchAll(/GLM\s+\d[\d.]*(?:\s+[A-Za-z][\w-]*)?/g)) {
    const nalezeno = shoda[0].replace(/\s+/g, ' ');
    if (nalezeno !== model) {
      chyby.push(`${kratka}: „${nalezeno}" neodpovídá konstantě „${model}".`);
    }
  }

  // 2. Ruční věta s datem ověření (mimo frontmatter klíč last_verified).
  if (/Naposledy (ověřeno|overené)/.test(text)) {
    chyby.push(`${kratka}: obsahuje ruční větu „Naposledy ověřeno/overené" — datum patří jen do frontmatteru last_verified.`);
  }
}

// 3. Stáří živých dat — varování po 60 dnech.
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

console.log('kontrola-obsahu: OK (model i data ověření konzistentní).');
