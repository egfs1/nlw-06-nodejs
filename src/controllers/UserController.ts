import {Request, Response} from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'
import { CreateUserService } from '../services/CreateUserService'
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'
import { ListUsersService } from '../services/ListUsersService'

class UserController {
    async index(request: Request, response: Response){
        const listUsersService = new ListUsersService()
    
        const users = await listUsersService.execute()
        
        return response.json(users)
    }

    async create(request: Request, response: Response) {
        const {name, email, password,  admin} = request.body

        const createUserService = new CreateUserService()

        const user = await createUserService.execute({name, email, password, admin})

        return response.json(user)
    }

    async listUserSendCompliments(request: Request, response: Response) {
        const {user_id} = request

        const listUserSendComplimentsService = new ListUserSendComplimentsService()

        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }

    async listUserReceiveCompliments(request: Request, response: Response) {
        const {user_id} = request

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService()

        const compliments = await listUserReceiveComplimentsService.execute(user_id)

        return response.json(compliments)
    }

    async authenticate(request: Request, response: Response) {
        const {email, password} = request.body

        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute({email, password})

        return response.json(token)
    }
}

export {UserController}