import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import fetchPosts from '@actions/fetchPosts';

import { RootState } from '@client';

import PostsList from '@components/home/posts/PostsList';
import PostsPlaceholder from '@components/home/posts/PostsPlaceholder';

const PostsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Posts: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    if (posts.data.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.data.length]);

  const renderPosts = useMemo(() => {
    return posts.data.length === 0 ? (
      <PostsPlaceholder />
    ) : (
      <PostsList data={posts.data} />
    );
  }, [posts.data]);

  return (
    <PostsDiv className="posts">{renderPosts}</PostsDiv>
  );
};

export default Posts;
