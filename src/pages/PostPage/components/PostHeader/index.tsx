import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { PostHeaderContainer } from './styles';
import { Post } from '../../../HomePage';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostDataProps {
  postData: Post;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostDataProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <PostHeaderContainer>
      { !isLoading && (
        <>
          <header>
              <a target="_blank" onClick={ goBack }>
                <FontAwesomeIcon icon={ faChevronLeft } size="sm" />
                voltar
              </a>
              <a target="_blank" href={ postData.html_url }>
                github
                <FontAwesomeIcon icon={ faArrowUpRightFromSquare } size="sm" />
              </a>
          </header>
          <h1>{ postData.title }</h1>
          <ul>
            <li><FontAwesomeIcon icon={ faGithub } /> { postData.user.login }</li>
            <li><FontAwesomeIcon icon={ faCalendarDay } />
              { formatDistanceToNow(new Date(postData.created_at), {
                  addSuffix: true,
                  locale: ptBR,
              }) }
            </li>
            <li><FontAwesomeIcon icon={ faComment } />
              { postData.comments > 1 ? postData.comments + ' comentários' : postData.comments + ' comentário' }
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}