"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilSortieSchema = void 0;
const zod_1 = require("zod");
exports.ProfilSortieSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
});
//# sourceMappingURL=ProfilSortieModel.js.map