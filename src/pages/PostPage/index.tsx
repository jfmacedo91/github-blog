import { useCallback, useEffect, useState } from 'react';

import { PostHeader } from './components/PostHeader';
import { Post } from '../HomePage';
import { api } from '../../lib/axios';

import { PostContainer } from './styles';
import { useParams } from 'react-router-dom';
import { PostContent } from './components/PostContent';

export function PostPage() {
  const [postData, setPostData] = useState<Post>({} as Post);
  const [isLoading, setIsLoagind] = useState(true);

  const { id } = useParams();

  const getPostData = useCallback(async () => {
    try {
      setIsLoagind(true);
      const response = await api.get(`/repos/jfmacedo91/github-blog/issues/${ id }`);
      setPostData(response.data);
    } finally {
      setIsLoagind(false);
    }
  }, [id])

  useEffect(() => {
    getPostData();
  }, [getPostData])

  return (
    <PostContainer>
      <PostHeader postData={ postData } isLoading={ isLoading } />
      <PostContent content={ postData.body } />
    </PostContainer>
  )
}