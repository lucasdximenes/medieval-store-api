import { Router } from 'express';
import { validateNewUser } from '../middlewares/validations/validation.middlewares';
import UserController from '../controllers/user.controller';

const userController = new UserController();

const router = Router();

router.post('/', validateNewUser, userController.create);

export default router;
