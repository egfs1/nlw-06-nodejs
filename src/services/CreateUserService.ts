import prismaClient from "../prisma"

interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, admin}: IUserRequest) {
        try {
            return await prismaClient.users.create({
                data: {
                    name: name,
                    email: email,
                    admin: admin
                },
            })
        } catch (e) {
            throw new Error("Email already exists")
        }
    }
}

export {CreateUserService}