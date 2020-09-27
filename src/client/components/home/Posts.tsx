import React from 'react';
import styled from 'styled-components';

import PostsList from './PostsList';

const PostsDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem !important;
`

const Posts = () => {
  return (
    <PostsDiv className="posts">
      <PostsList />
    </PostsDiv >
  )
}

export default Posts;
