import { Request, Response } from 'express';
import UsersService from '../services/users.services';

class UsersController {
  public service: UsersService;
  
  constructor() {
    this.service = new UsersService();
  }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.service.createUser(user);
    res.status(201).json({ token });
  };
}

export default UsersController;