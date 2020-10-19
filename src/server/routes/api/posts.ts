import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

// TODO: replace logger with ErrorHandler
import logger from '@server/shared/Logger';
import Post from '@server/models/post';

const router = Router();

router.get('/', async (req, res) => {
  const posts = await Post.find();

  res //
    .status(StatusCodes.OK)
    .send({
      data: posts,
      error: null,
    });
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  });

  try {
    await post.save();

    res //
      .status(StatusCodes.OK)
      .send({
        data: post,
        error: null,
      });
  } catch (err) {
    logger.warn(err.message);

    res //
      .status(StatusCodes.BAD_REQUEST)
      .send({
        data: null,
        error: err.message,
      });
  }
});

export default router;
