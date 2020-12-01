import React from 'react';
import styled from 'styled-components';

import { PLACEHOLDER_URL } from '@utils/constants';

import { Post } from '@client';

const PostPlaceholder = styled.div`
  position: relative;
  background-color: #aaaaaa;
  border-radius: 5px;
  overflow: hidden;
`;

const PostImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
`;

type PostItemImageProps = {
  data: Post;
};

const PostImage: React.FC<PostItemImageProps> = ({
  data,
}: PostItemImageProps) => (
  <PostPlaceholder className="post__placeholder">
    <PostImg
      className="post__image"
      src={PLACEHOLDER_URL}
    />
  </PostPlaceholder>
);

export default PostImage;
