import { IUser } from '../interfaces/user.interface';
import generateToken from '../../utils/jwt';
import connection from '../models/connection';
import UsersModel from '../models/users.models';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(user: IUser): Promise<string> {
    await this.model.createUser(user);

    const token = generateToken(user);
    return token;
  }
}

export default UsersService;