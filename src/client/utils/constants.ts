export const API_BASE_URL = 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  post: (id: string) => `/posts/${id}`,
  posts: '/posts',
  categories: '/categories',
};
