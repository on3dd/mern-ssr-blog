export const API_BASE_URL = 'http://localhost:3000/api';

// TODO: refactor endpoints to "name: {index, id}"
export const API_ENDPOINTS = {
  post: (id: string) => `/posts/${id}`,
  posts: '/posts',
  category: (id: string) => `/categories/${id}`,
  categories: '/categories',
};
