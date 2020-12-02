import React from 'react';
import styled from 'styled-components';

import { Post } from '@client';

// import { COLORS } from '@utils/constants';

// import PostBody from '@root/src/client/components/home/posts/PostItemBody';
// import PostImage from '@components/home/posts/PostItemImage';

const PostBody = styled.article``;

type PostsItemProps = {
  data: Post;
};

const PostsItem: React.FC<PostsItemProps> = ({
  data,
}: PostsItemProps) => (
  <PostBody className="post__body">
    {JSON.stringify(data)}
  </PostBody>
);

export default PostsItem;
