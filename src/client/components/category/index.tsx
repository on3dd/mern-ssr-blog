import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import styled from 'styled-components';

// import 'react-placeholder/lib/reactPlaceholder.css';

import fetchCategory from '@actions/fetchCategory';

import { RootState } from '@client';

import CategoryBody from '@components/category/CategoryBody';
import CategoryPlaceholder from '@components/category/CategoryPlaceholder';

const CategoryDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Category: React.FC = () => {
  const dispatch = useDispatch();

  const category = useSelector(
    (state: RootState) => state.category,
  );

  const { id }: { id: string } = useParams();

  const equals = useMemo(() => {
    return category.data.id === parseInt(id);
  }, [category.data.id, id]);

  useEffect(() => {
    if (!equals) {
      dispatch(fetchCategory(id));
    }
  }, [dispatch, equals, id]);

  const ready = useMemo(() => {
    return category.isFetching === false;
  }, [category.isFetching]);

  return (
    <CategoryDiv className="category">
      <ReactPlaceholder
        delay={1000}
        ready={ready}
        showLoadingAnimation={true}
        customPlaceholder={<CategoryPlaceholder />}
      >
        <CategoryBody data={category.data} />
      </ReactPlaceholder>
    </CategoryDiv>
  );
};

export default Category;
