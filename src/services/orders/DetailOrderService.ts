import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

interface DetailOrderRequest{
  order_id: string;
}

class DetailOrderService {
  async execute({order_id}: DetailOrderRequest){ // adicionando  tipagem

    // fazendo a query 
    const order = await prismaClient.item.findMany({
      where:{
        order_id: order_id 
      },
      include: { // incluindo nesta resposta
        product: true,
        order: true,
      }
     
    })

    return order; // retornando o valor da query
  }
}

export { DetailOrderService }