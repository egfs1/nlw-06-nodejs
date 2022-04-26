import { Router } from "express";
import {ComplimentController} from "../controllers/ComplimentController";

const router = Router()

const complimentController = new ComplimentController()

router.post('/compliments', complimentController.create)

export default router