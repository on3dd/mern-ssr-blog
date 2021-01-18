import React from 'react';
import { TextBlock } from 'react-placeholder/lib/placeholders';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

import PostsPlaceholder from '@components/base-ui/posts/PostsPlaceholder';

const PlaceholderDiv = styled.div`
  width: 100%;
`;

const PlaceholderHeading = styled(TextBlock)`
  > div {
    width: 30% !important;
    height: 2.5rem !important;
  }
`;

const PlaceholderDescription = styled(TextBlock)`
  margin: 0.5rem 0 2rem 0;

  > div {
    width: 50% !important;
    height: 1rem !important;
  }
`;

const CategoryPlaceholder: React.FC = () => (
  <PlaceholderDiv className="category-placeholder">
    <PlaceholderHeading
      rows={1}
      color={COLORS.placeholderColor}
    />

    <PlaceholderDescription
      rows={1}
      color={COLORS.placeholderColor}
    />

    <PostsPlaceholder />
  </PlaceholderDiv>
);

export default CategoryPlaceholder;
