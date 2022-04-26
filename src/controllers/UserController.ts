import {Request, Response} from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'
import { CreateUserService } from '../services/CreateUserService'

class UserController {
    async create(request: Request, response: Response) {
        const {name, email, password,  admin} = request.body

        const createUserService = new CreateUserService()

        const user = await createUserService.execute({name, email, password, admin})

        return response.json(user)
    }
    async list(request: Request, response: Response) {

    }
    async authenticate(request: Request, response: Response) {
        const {email, password} = request.body

        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute({email, password})

        return response.json(token)
    }
}

export {UserController}