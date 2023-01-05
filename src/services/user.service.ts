import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User, NewUser } from '../interfaces/user.interface';

const { JWT_SECRET } = process.env;

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  private generateToken = (payload: User): string => {
    const token = jwt.sign(payload, JWT_SECRET as string, { expiresIn: '1d' });
    return token;
  };

  public create = async (newUser: NewUser): Promise<string> => {
    const user = await this.userModel.create(newUser);
    const token = this.generateToken(user);
    return token;
  };
}
