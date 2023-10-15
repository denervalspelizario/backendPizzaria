import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco


class DetailUserService {
  async execute(user_id: string){
    
    // buscando la no banco se existe id igual o user_id 
    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id
      },
      select: {
        id:true,
        name: true,
        email: true
      }
    })
  
    return user;
  }
}

export {
  DetailUserService
}