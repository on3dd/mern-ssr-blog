import React from 'react';
import styled from 'styled-components';

import { Post } from '@client';

import { COLORS } from '@utils/constants';

import PostsBody from '@components/home/posts/PostItemBody';
import PostsImage from '@components/home/posts/PostItemImage';

const PostsCard = styled.article`
  display: grid;
  grid-template-columns: //
    minmax(175px, 1fr) //
    minmax(auto, 152px);
  grid-gap: 1.5rem;

  &:hover,
  &:focus {
    color: ${COLORS.primary};
  }
`;

type PostssItemProps = {
  data: Post;
};

const PostssItem: React.FC<PostssItemProps> = ({
  data,
}: PostssItemProps) => (
  <PostsCard className="post">
    <PostsBody data={data} />
    <PostsImage data={data} />
  </PostsCard>
);

export default PostssItem;
