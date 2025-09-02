import { Request, Response, NextFunction } from "express";
import { NiveauxService } from "../services/NiveauxService";
import { NiveauxSchema } from "../models/NiveauxModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";

export class NiveauxController {
    
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = NiveauxSchema.parse(req.body);
      const niveau = await NiveauxService.create(data);
      return ResponseFormatter.success(res, niveau, SuccessCodes.NIVEAU_CREATED, 201);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const niveaux = await NiveauxService.findAll();
      return ResponseFormatter.success(res, niveaux, SuccessCodes.NIVEAU_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const niveau = await NiveauxService.findById(id);
      return ResponseFormatter.success(res, niveau, SuccessCodes.NIVEAU_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const niveau = await NiveauxService.update(id, data);
      return ResponseFormatter.success(res, niveau, SuccessCodes.NIVEAU_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await NiveauxService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.NIVEAU_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
