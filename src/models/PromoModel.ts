import { z } from "zod";

export const PromoSchema = z.object({
  nom: z.string().min(1),
  nbrRef: z.string().min(1),
  annee: z.string().min(1),
});

export type PromoInput = z.infer<typeof PromoSchema>;
