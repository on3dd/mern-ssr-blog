import React from 'react';

import Emoji from '@components/base-ui/emoji';
import {
  PlaceholderContainer,
  PlaceholderHeading,
  PlaceholderText,
} from '@components/base-ui/placeholder';

const CategoriesEmpty: React.FC = () => (
  <PlaceholderContainer className="categories-container">
    <PlaceholderHeading className="categories-heading">
      Oops..
    </PlaceholderHeading>

    <PlaceholderText className="categories-text">
      There are no categories here yet
      <Emoji value="😔" ariaLabel="pensive" />
    </PlaceholderText>
  </PlaceholderContainer>
);

export default CategoriesEmpty;
