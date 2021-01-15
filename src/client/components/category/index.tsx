import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';

// import 'react-placeholder/lib/reactPlaceholder.css';

import fetchPosts from '@actions/fetchPosts';

import { RootState } from '@client';

import PostsPlaceholder from '@components/base-ui/posts/PostsPlaceholder';
import CategoryBody from '@components/category/CategoryBody';

const CategoryDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Category: React.FC = () => {
  const dispatch = useDispatch();

  // TODO: change with correct selector
  const posts = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    if (posts.data.length === 0) {
      dispatch(fetchPosts()); // TODO: change with correct action
    }
  }, [dispatch, posts.data.length]);

  const ready = useMemo(() => {
    return posts.isFetching === false;
  }, [posts.isFetching]);

  return (
    <CategoryDiv className="category">
      <ReactPlaceholder
        ready={ready}
        showLoadingAnimation={true}
        customPlaceholder={<PostsPlaceholder />}
      >
        <CategoryBody data={posts.data} />
      </ReactPlaceholder>
    </CategoryDiv>
  );
};

export default Category;
