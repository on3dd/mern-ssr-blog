import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import PostController from '@server/controllers/post';

const router = Router();
const controller = new PostController();

router.get('/', async (req, res) => {
  const data = await controller.all();

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const data = await controller.find(id);

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

router.post('/', async (req, res) => {
  const data = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

export default router;
