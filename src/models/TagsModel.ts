import { z } from 'zod';

export const TagsSchema = z.object({
    libelle: z.string().min(1)
});

export type TagsInput = z.infer<typeof TagsSchema>;