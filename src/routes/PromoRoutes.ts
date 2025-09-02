import { Router } from "express";
import { PromoController } from "../controllers/PromoController";

const router = Router();

router.post("/", PromoController.create);
router.get("/", PromoController.getAll);
router.get("/:id", PromoController.getOne);
router.put("/:id", PromoController.update);
router.delete("/:id", PromoController.delete);

export default router;
