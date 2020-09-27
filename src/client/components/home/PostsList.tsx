import React from 'react';
import styled from 'styled-components';

import PostsItem from './PostsItem';

const Ul = styled.ul`
`

const PostList: React.FC = () => (
  <Ul className="post-list">
    <PostsItem />
    <PostsItem />
    <PostsItem />
    <PostsItem />
    <PostsItem />
  </Ul>
)

export default PostList;
