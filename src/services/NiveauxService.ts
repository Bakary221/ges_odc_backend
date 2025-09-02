import prisma from "../config/prisma";
import { NiveauxInput } from "../models/NiveauxModel";
import { ErrorCodes, HttpCode } from "../enums/ErrorCodes";

export class NiveauxService {

  static async create(data: NiveauxInput) {
    return prisma.niveaux.create({
      data
    });
  }

  static async findAll() {
    return prisma.niveaux.findMany();
  }

  static async findById(id: number) {
    const niveau = await prisma.niveaux.findUnique({ where: { id } });
    if (!niveau) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.NIVEAU_NOT_FOUND };
    return niveau;
  }

  static async update(id: number, data: Partial<NiveauxInput>) {
    const niveau = await prisma.niveaux.findUnique({ where: { id } });
    if (!niveau) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.NIVEAU_NOT_FOUND };

    return prisma.niveaux.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const niveau = await prisma.niveaux.findUnique({ where: { id } });
    if (!niveau) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.NIVEAU_NOT_FOUND };

    return prisma.niveaux.delete({ where: { id } });
  }
}
