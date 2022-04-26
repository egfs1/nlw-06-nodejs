import {Request, Response} from 'express'
import {CreateComplimentService} from '../services/CreateComplimentService'

class ComplimentController {
    async create(request: Request, response: Response) {
        const {user_receiver_id, tag_id, message} = request.body
        const {user_id} = request

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({user_sender_id: user_id, user_receiver_id, tag_id, message})

        return response.json(compliment)
    }
}

export {ComplimentController}