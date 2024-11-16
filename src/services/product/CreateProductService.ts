import prismaClient from "../../prisma"; // acessando banco

// tipagem do parametro de entrada
// com todos os dados de um produto
interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

// service
class CreateProductService{
  // metodo
  async execute({name, price, description, banner, category_id}: ProductRequest){

    // criando o produto usando dados passados pelo controller
    const product = await prismaClient.produto.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id
      }
    })

    // retorna o produto que foi cadastrado
    return product

  }
}

export { CreateProductService }