import prismaClient from "../prisma"
import {hash} from 'bcryptjs'

interface IUserRequest {
    name: string,
    email: string,
    password: string,
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, password, admin=false}: IUserRequest) {

        const passwordHash = await hash(password, 8)

        try {
            return await prismaClient.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passwordHash,
                    admin: admin
                },
            })
        } catch (e) {
            throw new Error("Email already exists")
        }
    }
}

export {CreateUserService}