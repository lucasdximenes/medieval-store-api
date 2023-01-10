import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import { validateNewOrder } from '../middlewares/validations/validation.middlewares';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

router.post('/', authMiddleware, validateNewOrder, orderController.insert);

export default router;
