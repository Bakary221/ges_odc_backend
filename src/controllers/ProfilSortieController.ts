import { Request, Response, NextFunction } from "express";
import { ProfilSortieService } from "../services/ProfilSortieService";
import { ProfilSortieSchema } from "../models/ProfilSortieModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";

export class ProfilSortieController {
    
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = ProfilSortieSchema.parse(req.body);
      const profilSortie = await ProfilSortieService.create(data);
      return ResponseFormatter.success(res, profilSortie, SuccessCodes.PROFIL_SORTIE_CREATED, 201);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const profilsSortie = await ProfilSortieService.findAll();
      return ResponseFormatter.success(res, profilsSortie, SuccessCodes.PROFIL_SORTIE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const profilSortie = await ProfilSortieService.findById(id);
      return ResponseFormatter.success(res, profilSortie, SuccessCodes.PROFIL_SORTIE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const profilSortie = await ProfilSortieService.update(id, data);
      return ResponseFormatter.success(res, profilSortie, SuccessCodes.PROFIL_SORTIE_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await ProfilSortieService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.PROFIL_SORTIE_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
