import prisma from "../config/prisma";
import { PromoInput } from "../models/PromoModel";
import { ErrorCodes, HttpCode } from "../enums/ErrorCodes";

export class PromoService {

  static async create(data: PromoInput) {
    return prisma.promotion.create({
      data
    });
  }

  static async findAll() {
    return prisma.promotion.findMany();
  }

  static async findById(id: number) {
    const promo = await prisma.promotion.findUnique({ where: { id } });
    if (!promo) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROMO_NOT_FOUND };
    return promo;
  }

  static async update(id: number, data: Partial<PromoInput>) {
    const promo = await prisma.promotion.findUnique({ where: { id } });
    if (!promo) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROMO_NOT_FOUND };

    return prisma.promotion.update({
      where: { id },
      data
    });
  }

  static async delete(id: number) {
    const promo = await prisma.promotion.findUnique({ where: { id } });
    if (!promo) throw { status: HttpCode.BAD_REQUEST, message: ErrorCodes.PROMO_NOT_FOUND };

    return prisma.promotion.delete({ where: { id } });
  }
}
