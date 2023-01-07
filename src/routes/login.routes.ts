import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validateLogin } from '../middlewares/validations/validation.middlewares';

const router = Router();

const userController = new UserController();

router.post('/', validateLogin, userController.login);

export default router;
