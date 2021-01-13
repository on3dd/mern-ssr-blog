import { Router } from 'express';

import AuthRouter from '@server/routes/api/auth';
import PostsRouter from '@server/routes/api/posts';
import CategoriesRouter from '@server/routes/api/categories';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/posts', PostsRouter);
router.use('/categories', CategoriesRouter);

export default router;
