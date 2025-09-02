"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class PromoService {
    static async create(data) {
        return prisma_1.default.promotion.create({
            data
        });
    }
    static async findAll() {
        return prisma_1.default.promotion.findMany();
    }
    static async findById(id) {
        const promo = await prisma_1.default.promotion.findUnique({ where: { id } });
        if (!promo)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROMO_NOT_FOUND };
        return promo;
    }
    static async update(id, data) {
        const promo = await prisma_1.default.promotion.findUnique({ where: { id } });
        if (!promo)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROMO_NOT_FOUND };
        return prisma_1.default.promotion.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const promo = await prisma_1.default.promotion.findUnique({ where: { id } });
        if (!promo)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.PROMO_NOT_FOUND };
        return prisma_1.default.promotion.delete({ where: { id } });
    }
}
exports.PromoService = PromoService;
//# sourceMappingURL=PromoService.js.map