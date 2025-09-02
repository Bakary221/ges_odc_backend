"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferentielService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class ReferentielService {
    static async create(data) {
        const existing = await prisma_1.default.referentiel.findUnique({ where: { nom: data.nom } });
        if (existing)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.REFERENTIEL_ALREADY_EXISTS };
        return prisma_1.default.referentiel.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.referentiel.findMany();
    }
    static async findById(id) {
        const referentiel = await prisma_1.default.referentiel.findUnique({ where: { id } });
        if (!referentiel)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.REFERENTIEL_NOT_FOUND };
        return referentiel;
    }
    static async update(id, data) {
        const referentiel = await prisma_1.default.referentiel.findUnique({ where: { id } });
        if (!referentiel)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.REFERENTIEL_NOT_FOUND };
        return prisma_1.default.referentiel.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const referentiel = await prisma_1.default.referentiel.findUnique({ where: { id } });
        if (!referentiel)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.REFERENTIEL_NOT_FOUND };
        return prisma_1.default.referentiel.delete({ where: { id } });
    }
}
exports.ReferentielService = ReferentielService;
//# sourceMappingURL=ReferentielService.js.map