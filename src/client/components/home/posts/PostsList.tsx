import React from 'react';
import styled from 'styled-components';

import { Post } from '@client';

import PostsItem from '@components/home/posts/PostsItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Li = styled.li`
  margin-bottom: 3rem;
  list-style: none;
`;

type PostListProps = {
  data: Post[];
};

const PostList: React.FC<PostListProps> = ({
  data,
}: PostListProps) => (
  <Ul className="post-list">
    {data.map((el) => (
      <Li key={el.id} className="post-item">
        <PostsItem data={el} />
      </Li>
    ))}
  </Ul>
);

export default PostList;
