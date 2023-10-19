import { Request, Response } from "express";
import { ListOrderService } from "../../services/orders/ListOrderService";


class ListOrderController{
  async handle(req: Request, res: Response){

    const listOrderService = new ListOrderService();

    const order = await listOrderService.execute();

    return res.json(order);
  }
}

export { ListOrderController }