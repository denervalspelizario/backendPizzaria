import prismaClient from "../../prisma";

// service que lista categorias
class ListCategoryService{
  // metodo
  async execute(){

    // buscando todos os dados de categoria
    const category = await prismaClient.categoria.findMany({
      
      // indicando oque vai ser mostrado
      select:{
        id: true,
        name: true,
      }
    })

    // retornando o resultado da requisição
    return category;

  }
}

export { ListCategoryService }