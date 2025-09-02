"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauxSchema = void 0;
const zod_1 = require("zod");
exports.NiveauxSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
});
//# sourceMappingURL=NiveauxModel.js.map