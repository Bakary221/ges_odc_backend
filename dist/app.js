"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const TagRoutes_1 = __importDefault(require("./routes/TagRoutes"));
const CompetenceRoutes_1 = __importDefault(require("./routes/CompetenceRoutes"));
const ReferentielRoutes_1 = __importDefault(require("./routes/ReferentielRoutes"));
const ProfileRoutes_1 = __importDefault(require("./routes/ProfileRoutes"));
const PromoRoutes_1 = __importDefault(require("./routes/PromoRoutes"));
const NiveauxRoutes_1 = __importDefault(require("./routes/NiveauxRoutes"));
const ProfilSortieRoutes_1 = __importDefault(require("./routes/ProfilSortieRoutes"));
const ErrorHandler_1 = require("./middlewares/ErrorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API en marche ...');
});
// Routes
app.use("/api/users", UserRoutes_1.default);
app.use("/api/tags", TagRoutes_1.default);
app.use("/api/competences", CompetenceRoutes_1.default);
app.use("/api/referentiels", ReferentielRoutes_1.default);
app.use('/api/profiles', ProfileRoutes_1.default);
app.use('/api/promos', PromoRoutes_1.default);
app.use("/api/niveaux", NiveauxRoutes_1.default);
app.use("/api/profils-sortie", ProfilSortieRoutes_1.default);
// Middleware d'erreur
app.use(ErrorHandler_1.ErrorHandler.handle);
exports.default = app;
//# sourceMappingURL=app.js.map