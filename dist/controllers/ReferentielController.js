"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferentielController = void 0;
const ReferentielService_1 = require("../services/ReferentielService");
const ReferentielModel_1 = require("../models/ReferentielModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
const ErrorCodes_1 = require("../enums/ErrorCodes");
class ReferentielController {
    static async create(req, res, next) {
        try {
            const data = ReferentielModel_1.ReferentielsSchema.parse(req.body);
            const referentiel = await ReferentielService_1.ReferentielService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, referentiel, SuccessCodes_1.SuccessCodes.COMPETENCE_CREATED, ErrorCodes_1.HttpCode.CREATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const referentiel = await ReferentielService_1.ReferentielService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, referentiel, SuccessCodes_1.SuccessCodes.COMPETENCE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const referentiel = await ReferentielService_1.ReferentielService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, referentiel, SuccessCodes_1.SuccessCodes.COMPETENCE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const referentiel = await ReferentielService_1.ReferentielService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, referentiel, SuccessCodes_1.SuccessCodes.COMPETENCE_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await ReferentielService_1.ReferentielService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.COMPETENCE_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ReferentielController = ReferentielController;
//# sourceMappingURL=ReferentielController.js.map