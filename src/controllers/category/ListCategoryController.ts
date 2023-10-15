import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService"; 


// Listando categoria
class ListCategoryController {
  async handle(req: Request, res:Response){
  

    const listCategoryService = new ListCategoryService(); // funcao service que faz toda logica

    const category =  await listCategoryService.execute(); // passando os dados para o metodo service

    return res.json(category)
  }
}

export {ListCategoryController}

