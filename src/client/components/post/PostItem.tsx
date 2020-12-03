import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Post } from '@client';

import {
  COLORS,
  BREAKPOINTS,
  PLACEHOLDER_URL,
} from '@utils/constants';

import sample from './sample';

// import PostBody from '@root/src/client/components/home/posts/PostItemBody';
// import PostImage from '@components/home/posts/PostItemImage';

const postBlock = css`
  margin-bottom: 1rem;
`;

const colorGrayLighten = css`
  font-size: 1rem;
  color: ${COLORS.grayLighten};
`;

const PostBody = styled.article``;

const PostHeading = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 3rem;
`;

const PostDate = styled.p`
  ${postBlock};
  ${colorGrayLighten};
`;

const PostDescription = styled.p`
  ${postBlock};
  ${colorGrayLighten};
`;

const PostContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  height: 300px;
  width: 100%;
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

  img {
    width: 100%;
  }
`;

type PostsItemProps = {
  data: Post;
};

const PostsItem: React.FC<PostsItemProps> = ({
  data,
}: PostsItemProps) => {
  const memoizedDate = useMemo(() => {
    return new Date(data.date).toLocaleDateString();
  }, [data.date]);

  return (
    <PostBody className="post__body">
      <PostHeading className="post__heading">
        {data.title}
      </PostHeading>

      <PostDate className="post__date">
        {memoizedDate}
      </PostDate>

      <PostDescription className="post__description">
        {data.description}
      </PostDescription>

      <PostContainer className="post__container">
        <PostImg src={PLACEHOLDER_URL} />
      </PostContainer>

      <PostContent className="post__content">
        <ReactMarkdown plugins={[gfm]}>
          {sample}
        </ReactMarkdown>
      </PostContent>
    </PostBody>
  );
};

export default PostsItem;
