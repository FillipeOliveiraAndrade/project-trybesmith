import { IProduct } from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/products.models';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    return this.model.createProduct(product);
  }
}

export default ProductsService;