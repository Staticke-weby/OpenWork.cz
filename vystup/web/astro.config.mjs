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
      // Doplňkové meta pro sdílení a vyhledávače. Náhledový obrázek og.png je
      // povolená výjimka z pravidla „žádné rastrové obrázky" (viz AGENTS.md).
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://openwork.cz/og.png' },
        },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'OpenWork.cz — nezávislý průvodce aplikací OpenWork',
          },
        },
        // Strukturovaná data pro vyhledávače (web + provozovatel).
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                name: 'OpenWork.cz',
                url: 'https://openwork.cz/',
                inLanguage: ['cs', 'sk'],
              },
              {
                '@type': 'Organization',
                name: 'OpenWork.cz',
                url: 'https://openwork.cz/',
                logo: 'https://openwork.cz/og.png',
              },
            ],
          }),
        },
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
        // Nadpis + řádek „Naposledy ověřeno" z frontmatteru `last_verified`.
        PageTitle: './src/components/PageTitle.astro',
      },
      customCss: ['./src/styles/custom.css'],
      // Boční nabídka podle sekcí; obsah složek se generuje automaticky.
      sidebar: [
        {
          label: 'Začínáme',
          items: [{ autogenerate: { directory: 'zaciname' } }],
        },
        {
          label: 'Pro koho je OpenWork',
          translations: { sk: 'Pre koho je OpenWork' },
          items: [{ autogenerate: { directory: 'pro-koho' } }],
        },
        {
          label: 'Vaše data',
          translations: { sk: 'Vaše dáta' },
          items: [
            { slug: 'vase-data' },
            { slug: 'vase-data/lokalni-ai' },
            {
              label: 'ZDR',
              items: [
                { slug: 'vase-data/zdr' },
                {
                  slug: 'vase-data/zdr/srovnani-poskytovatelu',
                  badge: { text: 'Živé', variant: 'tip' },
                },
              ],
            },
            { slug: 'vase-data/gdpr-a-nis2' },
            { slug: 'vase-data/bezpecnost' },
            { slug: 'vase-data/openwork-vs-claude-cowork' },
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
                { slug: 'modely/nejlepsi-pro/programovani' },
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
