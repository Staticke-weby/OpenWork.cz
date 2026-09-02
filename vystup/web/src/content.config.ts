import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Datum poslední kontroly proměnlivých údajů; zobrazuje se pod nadpisem
      // (override PageTitle.astro). Viz AGENTS.md.
      // `tagy`: cesty tematických stránek bez prefixu "temata/", např.
      // "finance/faktury". Každý tag musí mít kvalitní stránku v temata/
      // (hlídá scripts/kontrola-obsahu.mjs).
      extend: z.object({
        last_verified: z.coerce.date().optional(),
        tagy: z.array(z.string().regex(/^[a-z0-9-]+(\/[a-z0-9-]+)*$/)).optional(),
      }),
    }),
  }),
};
