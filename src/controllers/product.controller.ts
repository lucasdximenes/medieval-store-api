import { Request, Response } from 'express';
import statusCodes from '../constants/statusCodes';
import ProductService from '../services/product.service';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newProduct = req.body;
    const createdProduct = await this.productService.create(newProduct);
    return res.status(statusCodes.CREATED).json(createdProduct);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await this.productService.getAll();
    return res.status(statusCodes.OK).json(products);
  };
}
