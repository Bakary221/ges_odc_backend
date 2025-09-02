import prisma from "../config/prisma";
import { ProfilSortieInput } from "../models/ProfilSortieModel";
import { ErrorCodes, HttpCode } from "../enums/ErrorCodes";

export class ProfilSortieService {

  static async create(data: ProfilSortieInput) {
    return prisma.profilSorti.create({
      data
    });
  }

  static async findAll() {
    return prisma.profilSorti.findMany();
  }

  static async findById(id: number) {
    const profilSortie = await prisma.profilSorti.findUnique({ where: { id } });
    if (!profilSortie) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROFIL_SORTIE_NOT_FOUND };
    return profilSortie;
  }

  static async update(id: number, data: Partial<ProfilSortieInput>) {
    const profilSortie = await prisma.profilSorti.findUnique({ where: { id } });
    if (!profilSortie) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROFIL_SORTIE_NOT_FOUND };

    return prisma.profilSorti.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const profilSortie = await prisma.profilSorti.findUnique({ where: { id } });
    if (!profilSortie) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROFIL_SORTIE_NOT_FOUND };

    return prisma.profilSorti.delete({ where: { id } });
  }
}
