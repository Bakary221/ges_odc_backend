"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetenceController = void 0;
const CompetenceService_1 = require("../services/CompetenceService");
const CompetencesModel_1 = require("../models/CompetencesModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
const ErrorCodes_1 = require("../enums/ErrorCodes");
class CompetenceController {
    static async create(req, res, next) {
        try {
            const data = CompetencesModel_1.CompetencesSchema.parse(req.body);
            const competence = await CompetenceService_1.CompetenceService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, competence, SuccessCodes_1.SuccessCodes.COMPETENCE_CREATED, ErrorCodes_1.HttpCode.CREATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const competences = await CompetenceService_1.CompetenceService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, competences, SuccessCodes_1.SuccessCodes.COMPETENCE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const competence = await CompetenceService_1.CompetenceService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, competence, SuccessCodes_1.SuccessCodes.COMPETENCE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const competence = await CompetenceService_1.CompetenceService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, competence, SuccessCodes_1.SuccessCodes.COMPETENCE_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await CompetenceService_1.CompetenceService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.COMPETENCE_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.CompetenceController = CompetenceController;
//# sourceMappingURL=CompetenceController.js.map