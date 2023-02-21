import { Pool } from 'mysql2/promise';
import { ILogin } from '../interfaces/login.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(user: ILogin): Promise<ILogin[]> {
    const { username, password } = user;

    const query = `
      SELECT id, username FROM Trybesmith.users 
      WHERE username = ? AND password = ?
    `;
    const result = await this.connection.execute(query, [username, password]);
    const [rows] = result;
    return rows as ILogin[];
  }
}

export default LoginModel;