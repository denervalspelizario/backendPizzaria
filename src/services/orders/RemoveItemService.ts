import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

// Tipagem 
interface RemoveItemRequest{
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: RemoveItemRequest){ // adicionando  tipagem


    // fazendo a query 
    const order = await prismaClient.order.delete({
      where:{
        id: item_id,
      } 
    })

    return order; // retornando o valor da query
  }
}

export { RemoveItemService }