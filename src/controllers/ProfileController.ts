import { Request, Response, NextFunction } from "express";
import { ProfileService } from "../services/ProfileService";
import { ProfileSchema } from "../models/ProfileModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";

export class ProfileController {
    
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = ProfileSchema.parse(req.body);
      const profile = await ProfileService.create(data);
      return ResponseFormatter.success(res, profile, SuccessCodes.PROFILE_CREATED, 201);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const profiles = await ProfileService.findAll();
      return ResponseFormatter.success(res, profiles, SuccessCodes.PROFILE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const profile = await ProfileService.findById(id);
      return ResponseFormatter.success(res, profile, SuccessCodes.PROFILE_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const profile = await ProfileService.update(id, data);
      return ResponseFormatter.success(res, profile, SuccessCodes.PROFILE_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await ProfileService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.PROFILE_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
