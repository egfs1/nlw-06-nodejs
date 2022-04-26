import prismaClient from "../prisma"

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        return await prismaClient.compliment.findMany({
            where: {
                user_sender_id: user_id
            }
        })
    }
}

export {ListUserSendComplimentsService}