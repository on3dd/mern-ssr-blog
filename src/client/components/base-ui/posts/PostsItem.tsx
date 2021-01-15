import React from 'react';
import styled from 'styled-components';

import { Post } from '@client';

import PostsBody from '@components/base-ui/posts/PostItemBody';
import PostsImage from '@components/base-ui/posts/PostItemImage';

const PostsCard = styled.article`
  display: grid;
  grid-template-columns: //
    minmax(175px, 1fr) //
    minmax(auto, 152px);
  grid-gap: 1.5rem;
`;

type PostsItemProps = {
  data: Post;
};

const PostsItem: React.FC<PostsItemProps> = ({
  data,
}: PostsItemProps) => (
  <PostsCard className="post">
    <PostsBody data={data} />
    <PostsImage data={data} />
  </PostsCard>
);

export default PostsItem;
