import prismaClient from "../prisma"

interface ITagRequest {
    name: string,
}

class CreateTagService {
    async execute({name}: ITagRequest) {
        try {
            return await prismaClient.tag.create({
                data: {
                    name: name,
                },
            })
        } catch (e) {
            throw new Error("Tag already exists")
        }
    }
}

export {CreateTagService}