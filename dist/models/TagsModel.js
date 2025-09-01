"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsSchema = void 0;
const zod_1 = require("zod");
exports.TagsSchema = zod_1.z.object({
    libelle: zod_1.z.string().min(1)
});
//# sourceMappingURL=TagsModel.js.map