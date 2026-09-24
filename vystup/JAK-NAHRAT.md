# Jak nahrát web na hosting

Web se sestaví do složky `web/dist/`. Tuto složku stačí nahrát na hosting.
Nic víc na serveru běžet nemusí — je to obyčejný statický web.

## Hlavní cesta: GitHub Pages (automaticky)

Repozitář je `github.com/Staticke-weby/OpenWork.cz`. Po každém nahrání změn
do větve `main` web sestaví a zveřejní GitHub sám (postup je v souboru
`.github/workflows/nasazeni.yml`). Ruční nahrávání přes FTP pak není potřeba.

Jednorázové nastavení na GitHubu:

1. V repozitáři otevřete **Settings → Pages** a v poli **Source** zvolte
   **GitHub Actions**.
2. Ve stejném místě do pole **Custom domain** napište `www.openwork.cz`
   a uložte. Až GitHub doménu ověří, zaškrtněte **Enforce HTTPS**.
3. U správce domény nastavte DNS záznamy:
   - pro `www.openwork.cz` záznam **CNAME** na `staticke-weby.github.io`
     (tady web skutečně běží),
   - pro `openwork.cz` (bez www) čtyři záznamy **A**: `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (volitelně i **AAAA** `2606:50c0:8000::153` až `2606:50c0:8003::153`).
     GitHub pak adresu bez www sám přesměruje na `www.openwork.cz`.

Průběh nasazení uvidíte na kartě **Actions**. Když kontrola obsahu nebo
sestavení selže, web se nezmění a zůstane předchozí verze.

> Web počítá s tím, že běží v kořeni domény (`www.openwork.cz/`). Na adrese
> `staticke-weby.github.io/OpenWork.cz/` by nefungovaly odkazy — proto je
> vlastní doména nutná. Adresu webu drží `site` v `web/astro.config.mjs`,
> soubor `web/public/CNAME` a `web/public/robots.txt` — při změně domény
> upravte všechna tři místa.

## Záložní cesta: ruční nahrání přes FTP

## Nejdřív web sestavte

V příkazovém řádku ve složce `web/`:

```bash
npm install
npm run build
```

Hotový web najdete ve `web/dist/`.

## Tři kroky, jak `dist/` nahrát přes FTP

1. **Připojte se k hostingu programem FileZilla.** Stáhněte a otevřete
   [FileZilla](https://filezilla-project.org/). Nahoře vyplňte údaje, které
   vám dal poskytovatel hostingu: *Hostitel* (např. `ftp.vasehosting.cz`),
   *Uživatel*, *Heslo*, a klikněte na **Rychlé připojení**.

2. **Najděte složku webu na serveru.** Na pravé straně (server) otevřete
   složku, ze které se web zobrazuje — obvykle se jmenuje `www`, `public_html`
   nebo `htdocs`. Pokud tam jsou staré soubory z minula, smažte je.

3. **Přetáhněte obsah `dist/` na server.** Na levé straně (váš počítač)
   otevřete `web/dist/`, označte **všechno uvnitř** a přetáhněte to do složky
   na serveru. Přenos chvíli trvá; až doběhne, web je online.

> Tip: Nahrávejte **obsah** složky `dist/` (soubory a podsložky uvnitř), ne
> složku `dist` jako celek — jinak by web běžel na adrese `.../dist/`.

## Stránka „404 — nenalezeno"

Web má vlastní chybovou stránku `404.html` (v kořeni `dist/`). Většina hostingů
ji použije automaticky. Pokud váš hosting na neexistující adrese ukazuje svou
vlastní chybovou stránku, nahrajte na server ještě soubor `.htaccess` s jedním
řádkem:

```
ErrorDocument 404 /404.html
```

## Když něco nesedí

- Web se otevře, ale bez vzhledu → nejspíš jste nenahráli celý obsah `dist/`
  (chybí složky se styly). Nahrajte znovu vše.
- Odkazy vedou na „stránka nenalezena" → zkontrolujte, že soubory jsou přímo
  ve `www`/`public_html`, ne v podsložce.
