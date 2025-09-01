import prisma from "../config/prisma";
import bcrypt from "bcryptjs";
import { UserInput } from "../models/UserModel";
import { ErrorCodes , HttpCode } from "../enums/ErrorCodes";

export class UserService {

  static async create(data: UserInput) {
    const existing = await prisma.utilisateur.findUnique({ where: { email: data.email } });
    if (existing) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.USER_ALREADY_EXISTS };
    
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.utilisateur.create({
      data: { ...data, password: hashedPassword }
    });
  }

  static async findAll() {
    return prisma.utilisateur.findMany();
  }

  static async findById(id: number) {
    const user = await prisma.utilisateur.findUnique({ where: { id } });
    if (!user) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.USER_NOT_FOUND };
    return user;
  }

  static async update(id: number, data: Partial<UserInput>) {
    const user = await prisma.utilisateur.findUnique({ where: { id } });
    if (!user) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.USER_NOT_FOUND };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return prisma.utilisateur.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const user = await prisma.utilisateur.findUnique({ where: { id } });
    if (!user) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.USER_NOT_FOUND };

    return prisma.utilisateur.delete({ where: { id } });
  }
}
