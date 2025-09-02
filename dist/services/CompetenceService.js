"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetenceService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class CompetenceService {
    static async create(data) {
        const existing = await prisma_1.default.competence.findUnique({ where: { description: data.description } });
        if (existing)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.COMPETENCE_ALREADY_EXISTS };
        return prisma_1.default.competence.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.competence.findMany();
    }
    static async findById(id) {
        const competence = await prisma_1.default.competence.findUnique({ where: { id } });
        if (!competence)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.COMPETENCE_NOT_FOUND };
        return competence;
    }
    static async update(id, data) {
        const competence = await prisma_1.default.competence.findUnique({ where: { id } });
        if (!competence)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.COMPETENCE_NOT_FOUND };
        return prisma_1.default.competence.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const competence = await prisma_1.default.competence.findUnique({ where: { id } });
        if (!competence)
            throw { status: ErrorCodes_1.HttpCode.NOT_FOUND, message: ErrorCodes_1.ErrorCodes.COMPETENCE_NOT_FOUND };
        return prisma_1.default.competence.delete({ where: { id } });
    }
}
exports.CompetenceService = CompetenceService;
//# sourceMappingURL=CompetenceService.js.map