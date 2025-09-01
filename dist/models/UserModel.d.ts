import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    nom: z.ZodString;
    prenom: z.ZodString;
    adresse: z.ZodString;
    photo: z.ZodString;
    email: z.ZodEmail;
    login: z.ZodString;
    password: z.ZodString;
    telephone: z.ZodString;
    genre: z.ZodEnum<{
        Homme: "Homme";
        Femme: "Femme";
    }>;
    profilId: z.ZodNumber;
    profilSortiId: z.ZodNumber;
    referentielId: z.ZodNumber;
}, z.core.$strip>;
export type UserInput = z.infer<typeof UserSchema>;
//# sourceMappingURL=UserModel.d.ts.map