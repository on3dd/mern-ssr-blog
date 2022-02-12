import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';

// import 'react-placeholder/lib/reactPlaceholder.css';

import fetchCategories from '@actions/fetchCategories';

import { RootState } from '@client';

import CategoriesList from '@components/categories/CategoriesList';
import CategoriesListEmpty from '@components/categories/CategoriesListEmpty';
import CategoriesPlaceholder from '@components/categories/CategoriesPlaceholder';

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

  const ready = useMemo(() => {
    return categories.isFetching === false;
  }, [categories.isFetching]);

  const renderCategories = useMemo(() => {
    return categories.data.length === 0 ? (
      <CategoriesListEmpty />
    ) : (
      <CategoriesList data={categories.data} />
    );
  }, [categories.data]);

  return (
    <CategoriesDiv className="categories">
      <ReactPlaceholder
        delay={1000}
        ready={ready}
        showLoadingAnimation={true}
        customPlaceholder={<CategoriesPlaceholder />}
      >
        {renderCategories}
      </ReactPlaceholder>
    </CategoriesDiv>
  );
};

export default Categories;
