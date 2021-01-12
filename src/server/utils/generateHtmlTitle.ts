import { Request } from 'express';

const PATHNAMES: Record<string, string> = Object.freeze({
  '': 'home',
  posts: 'posts',
  login: 'login',
  register: 'register',
  categories: 'categories',
});

const generateHtmlContent = ({ path }: Request) => {
  const pathname = PATHNAMES[path.split('/')[1]] || '404';

  return `${pathname} | on3dd blog`.toLowerCase();
};

export default generateHtmlContent;
