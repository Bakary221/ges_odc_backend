import { z } from 'zod';
export declare const CompetencesSchema: z.ZodObject<{
    description: z.ZodString;
    niveauxId: z.ZodNumber;
}, z.core.$strip>;
export type CompetencesInput = z.infer<typeof CompetencesSchema>;
//# sourceMappingURL=CompetencesModel.d.ts.map