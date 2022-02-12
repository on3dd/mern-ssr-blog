import { Router } from 'express';

import { UsersService } from '@server/services/UsersService';
import { AuthController } from '@server/controllers';

const router = Router();

const secret = process.env.JWT_SECRET || '';

const usersService = new UsersService();
const authController = new AuthController(secret, usersService);

router.post('/', authController.authenticate.bind(authController));

export default router;
