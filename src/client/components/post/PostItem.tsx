import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Post } from '@client';

import {
  COLORS,
  BREAKPOINTS,
  PLACEHOLDER_URL,
} from '@utils/constants';

import Emoji from '@components/base-ui/emoji';

import PostCodeBlock from './PostCodeBlock';

const postBlock = css`
  margin-bottom: 1rem;
`;

const colorGrayLighten = css`
  font-size: 1rem;
  color: ${COLORS.grayLighten};
`;

const PostBody = styled.article`
  width: 100%;
`;

const PostHeading = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 3rem;
`;

const PostInfo = styled.p`
  ${postBlock};
  ${colorGrayLighten};
`;

const PostDate = styled.span``;

const PostEmoji = styled(Emoji)`
  margin-left: 0 !important;
`;

const PostLink = styled(Link)`
  margin: 0 0.5ch;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

const PostDescription = styled.p`
  ${postBlock};
  ${colorGrayLighten};
`;

const PostContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    height: 350px;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    height: 400px;
  }
`;

const PostImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const PostContent = styled.div`
  font-size: 1.25rem;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    width: 100%;
    overflow: hidden;
  }

  p > img {
    width: 100%;
  }

  pre {
    border-radius: 5px;
    border: 1px solid ${COLORS.borderColor};
  }

  a {
    color: inherit;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: ${COLORS.primary};
    }
  }
`;

type PostItemProps = {
  data: Post;
};

const PostItem: React.FC<PostItemProps> = ({
  data,
}: PostItemProps) => {
  const memoizedDate = useMemo(() => {
    return new Date(data.date).toLocaleDateString();
  }, [data.date]);

  const to = useMemo(() => {
    return `/categories/${data.category.id}`;
  }, [data.category.id]);

  const alt = useMemo(() => {
    return `${data.title} image preview`;
  }, [data.title]);

  return (
    <PostBody className="post__body">
      <PostHeading className="post__heading">
        {data.title}
      </PostHeading>

      <PostInfo className="post__info">
        <PostDate className="post__date">
          <PostEmoji value="📅" ariaLabel="calendar" />
          {memoizedDate},
        </PostDate>

        <PostLink to={to} className="post__link">
          {data.category.name}
        </PostLink>
      </PostInfo>

      <PostDescription className="post__description">
        {data.description}
      </PostDescription>

      <PostContainer className="post__container">
        <PostImg alt={alt} src={PLACEHOLDER_URL} />
      </PostContainer>

      <PostContent className="post__content">
        <ReactMarkdown
          plugins={[gfm]}
          renderers={{
            code: PostCodeBlock,
          }}
        >
          {data.content}
        </ReactMarkdown>
      </PostContent>
    </PostBody>
  );
};

export default PostItem;
