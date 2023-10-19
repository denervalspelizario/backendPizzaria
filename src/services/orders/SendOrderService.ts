import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

// Tipagem 
interface SendOrderRequest{
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: SendOrderRequest){ // adicionando  tipagem

    // fazendo a query 
    const order = await prismaClient.order.update({
      where:{
        id: order_id, // update neste item
      },
      data: {  // dado que será adicionado no lugar, neste caso transformando o draft para false e sair do rascunho
        draft:false
      } 
    })

    return order; // retornando o valor da query
  }
}

export { SendOrderService }