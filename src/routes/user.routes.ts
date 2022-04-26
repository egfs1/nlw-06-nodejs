import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ensureAdmin } from "../middlewares/ensureAdmins";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router()

const userController = new UserController()

router.get('/', ensureAuthenticated, userController.index)
router.post('/save',  ensureAuthenticated, ensureAdmin, userController.create)
router.post('/authenticate', userController.authenticate)
router.get('/compliments/send', ensureAuthenticated, userController.listUserSendCompliments)
router.get('/compliments/receive', ensureAuthenticated, userController.listUserReceiveCompliments)

export default router