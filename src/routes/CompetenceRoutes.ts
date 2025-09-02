import { Router } from 'express';
import { CompetenceController } from '../controllers/CompetenceController';

const router = Router();

router.post("/", CompetenceController.create);
router.get("/", CompetenceController.getAll);
router.get("/:id", CompetenceController.getOne);
router.put("/:id", CompetenceController.update);
router.delete("/:id", CompetenceController.delete);

export default router;