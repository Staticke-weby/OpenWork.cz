# Jak nahrát web na hosting

Web se sestaví do složky `web/dist/`. Tuto složku stačí nahrát na hosting.
Nic víc na serveru běžet nemusí — je to obyčejný statický web.

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

## Když něco nesedí

- Web se otevře, ale bez vzhledu → nejspíš jste nenahráli celý obsah `dist/`
  (chybí složky se styly). Nahrajte znovu vše.
- Odkazy vedou na „stránka nenalezena" → zkontrolujte, že soubory jsou přímo
  ve `www`/`public_html`, ne v podsložce.
