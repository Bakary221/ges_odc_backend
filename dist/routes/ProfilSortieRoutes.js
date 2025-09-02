"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfilSortieController_1 = require("../controllers/ProfilSortieController");
const router = (0, express_1.Router)();
router.post("/", ProfilSortieController_1.ProfilSortieController.create);
router.get("/", ProfilSortieController_1.ProfilSortieController.getAll);
router.get("/:id", ProfilSortieController_1.ProfilSortieController.getOne);
router.put("/:id", ProfilSortieController_1.ProfilSortieController.update);
router.delete("/:id", ProfilSortieController_1.ProfilSortieController.delete);
exports.default = router;
//# sourceMappingURL=ProfilSortieRoutes.js.map