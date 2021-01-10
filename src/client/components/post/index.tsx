import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import fetchPost from '@actions/fetchPost';

import { RootState } from '@client';

import Spinner from '@components/base-ui/spinner';

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

  const equals = useMemo(() => {
    return post.data.id === parseInt(id);
  }, [post.data.id, id]);

  useEffect(() => {
    if (!equals) {
      dispatch(fetchPost(id));
    }
  }, [dispatch, equals, id]);

  const renderPlaceholder = useMemo(() => {
    return post.isFetching ? (
      <Spinner />
    ) : (
      <PostPlaceholder />
    );
  }, [post.isFetching]);

  const renderItem = useMemo(() => {
    return <PostItem data={post.data} />;
  }, [post.data]);

  const renderPost = useMemo(() => {
    return equals ? renderItem : renderPlaceholder;
  }, [equals, renderItem, renderPlaceholder]);

  return <PostDiv className="post">{renderPost}</PostDiv>;
};

export default Post;
