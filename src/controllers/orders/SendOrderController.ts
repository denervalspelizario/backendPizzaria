import { Request, Response } from "express";
import { SendOrderService } from "../../services/orders/SendOrderService";




class SendOrderController{
  async handle(req: Request, res: Response){

                     // indicando que order_id será uma string   
    const { order_id } = req.body;

    const sendOrderService = new SendOrderService();

    const order = await sendOrderService.execute({ order_id });

    return res.json(order);
  }
}

export { SendOrderController }