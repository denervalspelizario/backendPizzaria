import {Request, Response} from 'express'
import { ListCategoryService } from '../../services/category/ListCategoryService'

// controler de listar categoria
class ListCategoryController{
  //metodo
  async handle(req: Request, res: Response){
    const listCategoryService = new ListCategoryService();

    // chamando o service
    const category = await listCategoryService.execute();

    return res.json(category);

  }
}

export { ListCategoryController }