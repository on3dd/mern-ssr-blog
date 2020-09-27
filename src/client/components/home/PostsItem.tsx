import React from 'react';
import styled from 'styled-components';

import Icon from '../base-ui/Icon';
import { colors } from '../../../utils/constants';

const PostArticle = styled.article`
  display: flex;
  max-width: 680px;
  margin-bottom: 3rem;
`

const PostBody = styled.div`
  flex: 1;
  min-width: 0;
  margin-right: 1.5rem;
`;

const PostHeader = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`

const PostDescription = styled.p`
  display: block;
  height: 100%;
  max-height: 40px;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  color: ${colors.grayLighten};
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
`;

const PostDate = styled.span`
  display: block;
  color: ${colors.grayLighten};
`;

const PostIcon = styled(Icon)`
  margin-left: .25rem;
`

const PostImage = styled.div`
  width: 152px;
  background-color: red;
  border-radius: 5px;
`

const PostsItem: React.FC = () => (
  <PostArticle className="post">
    <PostBody className="post__body">
      <PostHeader className="post__header">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, natus.</PostHeader>
      <PostDescription className="post__description truncate-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero at corporis fugiat exercitationem sit unde, consequatur eum. Expedita sequi deleniti provident quasi at dicta eius! Unde error minus possimus. Porro!</PostDescription>
      <PostFooter className="post__footer">
        <PostFooterDiv className="post__footer__div">
          <PostCategory className="post__category">Lorem, ipsum dolor.</PostCategory>
          <PostDate className="post__date">Jul 25</PostDate>
        </PostFooterDiv>
        <PostFooterDiv className="post__footer__div">
          <PostIcon icon="RegBookmark" size="2rem" title="Add to bookmarks" />
          <PostIcon icon="EllipsisH" size="2rem" title="Other actions" />
        </PostFooterDiv>
      </PostFooter>
    </PostBody>

    <PostImage className="post__image">

    </PostImage>
  </PostArticle>
)

export default PostsItem;
