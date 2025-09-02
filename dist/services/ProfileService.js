"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class ProfileService {
    static async create(data) {
        return prisma_1.default.profil.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.profil.findMany();
    }
    static async findById(id) {
        const profile = await prisma_1.default.profil.findUnique({ where: { id } });
        if (!profile)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROFILE_NOT_FOUND };
        return profile;
    }
    static async update(id, data) {
        const profile = await prisma_1.default.profil.findUnique({ where: { id } });
        if (!profile)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROFILE_NOT_FOUND };
        return prisma_1.default.profil.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const profile = await prisma_1.default.profil.findUnique({ where: { id } });
        if (!profile)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROFILE_NOT_FOUND };
        return prisma_1.default.profil.delete({ where: { id } });
    }
}
exports.ProfileService = ProfileService;
//# sourceMappingURL=ProfileService.js.map