import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco


class ListOrderService {
  async execute(){ // adicionando  tipagem

    // fazendo a query 
    const order = await prismaClient.order.findMany({
      where:{
        status: false, 
        draft: false
      },
      orderBy: { 
        created_at: 'desc' // por ordem descrescente
      }
       
    })

    return order; // retornando o valor da query
  }
}

export { ListOrderService }