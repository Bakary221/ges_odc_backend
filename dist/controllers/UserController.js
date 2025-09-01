"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const UserModel_1 = require("../models/UserModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
class UserController {
    static async create(req, res, next) {
        try {
            const data = UserModel_1.UserSchema.parse(req.body);
            const user = await UserService_1.UserService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, user, SuccessCodes_1.SuccessCodes.USER_CREATED, 201);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const users = await UserService_1.UserService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, users, SuccessCodes_1.SuccessCodes.USER_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const user = await UserService_1.UserService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, user, SuccessCodes_1.SuccessCodes.USER_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const user = await UserService_1.UserService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, user, SuccessCodes_1.SuccessCodes.USER_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await UserService_1.UserService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.USER_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map