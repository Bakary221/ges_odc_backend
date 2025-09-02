"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const ProfileService_1 = require("../services/ProfileService");
const ProfileModel_1 = require("../models/ProfileModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
class ProfileController {
    static async create(req, res, next) {
        try {
            const data = ProfileModel_1.ProfileSchema.parse(req.body);
            const profile = await ProfileService_1.ProfileService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, profile, SuccessCodes_1.SuccessCodes.PROFILE_CREATED, 201);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const profiles = await ProfileService_1.ProfileService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, profiles, SuccessCodes_1.SuccessCodes.PROFILE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const profile = await ProfileService_1.ProfileService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, profile, SuccessCodes_1.SuccessCodes.PROFILE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const profile = await ProfileService_1.ProfileService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, profile, SuccessCodes_1.SuccessCodes.PROFILE_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await ProfileService_1.ProfileService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.PROFILE_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ProfileController = ProfileController;
//# sourceMappingURL=ProfileController.js.map