import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

// Tipagem 
interface OrderRequest{
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest){ // adicionando  tipagem


    // fazendo a query 
    const order = await prismaClient.order.create({
      data:{
        table: table,
        name: name,
      } 
    })

    return order; // retornando o valor da query
  }
}

export { CreateOrderService }
