import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Category } from '@client';

import { COLORS, BREAKPOINTS } from '@utils/constants';

const CategoryCard = styled.div`
  text-transform: lowercase;
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const CategoryHead = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CategoryTitle = styled.span`
  color: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1em;
  margin: 0 0.5rem 0 0;
  transition: color 0.1s ease-out;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    font-size: 1.5rem;
  }
`;

const CategoryAmount = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${COLORS.grayLighten};
`;

const CategoryBody = styled.div``;

const CategoryDescription = styled.p`
  margin: 0;
  color: ${COLORS.grayLighten};
`;

type CategoriesItemProps = {
  data: Category;
};

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  data,
}: CategoriesItemProps) => {
  const to = useMemo(() => {
    return `/categories/${data.id}`;
  }, [data.id]);

  const title = useMemo(() => {
    return data.name;
  }, [data.name]);

  const amount = useMemo(() => {
    return `${data.posts.length} posts`;
  }, [data.posts.length]);

  return (
    <CategoryCard className="category">
      <CategoryLink to={to} className="category__link">
        <CategoryHead className="category__head">
          <CategoryTitle className="category__title">
            {title}
          </CategoryTitle>

          {/* <CategoryDivider>|</CategoryDivider> */}

          <CategoryAmount className="category__amount">
            {amount}
          </CategoryAmount>
        </CategoryHead>

        <CategoryBody className="category__body">
          <CategoryDescription className="category__description">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis, suscipit!
          </CategoryDescription>
        </CategoryBody>
      </CategoryLink>
    </CategoryCard>
  );
};

export default CategoriesItem;
