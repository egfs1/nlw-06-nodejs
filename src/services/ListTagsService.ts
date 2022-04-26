import prismaClient from "../prisma";

class ListTagsService {
    async execute(){
        return await prismaClient.tag.findMany()
    }
}

export {ListTagsService}