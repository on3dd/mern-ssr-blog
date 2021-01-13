import React from 'react';
import styled from 'styled-components';

import { Category } from '@client';

import CategoriesItem from '@components/categories/CategoriesItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  margin-bottom: 1.5rem;
`;

type CategoriesListProps = {
  data: Category[];
};

const CategoriesList: React.FC<CategoriesListProps> = ({
  data,
}: CategoriesListProps) => (
  <Ul className="category-list">
    {data.map((el) => (
      <Li key={el.id} className="category-item">
        <CategoriesItem data={el} />
      </Li>
    ))}
  </Ul>
);

export default CategoriesList;
