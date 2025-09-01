import { Request, Response, NextFunction } from "express";
import { TagService } from "../services/TagService";
import { TagsSchema } from "../models/TagsModel";
import { ResponseFormatter } from "../middlewares/ResponseFormatter";
import { SuccessCodes } from "../enums/SuccessCodes";
import { HttpCode } from "../enums/ErrorCodes";

export class TagController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = TagsSchema.parse(req.body);
      const tag = await TagService.create(data);
      return ResponseFormatter.success(res, tag, SuccessCodes.TAG_CREATED, HttpCode.CREATED);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tags = await TagService.findAll();
      return ResponseFormatter.success(res, tags, SuccessCodes.TAG_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const tag = await TagService.findById(id);
      return ResponseFormatter.success(res, tag, SuccessCodes.TAG_FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      const data = req.body;
      const tag = await TagService.update(id, data);
      return ResponseFormatter.success(res, tag, SuccessCodes.TAG_UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id ?? "0");
      await TagService.delete(id);
      return ResponseFormatter.success(res, null, SuccessCodes.TAG_DELETED);
    } catch (err) {
      next(err);
    }
  }
}
