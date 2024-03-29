import { CrudService, Post as IPost } from '@server';
import Post from '@server/models/post';
import Category from '@server/models/category';

import {
  POST_FIELDS,
  CATEGORY_FIELDS,
} from '@server/utils/constants';

type PostDraft = {
  title: string;
  description: string;
  content: string;
  date: Date;
  category: string;
};

export class PostsService implements CrudService<IPost> {
  public async all() {
    return Post.find({}, POST_FIELDS)
      .sort({ id: 'desc' })
      .populate('category', CATEGORY_FIELDS);
  }

  public async find(id: string) {
    return Post.findOne({ id }, POST_FIELDS).populate(
      'category',
      CATEGORY_FIELDS,
    );
  }

  public async create({
    category: name,
    ...props
  }: PostDraft) {
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
