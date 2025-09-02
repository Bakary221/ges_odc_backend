"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoSchema = void 0;
const zod_1 = require("zod");
exports.PromoSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
    nbrRef: zod_1.z.string().min(1),
    annee: zod_1.z.string().min(1),
});
//# sourceMappingURL=PromoModel.js.map