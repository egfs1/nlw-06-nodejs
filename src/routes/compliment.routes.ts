import { Router } from "express";
import {ComplimentController} from "../controllers/ComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router()

const complimentController = new ComplimentController()

router.post('/save', ensureAuthenticated, complimentController.create)

export default router