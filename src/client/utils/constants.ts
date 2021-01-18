export const API_BASE_URL = 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  posts: {
    index: '/posts',
    id: (id: string) => `/posts/${id}`,
  },
  categories: {
    index: '/categories',
    id: (id: string) => `/categories/${id}`,
  },
};
