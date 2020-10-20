import React from 'react';
import styled from 'styled-components';

import Post from '@typesdir/Post';

import PostsItem from '@components/home/PostsItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

type PostListProps = {
  data: Post[];
};

const PostList: React.FC<PostListProps> = ({
  data,
}: PostListProps) => {
  console.log('data', data);
  return (
    <Ul className="post-list">
      {data.map((el) => (
        <PostsItem data={el} key={el.id} />
      ))}
    </Ul>
  );
};

export default PostList;
