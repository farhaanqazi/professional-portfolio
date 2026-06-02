import { defineCollection, z } from 'astro:content';

// Strict where it forces proof, permissive where real professional work demands it.
// `repoUrl` is optional — proprietary/NDA work has no public repo; `evidence[]` carries the proof.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    role: z.string(),
    status: z.enum(['production', 'prototype', 'research', 'archived']),
    featured: z.boolean().default(false),
    order: z.number().default(0), // lower = earlier in listings
    stack: z.array(z.string()).min(1),
    problem: z.string(),
    outcome: z.string(),
    evidence: z.array(z.string()).min(1), // >=1 verifiable proof: repo, benchmark, screenshot, demo
    thumbnail: z.string(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    architectureDiagram: z.string().optional(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          source: z.string(), // every number names its source
        })
      )
      .optional(),
    lessons: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
