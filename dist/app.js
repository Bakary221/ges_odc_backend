"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const TagRoutes_1 = __importDefault(require("./routes/TagRoutes"));
const ErrorHandler_1 = require("./middlewares/ErrorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API en marche ...');
});
// Routes
app.use("/api/users", UserRoutes_1.default);
app.use("/api/tags", TagRoutes_1.default);
// Middleware d'erreur
app.use(ErrorHandler_1.ErrorHandler.handle);
exports.default = app;
//# sourceMappingURL=app.js.map