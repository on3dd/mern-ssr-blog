import React, { useMemo } from 'react';
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
}: PostItemImageProps) => {
  const alt = useMemo(() => {
    return `${data.title} image preview`;
  }, [data.title]);

  return (
    <PostPlaceholder className="post__placeholder">
      <PostImg
        alt={alt}
        src={PLACEHOLDER_URL}
        className="post__image"
      />
    </PostPlaceholder>
  );
};

export default PostImage;
