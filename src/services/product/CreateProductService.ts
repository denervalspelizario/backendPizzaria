import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco

// Tipagem 
interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, description, banner, category_id }: ProductRequest){ // adicionando  tipagem


    // fazendo a query 
    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      } 
    })

    return product; // retornando o valor da query
  }
}

export { CreateProductService }

