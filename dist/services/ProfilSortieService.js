"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilSortieService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class ProfilSortieService {
    static async create(data) {
        return prisma_1.default.profilSorti.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.profilSorti.findMany();
    }
    static async findById(id) {
        const profilSortie = await prisma_1.default.profilSorti.findUnique({ where: { id } });
        if (!profilSortie)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROFIL_SORTIE_NOT_FOUND };
        return profilSortie;
    }
    static async update(id, data) {
        const profilSortie = await prisma_1.default.profilSorti.findUnique({ where: { id } });
        if (!profilSortie)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROFIL_SORTIE_NOT_FOUND };
        return prisma_1.default.profilSorti.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const profilSortie = await prisma_1.default.profilSorti.findUnique({ where: { id } });
        if (!profilSortie)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROFIL_SORTIE_NOT_FOUND };
        return prisma_1.default.profilSorti.delete({ where: { id } });
    }
}
exports.ProfilSortieService = ProfilSortieService;
//# sourceMappingURL=ProfilSortieService.js.map