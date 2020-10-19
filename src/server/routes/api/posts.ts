import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

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

  await post.save();

  res //
    .status(StatusCodes.OK)
    .send({
      data: post,
      error: null,
    });
});

export default router;
