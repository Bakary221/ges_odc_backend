"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompetenceController_1 = require("../controllers/CompetenceController");
const router = (0, express_1.Router)();
router.post("/", CompetenceController_1.CompetenceController.create);
router.get("/", CompetenceController_1.CompetenceController.getAll);
router.get("/:id", CompetenceController_1.CompetenceController.getOne);
router.put("/:id", CompetenceController_1.CompetenceController.update);
router.delete("/:id", CompetenceController_1.CompetenceController.delete);
exports.default = router;
//# sourceMappingURL=CompetenceRoutes.js.map