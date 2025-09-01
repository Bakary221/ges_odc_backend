"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    nom: zod_1.z.string().min(3),
    prenom: zod_1.z.string().min(3),
    adresse: zod_1.z.string().min(3),
    photo: zod_1.z.string().min(3),
    email: zod_1.z.email(),
    login: zod_1.z.string().min(3),
    password: zod_1.z.string().min(6),
    telephone: zod_1.z.string().min(9),
    genre: zod_1.z.enum(["Homme", "Femme"]),
    profilId: zod_1.z.number(),
    profilSortiId: zod_1.z.number(),
    referentielId: zod_1.z.number()
});
//# sourceMappingURL=UserModel.js.map