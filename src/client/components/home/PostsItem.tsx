import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS, PLACEHOLDER_URL } from '@utils/constants';

import Icon from '@components/base-ui/Icon';

const PostArticle = styled.article`
  display: grid;
  grid-template-columns: minmax(125px, 1fr) minmax(auto, 152px);
  grid-gap: 1.5rem;
  margin-bottom: 3rem;
`

const PostBody = styled.div`
  /* margin-right: 1.5rem; */
`;

const PostHeader = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    font-size: 1.5rem;
  }

`

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
`

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
`;

const PostDate = styled.span`
  display: block;
  color: ${COLORS.grayLighten};
`;

const PostIcon = styled(Icon)`
  margin-left: .25rem;
`

const PostPlaceholder = styled.div`
  position: relative;
  background-color: #aaaaaa;
  border-radius: 5px;
  overflow: hidden;
`

const PostImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
`

const PostsItem: React.FC = () => (
  <PostArticle className="post">
    <PostBody className="post__body">
      <PostHeader className="post__header truncate-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, natus.</PostHeader>
      <PostDescription className="post__description truncate-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero at corporis fugiat exercitationem sit unde, consequatur eum. Expedita sequi deleniti provident quasi at dicta eius! Unde error minus possimus. Porro!</PostDescription>
      <PostFooter className="post__footer">
        <PostFooterDiv className="post__footer__div">
          <PostCategory className="post__category">Programming</PostCategory>
          <PostDate className="post__date">Jul 25</PostDate>
        </PostFooterDiv>
        <PostFooterDiv className="post__footer__div">
          <PostIcon icon="RegBookmark" size="2rem" title="Add to bookmarks" />
          <PostIcon icon="EllipsisH" size="2rem" title="Other actions" />
        </PostFooterDiv>
      </PostFooter>
    </PostBody>

    <PostPlaceholder className="post__placeholder">
      <PostImg className="post__image" src={PLACEHOLDER_URL} />
    </PostPlaceholder>
  </PostArticle>
)

export default PostsItem;
