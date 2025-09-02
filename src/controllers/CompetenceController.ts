import { Request, Response, NextFunction } from "express";
import { CompetenceService } from "../services/CompetenceService";
import { CompetencesSchema } from "../models/CompetencesModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";
import { HttpCode } from "../enums/ErrorCodes";

export class CompetenceController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = CompetencesSchema.parse(req.body);
      const competence = await CompetenceService.create(data);
      return ResponseFormatter.success(res, competence, SuccessCodes.COMPETENCE_CREATED, HttpCode.CREATED);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const competences = await CompetenceService.findAll();
      return ResponseFormatter.success(res, competences, SuccessCodes.COMPETENCE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const competence = await CompetenceService.findById(id);
      return ResponseFormatter.success(res, competence, SuccessCodes.COMPETENCE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const competence = await CompetenceService.update(id, data);
      return ResponseFormatter.success(res, competence, SuccessCodes.COMPETENCE_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await CompetenceService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.COMPETENCE_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
