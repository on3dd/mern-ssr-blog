import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import jwt from '@server/middlewares/jwt';

import { CATEGORY_DOES_NOT_EXIST } from '@server/utils/errorMessages';

import CategoryController from '@server/controllers/category';

const router = Router();
const controller = new CategoryController();

router.get('/', async (req, res) => {
  const categories = await controller.all();

  res //
    .status(StatusCodes.OK)
    .send({
      data: categories,
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
          error: CATEGORY_DOES_NOT_EXIST,
        });
});

router.post('/', jwt, async (req, res) => {
  const Category = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data: Category,
      error: null,
    });
});

export default router;
