import prismaClient from "../../prisma"; // acessando o banco

// serviço
// classe
class DetailUserService{

  // metodo
  async execute(user_id: string){
    

    // buscando usuario na tabela user com id passado
    const user = await prismaClient.user.findFirst({
      where: {
        id:user_id
      },
      select: { // determinando apenas oq será mostrado
        id:true,
        name:true,
        email:true
      }
    })

    // retorna o user encontrado
    return user;
  }
}

export { DetailUserService }