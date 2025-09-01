import prisma from "../config/prisma";
import { TagsInput } from "../models/TagsModel";
import { ErrorCodes , HttpCode } from "../enums/ErrorCodes";

export class TagService {

  static async create(data: TagsInput) {
    const existing = await prisma.tag.findUnique({ where: { libelle: data.libelle } });
    if (existing) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.TAG_ALREADY_EXISTS };
    
    return prisma.tag.create({
      data
    });
  }

  static async findAll() {
    return prisma.tag.findMany();
  }

  static async findById(id: number) {
    const tag = await prisma.tag.findUnique({ where: { id } });
    if (!tag) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.TAG_NOT_FOUND};
    return tag;
  }

  static async update(id: number, data: Partial<TagsInput>) {
    const tag = await prisma.tag.findUnique({ where: { id } });
    if (!tag) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.TAG_NOT_FOUND};

    return prisma.tag.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const tag = await prisma.utilisateur.findUnique({ where: { id } });
    if (!tag) throw { status: HttpCode.NOT_FOUND, message: ErrorCodes.TAG_NOT_FOUND };

    return prisma.tag.delete({ where: { id } });
  }
}
