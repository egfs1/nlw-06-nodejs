import {Request, Response, NextFunction} from 'express'
import prismaClient from '../prisma'

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const {user_id} = request

    const user = await prismaClient.user.findUnique({
        where: {
            id: user_id
        }
    })
    if(user.admin){
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}