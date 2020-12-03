import React, { useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '@utils/constants';

import { Post } from '@client';

import Icon from '@components/base-ui/icon';

const PostBody = styled.div`
  text-transform: lowercase;
`;

const PostLink = styled(NavLink)`
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const PostHeader = styled.h2`
  margin: 0;
  color: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.1s ease-out;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    font-size: 1.5rem;
  }
`;

const PostDescription = styled.p`
  display: block;
  height: 100%;
  max-height: 40px;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  color: ${COLORS.grayLighten};
  font-size: 1rem;
  line-height: 1.25rem;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.66rem;
`;

const PostFooterDiv = styled.div`
  display: inline-flex;
  font-size: 0.9rem;

  &:first-of-type {
    flex-direction: column;
    justify-content: center;
  }

  &:last-of-type {
    align-items: center;
  }
`;

const PostCategory = styled.span`
  display: block;
  margin-bottom: 0.2rem;
  transition: color 0.1s ease-out;
`;

const PostDate = styled.span`
  display: block;
  color: ${COLORS.grayLighten};
`;

const PostIcon = styled(Icon)`
  margin-left: 0.25rem;
`;

type PostItemBodyProps = {
  data: Post;
};

const PostItemBody: React.FC<PostItemBodyProps> = ({
  data,
}: PostItemBodyProps) => {
  const to = useMemo(() => {
    return `/posts/${data.id}`;
  }, [data.id]);

  const memoizedDate = useMemo(() => {
    return new Date(data.date).toDateString();
  }, [data.date]);

  const onClick = useCallback(() => {
    console.log('data', data);
  }, [data]);

  return (
    <PostBody className="post__body">
      <PostLink to={to} className="post__link">
        <PostHeader className="post__header truncate-2">
          {data.title}
        </PostHeader>

        <PostDescription className="post__description truncate-2">
          {data.description}
        </PostDescription>
      </PostLink>

      <PostFooter className="post__footer">
        <PostFooterDiv className="post__footer__div">
          <PostCategory className="post__category">
            {data.category.name}
          </PostCategory>

          <PostDate className="post__date">
            {memoizedDate}
          </PostDate>
        </PostFooterDiv>

        <PostFooterDiv className="post__footer__div">
          <PostIcon
            icon="RegBookmark"
            size="2rem"
            title="Add to bookmarks"
            onClick={onClick}
          />

          <PostIcon
            icon="EllipsisH"
            size="2rem"
            title="Other actions"
            onClick={onClick}
          />
        </PostFooterDiv>
      </PostFooter>
    </PostBody>
  );
};

export default PostItemBody;
