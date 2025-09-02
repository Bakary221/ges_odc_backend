import { z } from 'zod';

export const CompetencesSchema = z.object({
    description: z.string().min(1),
    niveauxId: z.number()
});

export type CompetencesInput = z.infer<typeof CompetencesSchema>;