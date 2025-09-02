import { z } from "zod";
export declare const NiveauxSchema: z.ZodObject<{
    nom: z.ZodString;
}, z.core.$strip>;
export type NiveauxInput = z.infer<typeof NiveauxSchema>;
//# sourceMappingURL=NiveauxModel.d.ts.map