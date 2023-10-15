import { Request, Response, response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";


// criação de categoria
class CreateCategoryController {
  async handle(req: Request, res:Response){
    const {name} = req.body;

    const createCategoryService = new CreateCategoryService(); // funcao service que faz toda logica

    const category =  await createCategoryService.execute({name}); // passando os dados para o metodo service

    return res.json(category)
  }
}

export {CreateCategoryController}