import React from 'react';
import styled from 'styled-components';

import { Post } from '@client';

import PostBody from '@components/home/PostItemBody';
import PostImage from '@components/home/PostItemImage';

const PostArticle = styled.article`
  display: grid;
  grid-template-columns: //
    minmax(175px, 1fr) //
    minmax(auto, 152px);
  grid-gap: 1.5rem;
  margin-bottom: 3rem;
`;

type PostsItemProps = {
  data: Post;
};

const PostsItem: React.FC<PostsItemProps> = ({
  data,
}: PostsItemProps) => (
  <PostArticle className="post">
    <PostBody data={data} />
    <PostImage data={data} />
  </PostArticle>
);

export default PostsItem;
