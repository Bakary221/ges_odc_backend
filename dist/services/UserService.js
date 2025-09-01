"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const ErrorCodes_1 = require("../enums/ErrorCodes");
class UserService {
    static async create(data) {
        const existing = await prisma_1.default.utilisateur.findUnique({ where: { email: data.email } });
        if (existing)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.USER_ALREADY_EXISTS };
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        return prisma_1.default.utilisateur.create({
            data: { ...data, password: hashedPassword }
        });
    }
    static async findAll() {
        return prisma_1.default.utilisateur.findMany();
    }
    static async findById(id) {
        const user = await prisma_1.default.utilisateur.findUnique({ where: { id } });
        if (!user)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.USER_NOT_FOUND };
        return user;
    }
    static async update(id, data) {
        const user = await prisma_1.default.utilisateur.findUnique({ where: { id } });
        if (!user)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.USER_NOT_FOUND };
        if (data.password) {
            data.password = await bcryptjs_1.default.hash(data.password, 10);
        }
        return prisma_1.default.utilisateur.update({
            where: { id },
            data
        });
    }
    static async delete(id) {
        const user = await prisma_1.default.utilisateur.findUnique({ where: { id } });
        if (!user)
            throw { status: ErrorCodes_1.HttpCode.BAD_REQUEST, message: ErrorCodes_1.ErrorCodes.USER_NOT_FOUND };
        return prisma_1.default.utilisateur.delete({ where: { id } });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map