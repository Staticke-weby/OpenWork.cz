// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://openwork.cz',
  markdown: {
    // Odkazy mimo náš web (http/https) otevírat v nové kartě + bezpečné rel.
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  integrations: [
    starlight({
      title: 'OpenWork.cz',
      favicon: '/favicon.svg',
      // Doplňkové meta pro sdílení a vyhledávače (bez obrázků — viz AGENTS.md).
      head: [
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'OpenWork.cz' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
      ],
      // Čeština výchozí (root), slovenština v /sk/. Starlight u chybějících
      // překladů zobrazí český obsah s upozorněním — to je žádoucí.
      defaultLocale: 'root',
      locales: {
        root: { label: 'Čeština', lang: 'cs' },
        sk: { label: 'Slovenčina', lang: 'sk' },
      },
      // Řádek „Aktualizováno:" pod nadpisem.
      lastUpdated: true,
      // Vlastní patička (povinná věta o nezávislosti) přes override komponenty.
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Hero: './src/components/Hero.astro',
        Footer: './src/components/Footer.astro',
      },
      customCss: ['./src/styles/custom.css'],
      // Boční nabídka podle sekcí; obsah složek se generuje automaticky.
      sidebar: [
        {
          label: 'Začínáme',
          items: [{ autogenerate: { directory: 'zaciname' } }],
        },
        {
          label: 'Vaše data',
          translations: { sk: 'Vaše dáta' },
          items: [
            { slug: 'vase-data' },
            { slug: 'vase-data/kde-bezi-vypocet' },
            {
              label: 'ZDR',
              items: [
                { slug: 'vase-data/zdr' },
                {
                  slug: 'vase-data/zdr/tabulka',
                  badge: { text: 'Živé', variant: 'tip' },
                },
              ],
            },
            { slug: 'vase-data/gdpr-a-nis2' },
            { slug: 'vase-data/bezpecnost' },
            { slug: 'vase-data/openwork-vs-cowork' },
          ],
        },
        {
          label: 'Kolik to stojí',
          items: [{ autogenerate: { directory: 'kolik-to-stoji' } }],
        },
        {
          label: 'Modely a poskytovatelé',
          translations: { sk: 'Modely a poskytovatelia' },
          items: [
            { slug: 'modely' },
            {
              label: 'Nejlepší AI modely',
              translations: { sk: 'Najlepšie AI modely' },
              items: [
                { slug: 'modely/nejlepsi-pro/kod' },
                { slug: 'modely/nejlepsi-pro/cestinu' },
                { slug: 'modely/nejlepsi-pro/domacnost' },
              ],
            },
          ],
        },
        {
          label: 'Práce se složkou',
          items: [{ autogenerate: { directory: 'prace-se-slozkou' } }],
        },
        {
          label: 'O webu',
          items: [{ autogenerate: { directory: 'o-webu' } }],
        },
      ],
    }),
  ],
});
