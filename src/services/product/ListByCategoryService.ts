import prismaClient from "../../prisma";

interface ProductRequest{
  category_id: string
}

// buscando todos os produtos por categoria
class ListByCategoryService{
  async execute({category_id}: ProductRequest){
    
    // fazendo a query buscando da tabelas products de acordo com a category_id
    const findByCateogry = await prismaClient.product.findMany({
      where:{
        category_id: category_id
      }
    })

    return findByCateogry;
  }
}

export { ListByCategoryService }