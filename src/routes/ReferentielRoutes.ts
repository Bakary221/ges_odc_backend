import { Router } from 'express';
import { ReferentielController } from '../controllers/ReferentielController';

const router = Router();

router.post("/", ReferentielController.create);
router.get("/", ReferentielController.getAll);
router.get("/:id", ReferentielController.getOne);
router.put("/:id", ReferentielController.update);
router.delete("/:id", ReferentielController.delete);

export default router;