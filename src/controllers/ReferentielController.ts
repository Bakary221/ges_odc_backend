import { Request, Response, NextFunction } from "express";
import { ReferentielService } from "../services/ReferentielService";
import { ReferentielsSchema } from "../models/ReferentielModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";
import { HttpCode } from "../enums/ErrorCodes";

export class ReferentielController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = ReferentielsSchema.parse(req.body);
      const referentiel = await ReferentielService.create(data);
      return ResponseFormatter.success(res, referentiel, SuccessCodes.COMPETENCE_CREATED, HttpCode.CREATED);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const referentiel = await ReferentielService.findAll();
      return ResponseFormatter.success(res, referentiel, SuccessCodes.COMPETENCE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const referentiel = await ReferentielService.findById(id);
      return ResponseFormatter.success(res, referentiel, SuccessCodes.COMPETENCE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const referentiel = await ReferentielService.update(id, data);
      return ResponseFormatter.success(res, referentiel, SuccessCodes.COMPETENCE_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await ReferentielService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.COMPETENCE_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
