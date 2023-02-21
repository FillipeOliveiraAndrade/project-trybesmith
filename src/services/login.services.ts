import generateToken from '../../utils/jwt';
import { ILogin } from '../interfaces/login.interface';
import connection from '../models/connection';
import LoginModel from '../models/login.models';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(user: ILogin) {
    const [fieldUser] = await this.model.login(user);
    
    if (!fieldUser) {
      return { type: 'INVALID_DATA', message: 'Username or password invalid' };
    }

    const token = generateToken(user);

    return { type: null, message: token };
  }
}

export default LoginService;