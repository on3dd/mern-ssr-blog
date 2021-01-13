import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

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

router.post('/', async (req, res) => {
  const Category = await controller.create(req.body);

  res //
    .status(StatusCodes.OK)
    .send({
      data: Category,
      error: null,
    });
});

export default router;
