import { Router } from "express";
import { NiveauxController } from "../controllers/NiveauxController";

const router = Router();

router.post("/", NiveauxController.create);
router.get("/", NiveauxController.getAll);
router.get("/:id", NiveauxController.getOne);
router.put("/:id", NiveauxController.update);
router.delete("/:id", NiveauxController.delete);

export default router;
