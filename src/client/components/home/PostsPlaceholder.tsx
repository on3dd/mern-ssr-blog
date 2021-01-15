import React from 'react';
import {
  TextBlock,
  RectShape,
} from 'react-placeholder/lib/placeholders';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

const PlaceholderDiv = styled.div`
  width: 100%;
`;

const PlaceholderHeading = styled(TextBlock)`
  > div {
    width: 75% !important;
    height: 1.25rem !important;
  }
`;

const PlaceholderDescription = styled(TextBlock)`
  margin: 0.5rem 0 0.66rem 0;

  > div {
    height: 1rem !important;

    &:not(:first-of-type) {
      margin-top: 0.5rem !important;
    }
  }
`;

const PlaceholderInfo = styled(TextBlock)`
  width: 105px !important;

  > div {
    height: 0.9rem !important;

    &:not(:first-of-type) {
      margin-top: 0.5rem !important;
    }
  }
`;

const PlaceholderItem = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: //
    minmax(175px, 1fr) //
    minmax(auto, 152px);
  margin-bottom: 3rem;
`;

const PlaceholderGroup = styled.div``;

const PostsPlaceholderItem: React.FC = () => (
  <PlaceholderItem>
    <PlaceholderGroup>
      <PlaceholderHeading
        rows={1}
        color={COLORS.placeholderColor}
      />

      <PlaceholderDescription
        rows={2}
        color={COLORS.placeholderColor}
      />

      <PlaceholderInfo
        rows={2}
        color={COLORS.placeholderColor}
      />
    </PlaceholderGroup>

    <PlaceholderGroup>
      <RectShape
        style={{ width: '100%' }}
        color={COLORS.placeholderColor}
      />
    </PlaceholderGroup>
  </PlaceholderItem>
);

const PostsPlaceholder: React.FC = () => (
  <PlaceholderDiv className="posts-placeholder">
    <PostsPlaceholderItem />
    <PostsPlaceholderItem />
  </PlaceholderDiv>
);

export default PostsPlaceholder;
