import React from 'react';
import styled from 'styled-components';

import PostsItem from '@components/home/PostsItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
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
