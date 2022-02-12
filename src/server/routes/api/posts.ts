import { Router } from 'express';

import jwt from '@server/middlewares/jwt';

import { PostsService } from '@server/services';
import { PostsController } from '@server/controllers/PostsController';

const router = Router();

const postsService = new PostsService();
const postsController = new PostsController(postsService);

router.get('/', postsController.all.bind(postsController));
router.get('/:id', postsController.find.bind(postsController));
router.post('/', jwt, postsController.create.bind(postsController));

export default router;
