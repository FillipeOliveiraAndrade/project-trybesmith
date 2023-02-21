import { Router } from 'express';
import LoginController from '../controllers/login.controllers';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

const loginController = new LoginController();

router.post('/', validateLogin, loginController.login);

export default router;