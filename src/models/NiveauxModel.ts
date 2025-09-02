import { z } from "zod";

export const NiveauxSchema = z.object({
  nom: z.string().min(1),
});

export type NiveauxInput = z.infer<typeof NiveauxSchema>;
