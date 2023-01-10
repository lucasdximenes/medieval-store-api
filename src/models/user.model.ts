import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { NewUser, User, SanitizedUser } from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: NewUser): Promise<SanitizedUser> => {
    const { username, vocation, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
      [username, vocation, level, password],
    );

    return { id: insertId, username, vocation, level };
  };

  public getByUsername = async (username: string): Promise<User> => {
    const [[user]] = await this.connection.execute<RowDataPacket[] & User[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?;',
      [username],
    );
    return { ...user };
  };

  public getById = async (id: number): Promise<User> => {
    const [[user]] = await this.connection.execute<RowDataPacket[] & User[]>(
      'SELECT * FROM Trybesmith.users WHERE id = ?;',
      [id],
    );
    return { ...user };
  };
}
