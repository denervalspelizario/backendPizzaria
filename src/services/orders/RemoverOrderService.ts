import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

// Tipagem 
interface RemoveOrderRequest{
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: RemoveOrderRequest){ // adicionando  tipagem

    // fazendo a query 
    const order = await prismaClient.order.delete({
      where:{
        id: order_id,
      } 
    })

    return order; // retornando o valor da query
  }
}

export { RemoveOrderService }
