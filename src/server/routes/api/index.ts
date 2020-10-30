import { Router } from 'express';

import PostsRouter from '@server/routes/api/posts';
import CategoriesRouter from '@server/routes/api/categories';

const router = Router();

router.use('/posts', PostsRouter);
router.use('/categories', CategoriesRouter);

export default router;
