"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NiveauxController_1 = require("../controllers/NiveauxController");
const router = (0, express_1.Router)();
router.post("/", NiveauxController_1.NiveauxController.create);
router.get("/", NiveauxController_1.NiveauxController.getAll);
router.get("/:id", NiveauxController_1.NiveauxController.getOne);
router.put("/:id", NiveauxController_1.NiveauxController.update);
router.delete("/:id", NiveauxController_1.NiveauxController.delete);
exports.default = router;
//# sourceMappingURL=NiveauxRoutes.js.map