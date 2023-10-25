import prismaClient from "../../prisma"; 


class ListOrderService {
  async execute(){ 

    // fazendo a query 
    const order = await prismaClient.order.findMany({
      where:{
        status: false, 
        draft: false
      },
      orderBy: { 
        created_at: 'desc' 
      }
       
    })

    return order; 
  }
}

export { ListOrderService }