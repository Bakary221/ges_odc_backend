import { z } from "zod";

export const ProfilSortieSchema = z.object({
  nom: z.string().min(1),
});

export type ProfilSortieInput = z.infer<typeof ProfilSortieSchema>;
