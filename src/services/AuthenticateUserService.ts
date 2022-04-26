import prismaClient from "../prisma"
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface IAuthenticateRequest {
    email: string, 
    password: string
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){ 

        try {
            const user = await prismaClient.user.findUnique({
                where: {
                    email: email
                },
                rejectOnNotFound: true
            })

            const passwordMatch = await compare(password, user.password)

            if (passwordMatch){
                const token = sign({
                    email: user.email,
                }, process.env.JWT_PASSWORD, {
                    subject: user.id,
                    expiresIn: "1d"
                })
                
                return token
            }else {
                throw new Error("Email/Password incorrect")
            }

        } catch (error) {
            throw new Error("Email/Password incorrect")
        }

    }
}

export {AuthenticateUserService}