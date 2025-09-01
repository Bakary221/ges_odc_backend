import { Request, Response, NextFunction } from "express";
import { HttpCode } from "../enums/ErrorCodes";

export class ResponseFormatter {
  static success(res: Response, data: any, message: string, status: number = HttpCode.OK) {
    return res.status(status).json({
      success: true,
      message,
      data
    });
  }
}
