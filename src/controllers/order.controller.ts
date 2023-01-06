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
}
