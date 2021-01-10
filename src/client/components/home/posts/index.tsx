import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import fetchPosts from '@actions/fetchPosts';

import { RootState } from '@client';

import Spinner from '@components/base-ui/spinner';

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

  const renderPlaceholder = useMemo(() => {
    return posts.isFetching ? (
      <Spinner />
    ) : (
      <PostsPlaceholder />
    );
  }, [posts.isFetching]);

  const renderList = useMemo(() => {
    return <PostsList data={posts.data} />;
  }, [posts.data]);

  const renderPosts = useMemo(() => {
    return posts.data.length
      ? renderList
      : renderPlaceholder;
  }, [posts.data, renderList, renderPlaceholder]);

  return (
    <PostsDiv className="posts">{renderPosts}</PostsDiv>
  );
};

export default Posts;
