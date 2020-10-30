import Controller from '@server/types/controller';
import Post from '@server/models/post';
import Category from '@server/models/category';

type PostProps = {
  title: string;
  description: string;
  date: Date;
  category: string;
};

class PostController implements Controller {
  public async all() {
    return Post.find().populate('category');
  }

  public async create({
    category: name,
    ...props
  }: PostProps) {
    const category = await Category.findOne({
      name,
    }).exec();

    const post = new Post({
      category,
      ...props,
    });

    await post.save();

    await Category.findOneAndUpdate(
      { name },
      { $push: { posts: post } },
    );

    return post.populate('category');
  }
}

export default PostController;
