import { Controller } from '@server';
import Category from '@server/models/category';

import {
  POST_FIELDS,
  CATEGORY_FIELDS,
} from '@server/utils/constants';

type CategoryDraft = {
  name: string;
};

class CategoryController implements Controller {
  public async all() {
    return Category.find({}, CATEGORY_FIELDS).populate(
      'posts',
      POST_FIELDS,
    );
  }

  public async create(props: CategoryDraft) {
    const category = new Category({
      ...props,
    });

    await category.save();

    return category;
  }
}

export default CategoryController;
