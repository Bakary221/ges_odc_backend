import { Router } from "express";
import { ProfilSortieController } from "../controllers/ProfilSortieController";

const router = Router();

router.post("/", ProfilSortieController.create);
router.get("/", ProfilSortieController.getAll);
router.get("/:id", ProfilSortieController.getOne);
router.put("/:id", ProfilSortieController.update);
router.delete("/:id", ProfilSortieController.delete);

export default router;
