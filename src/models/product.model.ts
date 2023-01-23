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
      'INSERT INTO MedievalStore.products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return { id: insertId, ...product };
  };

  public getAll = async (): Promise<Product[]> => {
    const [products] = await this.connection.execute<RowDataPacket[] & Product[]>(
      'SELECT id, name, amount, order_id AS orderId FROM MedievalStore.products;',
    );
    return products;
  };

  public allProductsExist = async (productsIds: number[]): Promise<boolean> => {
    const placeholder = productsIds.map(() => '?').join(',');
    const [products] = await this.connection.execute<RowDataPacket[] & Product[]>(
      `SELECT id FROM MedievalStore.products WHERE id IN (${placeholder});`,
      productsIds,
    );
    return products.length === productsIds.length;
  };

  public allProductsAreAvailable = async (productsIds: number[]): Promise<boolean> => {
    const placeholder = productsIds.map(() => '?').join(',');
    const [ordersId] = await this.connection.execute<RowDataPacket[] & Product[]>(
      `SELECT order_id FROM MedievalStore.products WHERE id IN (${placeholder});`,
      productsIds,
    );
    return ordersId.every((order) => order.order_id === null);
  };

  public update = async (productId: number[], orderId: number): Promise<void> => {
    const placeholder = productId.map(() => '?').join(',');
    await this.connection.execute(
      `UPDATE MedievalStore.products SET order_id = ? WHERE id IN (${placeholder});`,
      [orderId, ...productId],
    );
  };
}
