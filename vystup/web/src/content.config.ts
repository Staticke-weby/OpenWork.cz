import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Datum poslední kontroly proměnlivých údajů; zobrazuje se pod nadpisem
      // (override PageTitle.astro). Viz AGENTS.md.
      extend: z.object({
        last_verified: z.coerce.date().optional(),
      }),
    }),
  }),
};
