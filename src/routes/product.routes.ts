import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateNewProduct from '../middlewares/validations/validation.middlewares';

const router = Router();

const productController = new ProductController();

router.post('/', validateNewProduct, productController.create);

export default router;
