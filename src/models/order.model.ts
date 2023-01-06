import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const [orders] = await this.connection.execute<RowDataPacket[] & Order[]>(
      `
      SELECT
        o.id,
        o.user_id as userId,
        JSON_ARRAYAGG(p.id) as productsIds
      FROM
        Trybesmith.orders o
        JOIN Trybesmith.products p ON o.id = p.order_id
      GROUP BY
        o.id;
      `,
    );
    return orders;
  };
}
