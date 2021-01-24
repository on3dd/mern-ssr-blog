import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import jwt from '@server/middlewares/jwt';

import { POST_DOES_NOT_EXIST } from '@server/utils/errorMessages';

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

  return data
    ? res //
        .status(StatusCodes.OK)
        .send({
          data,
          error: null,
        })
    : res //
        .status(StatusCodes.NOT_FOUND)
        .send({
          data,
          error: POST_DOES_NOT_EXIST,
        });
});

router.post('/', jwt, async (req, res) => {
  const data = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data,
      error: null,
    });
});

export default router;
