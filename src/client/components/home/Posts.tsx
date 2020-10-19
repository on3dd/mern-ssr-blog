import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import fetchPosts from '@actions/fetchPosts';

import RootState from '@typesdir/states/root';

import PostsList from '@components/home/PostsList';

const PostsDiv = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 1rem !important; */
`

const Posts: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    console.log('useEffect');

    dispatch(fetchPosts);
  }, [posts.data.length]);

  return (
    <PostsDiv className="posts">
      <PostsList data={posts.data} />
    </PostsDiv >
  )
}

export default Posts;
