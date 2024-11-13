import prismaClient from "../../prisma";


// tipagem do parametro de entrada do metodo execute
interface CategoryRequest{
  name: string;
}


// service de categoria
class CreateCategoryService{
  // método
  async execute({ name }: CategoryRequest){
    
    // validando
    if(name === ''){
      throw new Error('Nome invalido')
    }

    // criando uma nova categoria 
    const category = await prismaClient.categoria.create({
      // passando o nome da nova categoria
      data:{
        name: name,
      },
      select:{ //oque eu quero que retorne
        id: true, // id e nome
        name: true,
      }
    })


    // retornando a categoria
    return category;

  }
}

export { CreateCategoryService }