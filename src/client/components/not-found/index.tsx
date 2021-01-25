import React from 'react';

import Emoji from '@components/base-ui/emoji';
import {
  PlaceholderContainer,
  PlaceholderHeading,
  PlaceholderText,
} from '@components/base-ui/placeholder';

const NotFound: React.FC = () => (
  <PlaceholderContainer className="not-found">
    <PlaceholderHeading className="not-found__code">
      404
    </PlaceholderHeading>

    <PlaceholderText className="not-found__text">
      Sorry, this page is unavailable
      <Emoji value="😔" ariaLabel="pensive" />
    </PlaceholderText>
  </PlaceholderContainer>
);

export default NotFound;
