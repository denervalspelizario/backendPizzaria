import {Request, Response} from 'express'

import { ListByCategoryService } from '../../services/product/ListByCategoryService'

// controller
class ListByCategoryController{
  // metodo
  async handle(req: Request, res: Response){

    // pegando o id (as string estou informando que vai vir uma string)
    // via query ou seja pela url (query params) não via body
    const category_id = req.query.category_id as string;

    // chamando o service
    const listByCategory = new ListByCategoryService();

    // adicionando o id da categoria pelo service
    const products = await listByCategory.execute({
      category_id
    });

    // retornando o resultado(todos os produtos de uma categoria especifica)
    return res.json(products);

  }
}

export { ListByCategoryController }