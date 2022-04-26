import {Request, Response} from 'express'
import {CreateTagService} from '../services/CreateTagService'
import { ListTagsService } from '../services/ListTagsService'

class TagController {
    
    async index(request: Request, response: Response){
        const listTagsService = new ListTagsService()
    
        const tags = await listTagsService.execute()
        
        return response.json(tags)
    }

    async create(request: Request, response: Response) {
        const {name} = request.body

        const createTagService = new CreateTagService()

        const tag = await createTagService.execute({name})

        return response.json(tag)
    }

}

export {TagController}