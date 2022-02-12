import { Router } from 'express';

import jwt from '@server/middlewares/jwt';

import { CategoriesService } from '@server/services';
import { CategoriesController } from '@server/controllers';

const router = Router();

const categoriesService = new CategoriesService();
const categoriesController = new CategoriesController(categoriesService);

router.get('/', categoriesController.all.bind(categoriesController));
router.get('/:id', categoriesController.find.bind(categoriesController));
router.post('/', jwt, categoriesController.create.bind(categoriesController));

export default router;
