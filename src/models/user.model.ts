import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NewUser, User } from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: NewUser): Promise<User> => {
    const { username, vocation, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
      [username, vocation, level, password],
    );

    return { id: insertId, username, vocation, level };
  };
}
