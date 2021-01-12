import { Request } from 'express';

const PATHNAMES: Record<string, string> = Object.freeze({
  '': 'home',
  login: 'login',
  posts: 'posts',
  categories: 'categories',
});

const generateHtmlContent = ({ path }: Request) => {
  const pathname = PATHNAMES[path.split('/')[1]] || '404';

  return `${pathname} | on3dd blog`;
};

export default generateHtmlContent;
