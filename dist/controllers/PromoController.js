"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoController = void 0;
const PromoService_1 = require("../services/PromoService");
const PromoModel_1 = require("../models/PromoModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
class PromoController {
    static async create(req, res, next) {
        try {
            const data = PromoModel_1.PromoSchema.parse(req.body);
            const promo = await PromoService_1.PromoService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, promo, SuccessCodes_1.SuccessCodes.PROMO_CREATED, 201);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const promos = await PromoService_1.PromoService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, promos, SuccessCodes_1.SuccessCodes.PROMO_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const promo = await PromoService_1.PromoService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, promo, SuccessCodes_1.SuccessCodes.PROMO_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const promo = await PromoService_1.PromoService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, promo, SuccessCodes_1.SuccessCodes.PROMO_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await PromoService_1.PromoService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.PROMO_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.PromoController = PromoController;
//# sourceMappingURL=PromoController.js.map