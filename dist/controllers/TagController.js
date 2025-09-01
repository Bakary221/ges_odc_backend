"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagController = void 0;
const TagService_1 = require("../services/TagService");
const TagsModel_1 = require("../models/TagsModel");
const ResponseFormatter_1 = require("../middlewares/ResponseFormatter");
const SuccessCodes_1 = require("../enums/SuccessCodes");
const ErrorCodes_1 = require("../enums/ErrorCodes");
class TagController {
    static async create(req, res, next) {
        try {
            const data = TagsModel_1.TagsSchema.parse(req.body);
            const tag = await TagService_1.TagService.create(data);
            return ResponseFormatter_1.ResponseFormatter.success(res, tag, SuccessCodes_1.SuccessCodes.TAG_CREATED, ErrorCodes_1.HttpCode.CREATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getAll(req, res, next) {
        try {
            const tags = await TagService_1.TagService.findAll();
            return ResponseFormatter_1.ResponseFormatter.success(res, tags, SuccessCodes_1.SuccessCodes.TAG_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const tag = await TagService_1.TagService.findById(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, tag, SuccessCodes_1.SuccessCodes.TAG_FETCHED);
        }
        catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            const data = req.body;
            const tag = await TagService_1.TagService.update(id, data);
            return ResponseFormatter_1.ResponseFormatter.success(res, tag, SuccessCodes_1.SuccessCodes.TAG_UPDATED);
        }
        catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id ?? "0");
            await TagService_1.TagService.delete(id);
            return ResponseFormatter_1.ResponseFormatter.success(res, null, SuccessCodes_1.SuccessCodes.TAG_DELETED);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.TagController = TagController;
//# sourceMappingURL=TagController.js.map