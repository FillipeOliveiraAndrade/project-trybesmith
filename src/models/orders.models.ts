import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrders } from '../interfaces/order.interface';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `
      SELECT o.id, o.user_id AS userId, 
      JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.orders AS o INNER JOIN
      Trybesmith.products AS p ON p.order_id = o.id GROUP BY o.id;
    `;
    
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IOrders[];
  }

  public async register(userId: number): Promise<number> {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUE (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    return insertId;
  }
}

export default OrdersModel;
