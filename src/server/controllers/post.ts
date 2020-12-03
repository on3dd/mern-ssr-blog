import { Controller } from '@server';
import Post from '@server/models/post';
import Category from '@server/models/category';

import {
  POST_FIELDS,
  CATEGORY_FIELDS,
} from '@server/utils/constants';

type PostProps = {
  title: string;
  description: string;
  date: Date;
  category: string;
};

class PostController implements Controller {
  public async all() {
    return Post.find({}, POST_FIELDS).populate(
      'category',
      CATEGORY_FIELDS,
    );
  }

  public async find(id: string) {
    return await Post.findOne({ id }, POST_FIELDS);
  }

  public async create({
    category: name,
    ...props
  }: PostProps) {
    const category = await Category.findOne({
      name,
    });

    const post = new Post({
      category,
      ...props,
    });

    await post.save();

    await Category.findOneAndUpdate(
      { name },
      { $push: { posts: post } },
    );

    return post.populate('category', CATEGORY_FIELDS);
  }
}

export default PostController;
