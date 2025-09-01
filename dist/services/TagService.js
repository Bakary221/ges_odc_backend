"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class TagService {
    static async create(data) {
        const existing = await prisma_1.default.tag.findUnique({ where: { libelle: data.libelle } });
        if (existing)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.TAG_ALREADY_EXISTS };
        return prisma_1.default.tag.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.tag.findMany();
    }
    static async findById(id) {
        const tag = await prisma_1.default.tag.findUnique({ where: { id } });
        if (!tag)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.TAG_NOT_FOUND };
        return tag;
    }
    static async update(id, data) {
        const tag = await prisma_1.default.tag.findUnique({ where: { id } });
        if (!tag)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.TAG_NOT_FOUND };
        return prisma_1.default.tag.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const tag = await prisma_1.default.utilisateur.findUnique({ where: { id } });
        if (!tag)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.TAG_NOT_FOUND };
        return prisma_1.default.tag.delete({ where: { id } });
    }
}
exports.TagService = TagService;
//# sourceMappingURL=TagService.js.map