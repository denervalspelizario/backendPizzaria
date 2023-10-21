import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

interface FinishOrderRequest{
  order_id: string;
}

class FinishOrderService {
  async execute({order_id}: FinishOrderRequest){ // adicionando  tipagem

    // fazendo a query 
    const order = await prismaClient.order.update({
      where:{
        id: order_id 
      },
      data: { // incluindo nesta resposta
        status: true, 
      }
     
    })
    // essa tabela tem product_id e order_id referenciado com id tabela ordem e id de tabela product
    // o que estou INCLUINDO no where então na saida vai ter todos os dados do item + 

    return order; // retornando o valor da query
  }
}

export { FinishOrderService }