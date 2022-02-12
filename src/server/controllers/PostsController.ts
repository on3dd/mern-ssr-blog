import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PostsService } from '@server/services';
import { POST_DOES_NOT_EXIST } from '@server/utils/errorMessages';

export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  public async all(req: Request, res: Response) {
    const data = await this.postsService.all();

    return res //
      .status(StatusCodes.OK)
      .send({ data, error: null });
  }

  public async find(req: Request, res: Response) {
    const { id } = req.params;

    const data = await this.postsService.find(id);

    return data
      ? res //
          .status(StatusCodes.OK)
          .send({ data, error: null })
      : res //
          .status(StatusCodes.NOT_FOUND)
          .send({ data, error: POST_DOES_NOT_EXIST });
  }

  public async create(req: Request, res: Response) {
    const data = await this.postsService.create(req.body);

    return res //
      .status(StatusCodes.OK)
      .send({
        data,
        error: null,
      });
  }
}
