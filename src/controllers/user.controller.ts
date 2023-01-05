import { Request, Response } from 'express';
import statusCodes from '../constants/statusCodes';
import UserService from '../services/user.service';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newUser = req.body;
    const newUserToken = await this.userService.create(newUser);
    return res.status(statusCodes.CREATED).json({ token: newUserToken });
  };
}
