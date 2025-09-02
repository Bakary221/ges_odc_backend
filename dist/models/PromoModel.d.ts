import { z } from "zod";
export declare const PromoSchema: z.ZodObject<{
    nom: z.ZodString;
    nbrRef: z.ZodString;
    annee: z.ZodString;
}, z.core.$strip>;
export type PromoInput = z.infer<typeof PromoSchema>;
//# sourceMappingURL=PromoModel.d.ts.map