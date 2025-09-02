import { Request, Response, NextFunction } from "express";
import { PromoService } from "../services/PromoService";
import { PromoSchema } from "../models/PromoModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";

export class PromoController {
    
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = PromoSchema.parse(req.body);
      const promo = await PromoService.create(data);
      return ResponseFormatter.success(res, promo, SuccessCodes.PROMO_CREATED, 201);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const promos = await PromoService.findAll();
      return ResponseFormatter.success(res, promos, SuccessCodes.PROMO_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const promo = await PromoService.findById(id);
      return ResponseFormatter.success(res, promo, SuccessCodes.PROMO_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const promo = await PromoService.update(id, data);
      return ResponseFormatter.success(res, promo, SuccessCodes.PROMO_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await PromoService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.PROMO_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
