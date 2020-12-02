import React from 'react';
import styled from 'styled-components';

import Emoji from '@components/base-ui/emoji';

const PostContainer = styled.div`
  width: 100%;
  text-align: center;
  text-transform: lowercase;
`;

const PostHeading = styled.h1`
  display: block;
  margin: 0;
  font-size: 10rem;
`;

const PostText = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const PostPlaceholder: React.FC = () => (
  <PostContainer className="posts-container">
    <PostHeading className="posts-heading">
      Oops..
    </PostHeading>

    <PostText className="posts-text">
      It looks like a post with this id doesn't exist
      <Emoji value="😨" />
    </PostText>
  </PostContainer>
);

export default PostPlaceholder;
