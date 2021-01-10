import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import fetchPost from '@actions/fetchPost';

import { RootState } from '@client';

import PostItem from '@components/post/PostItem';
import PostPlaceholder from '@components/post/PostPlaceholder';

const PostDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Post: React.FC = () => {
  const dispatch = useDispatch();

  const post = useSelector(
    (state: RootState) => state.post,
  );

  const { id }: { id: string } = useParams();

  useEffect(() => {
    if (post.data.id !== parseInt(id)) {
      dispatch(fetchPost(id));
    }
  }, [dispatch, post.data.id, id]);

  const renderPost = useMemo(() => {
    return post.data === null ? (
      <PostPlaceholder />
    ) : (
      <PostItem data={post.data} />
    );
  }, [post.data]);

  return <PostDiv className="post">{renderPost}</PostDiv>;
};

export default Post;
