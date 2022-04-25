import {Request, Response} from 'express'
import {CreateTagService} from '../services/CreateTagService'

class TagController {
    async create(request: Request, response: Response) {
        const {name} = request.body

        const createTagService = new CreateTagService()

        const tag = await createTagService.execute({name})

        return response.json(tag)
    }
    async list(request: Request, response: Response) {

    }
}

export {TagController}