import React from 'react';
import { TextBlock } from 'react-placeholder/lib/placeholders';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

const PlaceholderDiv = styled.div`
  width: 100%;
`;

const PlaceholderTitle = styled(TextBlock)`
  width: 200px !important;

  > div {
    height: 1.5rem !important;
  }
`;

const PlaceholderAmount = styled(TextBlock)`
  width: 75px !important;

  > div {
    height: 0.9rem !important;
  }
`;

const PlaceholderDescription = styled(TextBlock)`
  max-width: 500px !important;

  > div {
    height: 1rem !important;
  }
`;

const PlaceholderGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CategoriesPlaceholder: React.FC = () => (
  <PlaceholderDiv className="categories-placeholder">
    <PlaceholderGroup>
      <PlaceholderTitle
        rows={1}
        color={COLORS.placeholderColor}
      />

      <PlaceholderAmount
        rows={1}
        color={COLORS.placeholderColor}
      />
    </PlaceholderGroup>

    <PlaceholderGroup>
      <PlaceholderDescription
        rows={1}
        color={COLORS.placeholderColor}
      />
    </PlaceholderGroup>
  </PlaceholderDiv>
);

export default CategoriesPlaceholder;
