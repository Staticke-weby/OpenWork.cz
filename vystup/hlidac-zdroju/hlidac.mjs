#!/usr/bin/env node
// Hlídač zdrojů — kontroluje nový obsah v oficiálních repozitářích, ze kterých
// openwork.cz čerpá fakta. Účel: vědět, kdy upravit web (hlavně katalog
// ověřených / ZDR modelů a bezplatných úrovní).
//
// Bez závislostí (Node 24+, vestavěný fetch). Spuštění ze složky skriptu:
//   node hlidac.mjs         → vypíše, co je nového od posledního uloženého stavu
//   node hlidac.mjs --uloz  → totéž + uloží aktuální stav do stav.json
//   node hlidac.mjs --json  → strojově čitelný výstup (pro automatizaci/CI)
//
// Volitelně proměnná prostředí GITHUB_TOKEN pro vyšší limit GitHub API.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const STAV = join(__dir, 'stav.json');

// Sledované zdroje. Každý má `ucel` — proč ho hlídáme a co z něj teče do webu.
// Nový zdroj přidávej jen s konkrétním účelem (viz AGENTS.md → Zdroje).
const ZDROJE = [
  {
    klic: 'openwork',
    repo: 'different-ai/openwork',
    ucel: 'fakta o aplikaci OpenWork (zdarma/open source, funkce, ceník) — homepage, Začínáme',
  },
  {
    klic: 'opencode',
    repo: 'anomalyco/opencode',
    ucel: 'změny v opencode a OpenCode Zen/Go — ekosystém, katalog modelů, ZDR',
  },
];

const hlavicky = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'openwork-cz-hlidac',
};
if (process.env.GITHUB_TOKEN) hlavicky.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function gh(cesta) {
  const r = await fetch(`https://api.github.com${cesta}`, { headers: hlavicky });
  if (!r.ok) throw new Error(`GitHub API ${r.status} ${r.statusText} (${cesta})`);
  return r.json();
}

async function zjistiRepo(z) {
  let releases = [];
  let commits = [];
  try {
    releases = await gh(`/repos/${z.repo}/releases?per_page=1`);
  } catch (e) {
    releases = { chyba: String(e.message) };
  }
  try {
    // Bez `sha` = výchozí větev, nemusíme hádat její název.
    commits = await gh(`/repos/${z.repo}/commits?per_page=1`);
  } catch (e) {
    commits = { chyba: String(e.message) };
  }
  const rel = Array.isArray(releases) ? releases[0] : null;
  const com = Array.isArray(commits) ? commits[0] : null;
  return {
    release: rel
      ? { tag: rel.tag_name, nazev: rel.name, datum: rel.published_at, url: rel.html_url }
      : null,
    commit: com
      ? {
          sha: com.sha.slice(0, 7),
          zprava: com.commit.message.split('\n')[0],
          datum: com.commit.author?.date,
          url: com.html_url,
        }
      : null,
    chyby: [releases, commits].filter((x) => x && x.chyba).map((x) => x.chyba),
  };
}

const stav = existsSync(STAV) ? JSON.parse(readFileSync(STAV, 'utf-8')) : {};
const novyStav = {};
const nalezy = [];

for (const z of ZDROJE) {
  const info = await zjistiRepo(z);
  novyStav[z.klic] = {
    release: info.release?.tag ?? null,
    commit: info.commit?.sha ?? null,
  };
  const stary = stav[z.klic] ?? {};
  const zmeny = [];
  if (info.release && info.release.tag !== stary.release) {
    zmeny.push({
      typ: 'release',
      text: `nové vydání ${info.release.tag} (${(info.release.datum || '').slice(0, 10)})`,
      url: info.release.url,
    });
  }
  if (info.commit && info.commit.sha !== stary.commit) {
    zmeny.push({
      typ: 'commit',
      text: `nový commit ${info.commit.sha}: ${info.commit.zprava}`,
      url: info.commit.url,
    });
  }
  nalezy.push({ zdroj: z, zmeny, chyby: info.chyby });
}

const jeJson = process.argv.includes('--json');
const jsouZmeny = nalezy.some((n) => n.zmeny.length);

if (jeJson) {
  console.log(JSON.stringify({ jsouZmeny, nalezy, stav: novyStav }, null, 2));
} else if (jsouZmeny) {
  console.log('Nový obsah ve sledovaných zdrojích:\n');
  for (const n of nalezy) {
    if (!n.zmeny.length && !n.chyby.length) continue;
    console.log(`▸ ${n.zdroj.repo}  —  ${n.zdroj.ucel}`);
    for (const z of n.zmeny) console.log(`    • ${z.text}\n      ${z.url}`);
    for (const c of n.chyby) console.log(`    ! ${c}`);
    console.log('');
  }
  console.log('Zkontroluj, jestli se změna dotýká webu (hlavně katalog modelů / ZDR / ceník).');
} else {
  console.log('Nic nového od posledního uloženého stavu.');
  for (const n of nalezy) for (const c of n.chyby) console.log(`  ! ${n.zdroj.repo}: ${c}`);
}

if (process.argv.includes('--uloz')) {
  writeFileSync(STAV, JSON.stringify(novyStav, null, 2) + '\n');
  if (!jeJson) console.log(`\nStav uložen do stav.json.`);
}
