import { useCallback, useEffect, useState } from 'react';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { HomeContainer, PostsList } from './styles';
import { api } from '../../lib/axios';

export interface Post {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  }
}

export function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async (query: string = "") => {
    const response = await api.get(`/search/issues?q=${ query }%20repo:jfmacedo91/github-blog`);
    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    getPosts();
  }, [getPosts])

  return (
    <HomeContainer>
      <Profile />
      <SearchForm getPosts={ getPosts } totalPosts={ posts.length } />
      <PostsList>
        { posts.map(post => (
          <Post key={ post.number } post={ post } />
        )) }
      </PostsList>
    </HomeContainer>
  )
}