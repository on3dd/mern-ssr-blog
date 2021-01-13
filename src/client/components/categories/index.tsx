import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import fetchCategories from '@actions/fetchCategories';

import { RootState } from '@client';

import CategoriesList from '@components/categories/CategoriesList';
import CategoriesListEmpty from '@components/categories/CategoriesListEmpty';
// import PostsPlaceholder from '@components/categories/PostsPlaceholder';

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

  const renderCategories = useMemo(() => {
    return categories.data.length === 0 ? (
      <CategoriesListEmpty />
    ) : (
      <CategoriesList data={categories.data} />
    );
  }, [categories.data]);

  return (
    <CategoriesDiv className="categories">
      {renderCategories}
    </CategoriesDiv>
  );
};

export default Categories;
