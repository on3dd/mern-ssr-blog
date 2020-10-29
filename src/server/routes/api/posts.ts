import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import PostController from '@server/controllers/post';

const router = Router();
const controller = new PostController();

router.get('/', async (req, res) => {
  const posts = await controller.all();

  res //
    .status(StatusCodes.OK)
    .send({
      data: posts,
      error: null,
    });
});

router.post('/', async (req, res) => {
  const post = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data: post,
      error: null,
    });
});

export default router;
