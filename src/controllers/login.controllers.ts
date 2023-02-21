import { Request, Response } from 'express';
import LoginService from '../services/login.services';

class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const user = req.body; 

    const { type, message } = await this.service.login(user);
    
    if (type) {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  };
}

export default LoginController;