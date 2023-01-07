import { Router } from 'express';
import productRoutes from './product.routes';
import userRoutes from './user.routes';
import orderRoutes from './order.routes';
import loginRoutes from './login.routes';

const router = Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/login', loginRoutes);

export default router;
