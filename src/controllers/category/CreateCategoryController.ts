import {Request, Response} from 'express'

// importando o service
import { CreateCategoryService } from '../../services/category/CreateCategoryService'


// controler de categoria
class CreateCategoryController{
  // metodo
  async handle(req: Request, res: Response){
    
    // pegando o name do body passado
    const { name } = req.body;

    // chamando o service
    const createCategoryService = new CreateCategoryService();

    // passando o parametro name para o metodo do service
    const category = await createCategoryService.execute({
      name
    });

    // pegando o resultado do service e jogando em json
    return res.json(category);

  }
}

export { CreateCategoryController }