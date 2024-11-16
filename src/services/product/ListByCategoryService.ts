import prismaClient from "../../prisma";


// tipagem do parametro de entrada do service
interface ProductRequest{
  category_id: string;
}

// service de listagem por categoria
class ListByCategoryService{

  // metodo do service
  async execute({ category_id }: ProductRequest){
    
    // fazendo a busca do produto pelo id da categoria
    const findByCategory = await prismaClient.produto.findMany({
      where:{
        category_id: category_id
      }
    })

    // retorna o resultado
    return findByCategory;

  }
}

export { ListByCategoryService }