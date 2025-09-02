import prisma from "../config/prisma";
import { ReferentielsInput } from "../models/ReferentielModel";
import { ErrorCodes , HttpCode } from "../enums/ErrorCodes";

export class ReferentielService {

  static async create(data: ReferentielsInput) {
    const existing = await prisma.referentiel.findUnique({ where: { nom: data.nom } });
    if (existing) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.REFERENTIEL_ALREADY_EXISTS };
    
    return prisma.referentiel.create({
      data
    });
  }

  static async findAll() {
    return prisma.referentiel.findMany();
  }

  static async findById(id: number) {
    const referentiel = await prisma.referentiel.findUnique({ where: { id } });
    if (!referentiel) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.REFERENTIEL_NOT_FOUND};
    return referentiel;
  }

  static async update(id: number, data: Partial<ReferentielsInput>) {
    const referentiel = await prisma.referentiel.findUnique({ where: { id } });
    if (!referentiel) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.REFERENTIEL_NOT_FOUND};

    return prisma.referentiel.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const referentiel = await prisma.referentiel.findUnique({ where: { id } });
    if (!referentiel) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.REFERENTIEL_NOT_FOUND };

    return prisma.referentiel.delete({ where: { id } });
  }
}
