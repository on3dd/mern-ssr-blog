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

export const DEFAULT_CATEGORY = {
  id: 0,
  name: '🤔 Unknown category',
  description:
    'Unknown description. Imagine something like "Lorem ipsum dolor sit amet..."',
  posts: [],
};

export const DEFAULT_POST = {
  id: 0,
  title: 'Unknown post',
  description:
    'Unknown description. Imagine something like "Lorem ipsum dolor sit amet..."',
  date: new Date().toLocaleDateString(),
  content: `# There's no content! PepeHands`,
  category: DEFAULT_CATEGORY,
};
