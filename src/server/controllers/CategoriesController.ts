import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CategoriesService } from '@server/services';
import { CATEGORY_DOES_NOT_EXIST } from '@server/utils/errorMessages';

export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
  ) {}

  public async all(req: Request, res: Response) {
    const categories = await this.categoriesService.all();

    return res //
      .status(StatusCodes.OK)
      .send({ data: categories, error: null });
  }

  public async find(req: Request, res: Response) {
    const { id } = req.params;

    const data = await this.categoriesService.find(id);

    return data
      ? res //
          .status(StatusCodes.OK)
          .send({ data, error: null })
      : res //
          .status(StatusCodes.NOT_FOUND)
          .send({ data, error: CATEGORY_DOES_NOT_EXIST });
  }

  public async create(req: Request, res: Response) {
    const Category = await this.categoriesService.create(
      req.body,
    );

    return res //
      .status(StatusCodes.OK)
      .send({ data: Category, error: null });
  }
}
