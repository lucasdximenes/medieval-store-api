import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { Order, NewOrder } from '../interfaces/order.interface';
import ProductModel from '../models/product.model';
import UserModel from '../models/user.model';
import { NotFoundError, BadRequestError } from '../errors';

export default class OrderService {
  private orderModel: OrderModel;

  private productModel: ProductModel;

  private userModel: UserModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
    this.userModel = new UserModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.orderModel.getAll();
    return orders;
  };

  private isAValidOrder = async (order: NewOrder): Promise<void> => {
    const { userId, productsIds } = order;

    const userExists = await this.userModel.getById(userId);
    if (Object.keys(userExists).length === 0) throw new NotFoundError('User not found');

    const allProductsExist = await this.productModel.allProductsExist(productsIds);
    if (!allProductsExist) throw new NotFoundError('Product not found');

    const allProductsAreAvailable = await this.productModel.allProductsAreAvailable(
      productsIds,
    );
    if (!allProductsAreAvailable) {
      throw new BadRequestError('Some products are unavailable');
    }
  };

  public insert = async (order: NewOrder): Promise<NewOrder> => {
    const { userId, productsIds } = order;

    await this.isAValidOrder(order);

    const orderId = await this.orderModel.insert(userId);
    await this.productModel.update(productsIds, orderId);

    return { userId, productsIds };
  };
}
