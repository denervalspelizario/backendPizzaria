import { Response, Request } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController{
  async handle(req: Request, res: Response){
    
    // category_id passado pelo usuario na url(query)
    const category_id = req.query.category_id as string;

    // acessando service
    const listByCategory = new ListByCategoryService();

    // acionando o metodo de service com o parametro recebido pelo usuário
    const products = await listByCategory.execute({
      category_id
    })

    return res.json(products);

  }
}

export {ListByCategoryController}