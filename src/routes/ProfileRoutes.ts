import { Router } from "express";
import { ProfileController } from "../controllers/ProfileController";

const router = Router();

router.post("/", ProfileController.create);
router.get("/", ProfileController.getAll);
router.get("/:id", ProfileController.getOne);
router.put("/:id", ProfileController.update);
router.delete("/:id", ProfileController.delete);

export default router;
