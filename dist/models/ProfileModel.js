"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSchema = void 0;
const zod_1 = require("zod");
exports.ProfileSchema = zod_1.z.object({
    nomP: zod_1.z.string().min(1),
});
//# sourceMappingURL=ProfileModel.js.map