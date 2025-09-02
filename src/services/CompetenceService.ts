import prisma from "../config/prisma";
import { CompetencesInput } from "../models/CompetencesModel";
import { ErrorCodes , HttpCode } from "../enums/ErrorCodes";

export class CompetenceService {

  static async create(data: CompetencesInput) {
    const existing = await prisma.competence.findUnique({ where: { description: data.description } });
    if (existing) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.COMPETENCE_ALREADY_EXISTS };
    
    return prisma.competence.create({
      data
    });
  }

  static async findAll() {
    return prisma.competence.findMany();
  }

  static async findById(id: number) {
    const competence = await prisma.competence.findUnique({ where: { id } });
    if (!competence) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.COMPETENCE_NOT_FOUND};
    return competence;
  }

  static async update(id: number, data: Partial<CompetencesInput>) {
    const competence = await prisma.competence.findUnique({ where: { id } });
    if (!competence) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.COMPETENCE_NOT_FOUND};

    return prisma.competence.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const competence = await prisma.competence.findUnique({ where: { id } });
    if (!competence) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.COMPETENCE_NOT_FOUND };

    return prisma.competence.delete({ where: { id } });
  }
}
