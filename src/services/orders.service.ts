import { IOrders } from '../interfaces/order.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.models';

class OrdersService {
  public model: OrdersModel;
  
  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrdersService;