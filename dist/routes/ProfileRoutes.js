"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileController_1 = require("../controllers/ProfileController");
const router = (0, express_1.Router)();
router.post("/", ProfileController_1.ProfileController.create);
router.get("/", ProfileController_1.ProfileController.getAll);
router.get("/:id", ProfileController_1.ProfileController.getOne);
router.put("/:id", ProfileController_1.ProfileController.update);
router.delete("/:id", ProfileController_1.ProfileController.delete);
exports.default = router;
//# sourceMappingURL=ProfileRoutes.js.map