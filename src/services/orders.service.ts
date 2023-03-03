import { IOrders } from '../interfaces/order.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.models';
import ProductsModel from '../models/products.models';

class OrdersService {
  public model: OrdersModel;

  public productsModel: ProductsModel;
  
  constructor() {
    this.model = new OrdersModel(connection);
    this.productsModel = new ProductsModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async register(userId: number, productsIds: number[]) {
    const orderId = await this.model.register(userId);
    await this.productsModel.update(productsIds, orderId);
    return { stts: null, message: { userId, productsIds } };
  }
}

export default OrdersService;