import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import fetchCategories from '@actions/fetchCategories';

import { RootState } from '@client';

const CategoriesDiv = styled.div``;

const Categories: React.FC = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state.categories,
  );

  useEffect(() => {
    if (categories.data.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.data.length]);

  return (
    <CategoriesDiv className="categories">
      <code>
        {JSON.stringify(categories.data, null, 2)}
      </code>
    </CategoriesDiv>
  );
};

export default Categories;
