import Category from '@typesdir/Category';

export default interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  category: Category;
}
