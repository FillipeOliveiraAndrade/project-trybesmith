import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  public service: OrdersService;
  
  constructor() {
    this.service = new OrdersService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(200).json(orders);
  };

  public register = async (request: Request, response: Response) => {
    const { id } = response.locals.user;
    const { productsIds } = request.body;
    const { message } = await this.service.register(id, productsIds);
    return response.status(201).json(message);
  };
}

export default OrdersController;