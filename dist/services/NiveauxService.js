"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauxService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class NiveauxService {
    static async create(data) {
        return prisma_1.default.niveaux.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.niveaux.findMany();
    }
    static async findById(id) {
        const niveau = await prisma_1.default.niveaux.findUnique({ where: { id } });
        if (!niveau)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.NIVEAU_NOT_FOUND };
        return niveau;
    }
    static async update(id, data) {
        const niveau = await prisma_1.default.niveaux.findUnique({ where: { id } });
        if (!niveau)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.NIVEAU_NOT_FOUND };
        return prisma_1.default.niveaux.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const niveau = await prisma_1.default.niveaux.findUnique({ where: { id } });
        if (!niveau)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.NIVEAU_NOT_FOUND };
        return prisma_1.default.niveaux.delete({ where: { id } });
    }
}
exports.NiveauxService = NiveauxService;
//# sourceMappingURL=NiveauxService.js.map