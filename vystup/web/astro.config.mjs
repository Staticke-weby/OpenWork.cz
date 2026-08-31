// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://openwork.cz',
  integrations: [
    starlight({
      title: 'OpenWork.cz',
      favicon: '/favicon.svg',
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
          items: [{ autogenerate: { directory: 'vase-data' } }],
        },
        {
          label: 'Kolik to stojí',
          items: [{ autogenerate: { directory: 'kolik-to-stoji' } }],
        },
        {
          label: 'Modely a poskytovatelé',
          items: [{ autogenerate: { directory: 'modely' } }],
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
