import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Category } from '@client';

import { COLORS, BREAKPOINTS } from '@utils/constants';

import PostsList from '@components/base-ui/posts/PostsList';
import PostsListEmpty from '@components/base-ui/posts/PostsListEmpty';

const CategoryBodyDiv = styled.div`
  width: 100%;
  text-transform: lowercase;
`;

const CategoryBodyTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    font-size: 2rem;
  }
`;

const CategoryBodyDescription = styled.p`
  margin: 0.5rem 0 2rem 0;
  color: ${COLORS.grayLighten};
`;

const CategoryBodyPosts = styled.div`
  width: 100%;
`;

type CategoryBodyProps = {
  data: Category;
};

const CategoryBody: React.FC<CategoryBodyProps> = ({
  data,
}: CategoryBodyProps) => {
  const renderPosts = useMemo(() => {
    return data.posts.length === 0 ? (
      <PostsListEmpty />
    ) : (
      <PostsList data={data.posts} />
    );
  }, [data.posts]);

  return (
    <CategoryBodyDiv className="category-body">
      <CategoryBodyTitle className="category-body__title">
        {data.name}
      </CategoryBodyTitle>

      <CategoryBodyDescription className="category-body__description">
        {data.description}
      </CategoryBodyDescription>

      <CategoryBodyPosts className="category-body__posts">
        {renderPosts}
      </CategoryBodyPosts>
    </CategoryBodyDiv>
  );
};

export default CategoryBody;
