import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product, CreateProduct, CreatedProduct } from '../interfaces/product.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: CreateProduct): Promise<CreatedProduct> => {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return { id: insertId, ...product };
  };

  public getAll = async (): Promise<Product[]> => {
    const [products] = await this.connection.execute<RowDataPacket[] & Product[]>(
      'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products;',
    );
    return products;
  };
}
