import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product.interface';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IProduct[];
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    
    const query = `
      INSERT INTO Trybesmith.products
      (name, amount) VALUES (?, ?)
    `;
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async update(productsIds: number[], orderId: number) {
    const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const result = productsIds.map((e) => this.connection.execute(query, [orderId, e]));
    await Promise.all(result);
    console.log(result);
  }
}

export default ProductsModel;