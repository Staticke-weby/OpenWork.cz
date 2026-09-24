// Sdílené načítání dat o poskytovatelích a evropských modelech.
// Zdroje: src/data/poskytovatele.yaml a src/data/modely-eu.yaml (čte se
// v čase sestavení — web je statický). Používají komponenty Poskytovatel*,
// Model* a přehledové tabulky.
import { load } from 'js-yaml';

const soubory = import.meta.glob('../data/*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function nacti(nazev: string): any {
  const raw = soubory[`../data/${nazev}`];
  if (!raw) throw new Error(`katalog: soubor src/data/${nazev} nenalezen.`);
  return load(raw) ?? {};
}

export type Mena = 'EUR' | 'USD' | 'CHF';

/**
 * Jediný štítek webu. Mají ho jen výslovně vybrané modely a poskytovatelé;
 * ostatní jsou druhotná volba a štítek nemají (pole v YAML chybí).
 */
export type Doporuceni = 'doporucujeme';

export interface CenaModelu {
  /** Slug modelu z modely-eu.yaml, nebo volný název (model mimo evropský katalog). */
  model: string;
  /** Cena za 1 milion vstupních / výstupních tokenů v měně poskytovatele. */
  vstup?: number | null;
  vystup?: number | null;
  poznamka?: string;
}

export interface Poskytovatel {
  slug: string;
  nazev: string;
  web: string;
  evropsky: boolean;
  sidlo: string;
  region_vypoctu: string;
  vlastni_hw: string;
  trenink: string;
  uchovavani: string;
  zdr: string;
  /** Krátká verze do přehledových tabulek. */
  zdr_kratce: string;
  dpa: string;
  certifikace: string;
  platba: string;
  mena: Mena;
  zdarma: string;
  zdarma_kratce: string;
  pripojeni: string;
  doporuceni?: Doporuceni;
  shrnuti: string;
  zdroje: string[];
  overeno: Date;
  modely: CenaModelu[];
}

export interface ModelEu {
  slug: string;
  nazev: string;
  vyrobce: string;
  zeme_vyrobce: string;
  otevreny: boolean;
  vstupy: string;
  kontext: string;
  doporuceni?: Doporuceni;
  vhodne_pro: string;
}

const dataPoskytovatelu = nacti('poskytovatele.yaml');
const dataModelu = nacti('modely-eu.yaml');
const konstanty = nacti('konstanty.yaml');

export const poskytovatele: Poskytovatel[] = dataPoskytovatelu.poskytovatele ?? [];
export const modelyEu: ModelEu[] = dataModelu.modely ?? [];
export const overenoPoskytovatele: Date | undefined = dataPoskytovatelu.last_verified;
export const overenoModely: Date | undefined = dataModelu.last_verified;

/** Kurzy pro přepočet na eura (jen pro orientační průměry), viz konstanty.yaml. */
export const kurzUsdEur: number = Number(konstanty.kurz_usd_eur);
export const kurzChfEur: number = Number(konstanty.kurz_chf_eur);
if (!kurzUsdEur || !kurzChfEur) throw new Error('katalog: v konstanty.yaml chybí kurz_usd_eur nebo kurz_chf_eur.');

export function poskytovatel(slug: string): Poskytovatel {
  const p = poskytovatele.find((x) => x.slug === slug);
  if (!p) throw new Error(`katalog: poskytovatel „${slug}" není v poskytovatele.yaml.`);
  return p;
}

export function model(slug: string): ModelEu | undefined {
  return modelyEu.find((m) => m.slug === slug);
}

export function modelPovinne(slug: string): ModelEu {
  const m = model(slug);
  if (!m) throw new Error(`katalog: model „${slug}" není v modely-eu.yaml.`);
  return m;
}

/** Cena v eurech (přepočet kurzem z konstanty.yaml). */
export function naEura(cena: number, mena: Mena): number {
  if (mena === 'USD') return cena * kurzUsdEur;
  if (mena === 'CHF') return cena * kurzChfEur;
  return cena;
}

/** Kde se model dá vzít: evropští poskytovatelé s cenou. */
export function nabidkyModelu(slug: string) {
  return poskytovatele
    .flatMap((p) =>
      p.modely
        .filter((c) => c.model === slug)
        .map((c) => ({ poskytovatel: p, cena: c }))
    );
}

function prumer(cisla: number[]): number | null {
  if (cisla.length === 0) return null;
  return cisla.reduce((a, b) => a + b, 0) / cisla.length;
}

/** Průměrná cena modelu u evropských poskytovatelů v eurech. */
export function prumernaCenaModelu(slug: string) {
  const eu = nabidkyModelu(slug).filter((n) => n.poskytovatel.evropsky);
  const vstup = eu
    .filter((n) => typeof n.cena.vstup === 'number')
    .map((n) => naEura(n.cena.vstup as number, n.poskytovatel.mena));
  const vystup = eu
    .filter((n) => typeof n.cena.vystup === 'number')
    .map((n) => naEura(n.cena.vystup as number, n.poskytovatel.mena));
  return { vstup: prumer(vstup), vystup: prumer(vystup), pocet: eu.length };
}

/** Základna katalogu — poskytovatel, u kterého vezmete každý model. */
export const ZAKLADNA = 'melious';

/** Cena modelu u základního poskytovatele (Melious), nebo null. */
export function cenaUZakladny(slug: string) {
  const p = poskytovatele.find((x) => x.slug === ZAKLADNA);
  const c = p?.modely.find((m) => m.model === slug);
  return c && p ? { vstup: c.vstup ?? null, vystup: c.vystup ?? null, mena: p.mena } : null;
}

/** Průměrná cena všech modelů poskytovatele (v jeho měně). */
export function prumernaCenaPoskytovatele(p: Poskytovatel) {
  const vstup = p.modely.map((c) => c.vstup).filter((x): x is number => typeof x === 'number');
  const vystup = p.modely.map((c) => c.vystup).filter((x): x is number => typeof x === 'number');
  return { vstup: prumer(vstup), vystup: prumer(vystup) };
}

/** Popisek štítku doporučení (u modelu a poskytovatele). */
export const DOPORUCENI: Record<Doporuceni, { cs: string; sk: string; varianta: 'success' }> = {
  doporucujeme: { cs: 'Doporučujeme', sk: 'Odporúčame', varianta: 'success' },
};

/** Pro řazení: doporučené napřed (0), ostatní potom (1). */
export function poradiDoporuceni(x: { doporuceni?: Doporuceni }): number {
  return x.doporuceni ? 0 : 1;
}

export function formatCena(cena: number | null | undefined, mena: Mena, jeSk = false): string {
  if (cena === null || cena === undefined) return '—';
  const cislo = new Intl.NumberFormat(jeSk ? 'sk-SK' : 'cs-CZ', {
    minimumFractionDigits: 2,
    maximumFractionDigits: cena < 0.1 ? 3 : 2,
  }).format(cena);
  if (mena === 'USD') return `${cislo} $`;
  if (mena === 'CHF') return `${cislo} CHF`;
  return `${cislo} €`;
}

/**
 * Textové pole v jazyce stránky: na slovenské mutaci se použije `<pole>_sk`,
 * pokud v YAML existuje, jinak česká hodnota.
 */
export function text(obj: any, pole: string, jeSk: boolean): string {
  const sk = obj?.[`${pole}_sk`];
  const hodnota = jeSk && sk !== undefined && sk !== null ? sk : obj?.[pole];
  return hodnota === undefined || hodnota === null ? '—' : String(hodnota);
}
