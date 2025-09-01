import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/UserService";
import { UserSchema } from "../models/UserModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";

export class UserController {
    
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = UserSchema.parse(req.body);
      const user = await UserService.create(data);
      return ResponseFormatter.success(res, user, SuccessCodes.USER_CREATED, 201);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.findAll();
      return ResponseFormatter.success(res, users, SuccessCodes.USER_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const user = await UserService.findById(id);
      return ResponseFormatter.success(res, user, SuccessCodes.USER_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const user = await UserService.update(id, data);
      return ResponseFormatter.success(res, user, SuccessCodes.USER_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await UserService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.USER_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
