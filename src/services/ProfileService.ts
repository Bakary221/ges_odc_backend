import prisma from "../config/prisma";
import { ProfileInput } from "../models/ProfileModel";
import { ErrorCodes, HttpCode } from "../enums/ErrorCodes";

export class ProfileService {

  static async create(data: ProfileInput) {
    return prisma.profil.create({
      data
    });
  }

  static async findAll() {
    return prisma.profil.findMany();
  }

  static async findById(id: number) {
    const profile = await prisma.profil.findUnique({ where: { id } });
    if (!profile) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROFILE_NOT_FOUND };
    return profile;
  }

  static async update(id: number, data: Partial<ProfileInput>) {
    const profile = await prisma.profil.findUnique({ where: { id } });
    if (!profile) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROFILE_NOT_FOUND };

    return prisma.profil.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const profile = await prisma.profil.findUnique({ where: { id } });
    if (!profile) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROFILE_NOT_FOUND };

    return prisma.profil.delete({ where: { id } });
  }
}
