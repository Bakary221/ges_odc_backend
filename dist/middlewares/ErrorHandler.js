"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const ErrorCodes_1 = require("../enums/ErrorCodes");
class ErrorHandler {
    static handle(err, req, res, next) {
        console.error(err);
        res.status(err.status || 500).json({
            success: false,
            error: err.message || ErrorCodes_1.ErrorCodes.INTERNAL_ERROR
        });
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map