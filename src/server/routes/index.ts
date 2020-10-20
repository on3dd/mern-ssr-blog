import { Router } from 'express';

import ApiRouter from '@server/routes/api';
import RootRouter from '@server/routes/root';

const router = Router();

router.use('/api', ApiRouter);
router.use('/', RootRouter);

export default router;
