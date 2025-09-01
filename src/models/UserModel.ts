import { z } from "zod";

export const UserSchema = z.object({
  nom: z.string().min(3),
  prenom: z.string().min(3),
  adresse: z.string().min(3),
  photo: z.string().min(3),
  email: z.email(),
  login: z.string().min(3),
  password: z.string().min(6),
  telephone: z.string().min(9),
  genre: z.enum(["Homme", "Femme"]),
  profilId: z.number(),
  profilSortiId: z.number(),
  referentielId: z.number()
});

export type UserInput = z.infer<typeof UserSchema>;
