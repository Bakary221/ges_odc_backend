"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetencesSchema = void 0;
const zod_1 = require("zod");
exports.CompetencesSchema = zod_1.z.object({
    description: zod_1.z.string().min(1),
    niveauxId: zod_1.z.number()
});
//# sourceMappingURL=CompetencesModel.js.map