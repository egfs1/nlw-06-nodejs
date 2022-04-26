import prismaClient from "../prisma"

class ListUsersService {
    async execute() {
        return await prismaClient.user.findMany() // need to exclude passwords
    }
}

export {ListUsersService}