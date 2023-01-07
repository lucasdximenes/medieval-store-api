import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { NewUser, SanitizedUser } from '../interfaces/user.interface';
import { UnauthorizedError } from '../errors';

const { JWT_SECRET } = process.env;

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  private generateToken = (payload: SanitizedUser): string => {
    const token = jwt.sign(payload, JWT_SECRET as string, { expiresIn: '1d' });
    return token;
  };

  public create = async (newUser: NewUser): Promise<string> => {
    const user = await this.userModel.create(newUser);
    const token = this.generateToken(user);
    return token;
  };

  public login = async (username: string, password: string): Promise<string> => {
    const user = await this.userModel.getByUsername(username);

    if (!user || user.password !== password) {
      throw new UnauthorizedError('Username or password invalid');
    }

    delete user.password;

    const token = this.generateToken(user);
    return token;
  };
}
