import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: IUser): Promise<void> {
    const { username, vocation, level, password } = user;
    
    const query = `
      INSERT INTO Trybesmith.users
      (username, vocation, level, password) VALUES (?, ?, ?, ?)
    `;
    await this.connection.execute<ResultSetHeader>(query, [username, vocation, level, password]);
  }
}

export default UsersModel;