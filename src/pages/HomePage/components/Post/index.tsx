import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { PostContainer } from './styles';

interface PostProps {
  post: {
    title: string;
    body: string;
    created_at: string;
    number: number;
  }
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer to={ `/post/${ post.number }` }>
      <header>
        <h3>{ post.title }</h3>
        <span>
          { formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          }) }
        </span>
      </header>
      <p>{ post.body }</p>
    </PostContainer>
  )
}