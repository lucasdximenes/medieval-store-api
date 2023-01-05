import { Pool, ResultSetHeader } from 'mysql2/promise';
import { CreateProduct, CreatedProduct } from '../interfaces/product.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: CreateProduct): Promise<CreatedProduct> => {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  };
}
