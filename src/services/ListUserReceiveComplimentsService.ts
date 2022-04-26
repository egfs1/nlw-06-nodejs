import prismaClient from "../prisma"

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        return await prismaClient.compliment.findMany({
            where: {
                user_receiver_id: user_id
            }
        })
    }
}

export {ListUserReceiveComplimentsService}