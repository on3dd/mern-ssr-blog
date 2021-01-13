import React from 'react';
import styled from 'styled-components';

import Emoji from '@components/base-ui/emoji';

const CategoriesContainer = styled.div`
  width: 100%;
  text-align: center;
  text-transform: lowercase;
`;

const CategoriesHeading = styled.h1`
  display: block;
  margin: 0;
  font-size: 10rem;
`;

const CategoriesText = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const CategoriesEmpty: React.FC = () => (
  <CategoriesContainer className="categories-container">
    <CategoriesHeading className="categories-heading">
      Oops..
    </CategoriesHeading>

    <CategoriesText className="categories-text">
      There are no categories here yet
      <Emoji value="😔" ariaLabel="pensive" />
    </CategoriesText>
  </CategoriesContainer>
);

export default CategoriesEmpty;
