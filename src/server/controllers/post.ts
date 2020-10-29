import Controller from '@server/types/controller';
import Post from '@server/models/post';

class PostController implements Controller {
  public async all() {
    return Post.find();
  }

  public async create(body: any) {
    const post = new Post({
      title: body.title,
      description: body.description,
      date: body.date,
    });

    await post.save();

    return post;
  }
}

export default PostController;
