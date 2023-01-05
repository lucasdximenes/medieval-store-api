import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { CreateProduct, CreatedProduct, Product } from '../interfaces/product.interface';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public create = async (product: CreateProduct): Promise<CreatedProduct> => {
    const createdProduct = await this.productModel.create(product);
    return createdProduct;
  };

  public getAll = async (): Promise<Product[]> => {
    const products = await this.productModel.getAll();
    return products;
  };
}
