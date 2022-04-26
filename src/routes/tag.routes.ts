import { Router } from "express";
import { TagController } from "../controllers/TagController";
import { ensureAdmin } from "../middlewares/ensureAdmins";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router()

const tagController = new TagController()

router.get('/', ensureAuthenticated, tagController.index)
router.post('/save', ensureAuthenticated,ensureAdmin, tagController.create)

export default router