"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilSortieController = void 0;
const ProfilSortieService_1 = require("../services/ProfilSortieService");
const ProfilSortieModel_1 = require("../models/ProfilSortieModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
class ProfilSortieController {
    static async create(req, res, next) {
        try {
            const data = ProfilSortieModel_1.ProfilSortieSchema.parse(req.body);
            const profilSortie = await ProfilSortieService_1.ProfilSortieService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, profilSortie, SuccessCodes_1.SuccessCodes.PROFIL_SORTIE_CREATED, 201);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const profilsSortie = await ProfilSortieService_1.ProfilSortieService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, profilsSortie, SuccessCodes_1.SuccessCodes.PROFIL_SORTIE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const profilSortie = await ProfilSortieService_1.ProfilSortieService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, profilSortie, SuccessCodes_1.SuccessCodes.PROFIL_SORTIE_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const profilSortie = await ProfilSortieService_1.ProfilSortieService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, profilSortie, SuccessCodes_1.SuccessCodes.PROFIL_SORTIE_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await ProfilSortieService_1.ProfilSortieService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.PROFIL_SORTIE_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ProfilSortieController = ProfilSortieController;
//# sourceMappingURL=ProfilSortieController.js.map