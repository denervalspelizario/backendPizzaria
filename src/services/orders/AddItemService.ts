import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

// Tipagem 
interface ItemRequest{
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest){ // adicionando  tipagem


    // fazendo a query 
    const order = await prismaClient.item.create({
      data:{
        order_id: order_id,
        product_id: product_id,
        amount: amount
      } 
    })

    return order; // retornando o valor da query
  }
}

export { AddItemService }