"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TagController_1 = require("../controllers/TagController");
const router = (0, express_1.Router)();
router.post("/", TagController_1.TagController.create);
router.get("/", TagController_1.TagController.getAll);
router.get("/:id", TagController_1.TagController.getOne);
router.put("/:id", TagController_1.TagController.update);
router.delete("/:id", TagController_1.TagController.delete);
exports.default = router;
//# sourceMappingURL=TagRoutes.js.map