import React from 'react';
import styled from 'styled-components';

import { Post } from '@client';

import PostsBody from '@components/home/posts/PostItemBody';
import PostsImage from '@components/home/posts/PostItemImage';

const PostsCard = styled.article`
  display: grid;
  grid-template-columns: //
    minmax(175px, 1fr) //
    minmax(auto, 152px);
  grid-gap: 1.5rem;
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
