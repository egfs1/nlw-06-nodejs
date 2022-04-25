import {Router} from 'express'
import userRouter from './user.routes'
import tagRouter from './tag.routes'
import {ensureAdmin} from '../middlewares/ensureAdmins'

const router = Router()

router.use('/',userRouter)
router.use('/',ensureAdmin,tagRouter)

export default router