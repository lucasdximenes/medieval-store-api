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

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const userToken = await this.userService.login(username, password);
    return res.status(statusCodes.OK).json({ token: userToken });
  };
}
