import React from 'react';
import styled from 'styled-components';

import PostsItem from '@components/home/PostsItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

const PostList: React.FC = () => {
  const arr: JSX.Element[] = new Array<Number>(10)
    .fill(0, 0)
    .map((_, idx) => <PostsItem key={idx} />);

  return (
    <Ul className="post-list">
      {arr}
    </Ul>
  );
}

export default PostList;
