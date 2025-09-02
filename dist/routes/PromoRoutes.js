"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PromoController_1 = require("../controllers/PromoController");
const router = (0, express_1.Router)();
router.post("/", PromoController_1.PromoController.create);
router.get("/", PromoController_1.PromoController.getAll);
router.get("/:id", PromoController_1.PromoController.getOne);
router.put("/:id", PromoController_1.PromoController.update);
router.delete("/:id", PromoController_1.PromoController.delete);
exports.default = router;
//# sourceMappingURL=PromoRoutes.js.map