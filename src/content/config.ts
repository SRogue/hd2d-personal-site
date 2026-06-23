import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    icon: z.string().default('📜'),
    description: z.string(),
    status: z.enum(['NEW', 'DONE', 'ONGOING']).optional(),
    readMin: z.number().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    draft: z.boolean().default(false),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
