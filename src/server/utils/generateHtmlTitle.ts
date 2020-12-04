import { Request } from 'express';

interface IPathnames {
  [key: string]: string;
}

const PATHNAMES: IPathnames = Object.freeze({
  '': 'home',
  posts: 'posts',
  categories: 'categories',
});

const generateHtmlContent = ({ path }: Request) => {
  const pathname = PATHNAMES[path.split('/')[1]] || '404';

  return `${pathname} | on3dd blog`;
};

export default generateHtmlContent;
