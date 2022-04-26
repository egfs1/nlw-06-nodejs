import {Router} from 'express'
import userRouter from './user.routes'
import tagRouter from './tag.routes'
import complimentRouter from './compliment.routes'

const router = Router()

router.use('/users',userRouter)
router.use('/tags',tagRouter)
router.use('/compliments',complimentRouter)

export default router