import { Request, Response } from 'express';
import statusCodes from '../constants/statusCodes';
import OrderService from '../services/order.service';

export default class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const orders = await this.orderService.getAll();
    return res.status(statusCodes.OK).json(orders);
  };

  public insert = async (req: Request, res: Response): Promise<Response> => {
    const {
      user: { id },
      productsIds,
    } = req.body;
    const newOrder = { userId: id, productsIds };
    const createdOrder = await this.orderService.insert(newOrder);
    return res.status(statusCodes.CREATED).json(createdOrder);
  };
}
