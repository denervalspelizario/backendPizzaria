import { Request, Response } from "express";
import { RemoveItemService } from "../../services/orders/RemoveItemService";



class RemoveItemController{
  async handle(req: Request, res: Response){

                     // indicando que item_id será uma string   
    const item_id = req.query.item_id as string;
    

    const removeItemService = new RemoveItemService();

    const order = await removeItemService.execute({ item_id });

    return res.json(order);
  }
}

export { RemoveItemController }