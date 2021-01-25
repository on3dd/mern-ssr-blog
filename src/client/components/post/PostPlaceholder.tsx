import React from 'react';

import Emoji from '@components/base-ui/emoji';
import {
  PlaceholderContainer,
  PlaceholderHeading,
  PlaceholderText,
} from '@components/base-ui/placeholder';

const PostPlaceholder: React.FC = () => (
  <PlaceholderContainer className="posts-container">
    <PlaceholderHeading className="posts-heading">
      Oops..
    </PlaceholderHeading>

    <PlaceholderText className="posts-text">
      Looks like a post with this id doesn't exist
      <Emoji value="😨" />
    </PlaceholderText>
  </PlaceholderContainer>
);

export default PostPlaceholder;
