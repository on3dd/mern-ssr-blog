import React from 'react';

import Emoji from '@components/base-ui/emoji';
import {
  PlaceholderContainer,
  PlaceholderHeading,
  PlaceholderText,
} from '@components/base-ui/placeholder';

const PostsEmpty: React.FC = () => (
  <PlaceholderContainer className="posts-container">
    <PlaceholderHeading className="posts-heading">
      Oops..
    </PlaceholderHeading>

    <PlaceholderText className="posts-text">
      There are no posts here yet
      <Emoji value="😔" ariaLabel="pensive" />
    </PlaceholderText>
  </PlaceholderContainer>
);

export default PostsEmpty;
