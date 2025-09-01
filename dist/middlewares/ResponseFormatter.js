"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFormatter = void 0;
const ErrorCodes_1 = require("../enums/ErrorCodes");
class ResponseFormatter {
    static success(res, data, message, status = ErrorCodes_1.HttpCode.OK) {
        return res.status(status).json({
            success: true,
            message,
            data
        });
    }
}
exports.ResponseFormatter = ResponseFormatter;
//# sourceMappingURL=ResponseFormatter.js.map