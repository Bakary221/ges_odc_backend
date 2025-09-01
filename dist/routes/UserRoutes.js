"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router.post("/", UserController_1.UserController.create);
router.get("/", UserController_1.UserController.getAll);
router.get("/:id", UserController_1.UserController.getOne);
router.put("/:id", UserController_1.UserController.update);
router.delete("/:id", UserController_1.UserController.delete);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map