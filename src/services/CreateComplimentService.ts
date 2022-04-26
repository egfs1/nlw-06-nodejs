import prismaClient from "../prisma"

interface IComplimentRequest {
    user_sender_id: string,
    user_receiver_id: string,
    tag_id: string,
    message: string
}

class CreateComplimentService {
    async execute({user_sender_id, user_receiver_id, tag_id, message}: IComplimentRequest) {
        try {
            if(user_sender_id===user_receiver_id){
                throw new Error("Incorrect user receiver")
            }

            return await prismaClient.compliment.create({
                data: {
                    user_sender_id: user_sender_id,
                    user_receiver_id: user_receiver_id,
                    tag_id: tag_id,
                    message: message,
                },
            })
        } catch (e) {
            throw new Error("User/Tag invalid")
        }
    }
}

export {CreateComplimentService}