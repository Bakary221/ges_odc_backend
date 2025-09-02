import { z } from 'zod';

export const ReferentielsSchema = z.object({
    nom: z.string().min(1),
});

export type ReferentielsInput = z.infer<typeof ReferentielsSchema>;