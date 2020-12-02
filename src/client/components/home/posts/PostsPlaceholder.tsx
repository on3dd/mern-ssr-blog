import React from 'react';
import styled from 'styled-components';

import Emoji from '@components/base-ui/emoji';

const PostsContainer = styled.div`
  width: 100%;
  text-align: center;
  text-transform: lowercase;
`;

const PostsHeading = styled.h1`
  display: block;
  margin: 0;
  font-size: 10rem;
`;

const PostsText = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const PostsPlaceholder: React.FC = () => (
  <PostsContainer className="posts-container">
    <PostsHeading className="posts-heading">
      Oops..
    </PostsHeading>

    <PostsText className="posts-text">
      There are no posts here yet <Emoji value="😔" />
    </PostsText>
  </PostsContainer>
);

export default PostsPlaceholder;
