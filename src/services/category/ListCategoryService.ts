import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco


// Tipagem 
interface CategoryRequest{
  name: string;
}


class ListCategoryService {
  async execute(){ // adicionando  tipagem

    // listando(findMany) todos itens de category e retornando apenas(select) id e name
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    })  

    return category;
  }
}

export {
  ListCategoryService
}