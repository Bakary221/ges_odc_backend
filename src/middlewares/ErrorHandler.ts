import { Request, Response, NextFunction } from "express";
import { ErrorCodes } from "../enums/ErrorCodes";

export class ErrorHandler {
  static handle(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(err.status || 500).json({
      success: false,
      error: err.message || ErrorCodes.INTERNAL_ERROR
    });
  }
}
