import { Router } from 'express';
import { TagController } from '../controllers/TagController';

const router = Router();

router.post("/", TagController.create);
router.get("/", TagController.getAll);
router.get("/:id", TagController.getOne);
router.put("/:id", TagController.update);
router.delete("/:id", TagController.delete);

export default router;