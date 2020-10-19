import { Router } from 'express';

import PostsRouter from '@server/routes/api/posts';

const router = Router();

router.use('/posts', PostsRouter);

export default router;
