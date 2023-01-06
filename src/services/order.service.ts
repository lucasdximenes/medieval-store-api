import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { Order } from '../interfaces/order.interface';

export default class OrderService {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.orderModel.getAll();
    return orders;
  };
}
