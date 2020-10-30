import Controller from '@server/types/controller';
import Category from '@server/models/category';

type CategoryProps = {
  name: string;
};

class CategoryController implements Controller {
  public async all() {
    return Category.find().populate('posts');
  }

  public async create(props: CategoryProps) {
    const category = new Category({
      ...props,
    });

    await category.save();

    return category;
  }
}

export default CategoryController;
