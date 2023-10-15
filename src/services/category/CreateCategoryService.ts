import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco


// Tipagem 
interface CategoryRequest{
  name: string;
}


class CreateCategoryService {
  async execute({ name }: CategoryRequest){ // adicionando  tipagem

    if(name === ''){
      throw new Error('Name invalid')
    }
    
    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: { // só vai aparecer retornar os itens que estiverem true o resto vai ocultar
        id: true,
        name: true,
      }  
    })
    
    return category;
  }
}

export {
  CreateCategoryService
}