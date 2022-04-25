import { Router } from "express";
import { TagController } from "../controllers/TagController";

const router = Router()

const tagController = new TagController()

router.post('/tags', tagController.create)

export default router