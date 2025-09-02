"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReferentielController_1 = require("../controllers/ReferentielController");
const router = (0, express_1.Router)();
router.post("/", ReferentielController_1.ReferentielController.create);
router.get("/", ReferentielController_1.ReferentielController.getAll);
router.get("/:id", ReferentielController_1.ReferentielController.getOne);
router.put("/:id", ReferentielController_1.ReferentielController.update);
router.delete("/:id", ReferentielController_1.ReferentielController.delete);
exports.default = router;
//# sourceMappingURL=ReferentielRoutes.js.map