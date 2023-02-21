import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import {
  validateLevel,
  validatePassword, 
  validateUserName, 
  validateVocation,
} from '../middlewares/validateAddUsers';

const router = Router();

const usersController = new UsersController();

router.post(
  '/',
  validateUserName,
  validateVocation,
  validateLevel,
  validatePassword,
  usersController.createUser,
);

export default router;