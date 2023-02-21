import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import { validateAmoutProduct, validateNameProduct } from '../middlewares/validateAddProducts';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post(
  '/', 
  validateNameProduct,
  validateAmoutProduct,
  productsController.createProduct,
);

export default router;