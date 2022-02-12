import {
  Category as ICategory,
  CrudService,
} from '@server';

import {
  POST_FIELDS,
  CATEGORY_FIELDS,
} from '@server/utils/constants';

import Category from '@server/models/category';

type CategoryDraft = {
  name: string;
};

export class CategoriesService
  implements CrudService<ICategory>
{
  public async all() {
    return Category.find({}, CATEGORY_FIELDS).populate(
      'posts',
      POST_FIELDS,
    );
  }

  public async find(id: string) {
    return Category.findOne(
      { id },
      CATEGORY_FIELDS,
    ).populate('posts', POST_FIELDS);
  }

  public async create(props: CategoryDraft) {
    const category = new Category({
      ...props,
    });

    await category.save();

    return category;
  }
}
