import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';

// import 'react-placeholder/lib/reactPlaceholder.css';

import fetchPosts from '@actions/fetchPosts';

import { RootState } from '@client';

import PostsList from '@components/base-ui/posts/PostsList';
import PostsListEmpty from '@components/base-ui/posts/PostsListEmpty';
import PostsPlaceholder from '@components/base-ui/posts/PostsPlaceholder';

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

  const ready = useMemo(() => {
    return posts.isFetching === false;
  }, [posts.isFetching]);

  const renderPosts = useMemo(() => {
    return posts.data.length === 0 ? (
      <PostsListEmpty />
    ) : (
      <PostsList data={posts.data} />
    );
  }, [posts.data]);

  return (
    <PostsDiv className="posts">
      <ReactPlaceholder
        ready={ready}
        showLoadingAnimation={true}
        customPlaceholder={<PostsPlaceholder />}
      >
        {renderPosts}
      </ReactPlaceholder>
    </PostsDiv>
  );
};

export default Posts;
