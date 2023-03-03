import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import validateAddOrders from '../middlewares/validateAddOrders';
import validateToken from '../middlewares/validateToken';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post(
  '/', 
  validateToken,
  validateAddOrders,
  ordersController.register,
);

export default router;