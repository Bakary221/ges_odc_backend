"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauxController = void 0;
const NiveauxService_1 = require("../services/NiveauxService");
const NiveauxModel_1 = require("../models/NiveauxModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
class NiveauxController {
    static async create(req, res, next) {
        try {
            const data = NiveauxModel_1.NiveauxSchema.parse(req.body);
            const niveau = await NiveauxService_1.NiveauxService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, niveau, SuccessCodes_1.SuccessCodes.NIVEAU_CREATED, 201);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const niveaux = await NiveauxService_1.NiveauxService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, niveaux, SuccessCodes_1.SuccessCodes.NIVEAU_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const niveau = await NiveauxService_1.NiveauxService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, niveau, SuccessCodes_1.SuccessCodes.NIVEAU_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const niveau = await NiveauxService_1.NiveauxService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, niveau, SuccessCodes_1.SuccessCodes.NIVEAU_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await NiveauxService_1.NiveauxService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.NIVEAU_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.NiveauxController = NiveauxController;
//# sourceMappingURL=NiveauxController.js.map