import {Request, Response } from 'express'

// importando o service
import { CreateProductService } from '../../services/product/CreateProductService'

// controller
class CreateProductController{
  // metodo
  async handle(req: Request, res: Response){

    // pegando os dados do body para criar o produto
    const { name, price, description, category_id } = req.body;

    let banner = '';

    // chamando o service
    const createProductService = new CreateProductService();

    // validando se usuario mando o arquivo
    if(!req.file){
      // senão manda um erro
      throw new Error("error upload file")
      
    } else {

      // se passou ...

      // pegando o arquivo
      const { originalname, filename: banner} = req.file;

      

      // passando os dados do body para o metodo do service
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id
      });

      // retornando o resultado em json
      return res.json(product)
    }  
  }
}

export { CreateProductController }