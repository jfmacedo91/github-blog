import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { api } from '../../../../lib/axios';

import { ProfileContainer, ProfileContent, ProfileHeader } from './styles';

interface UserInfo {
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
}

export function Profile() {
  const [info, setInfo] = useState<UserInfo>({} as UserInfo);

  useEffect(() => {
    async function fetchInfo() {
      const response = await api.get('users/jfmacedo91');
      setInfo(response.data)
    }

    fetchInfo();
  }, [])

  return (
    <ProfileContainer>
      <img src={ info.avatar_url } />
      <ProfileContent>
        <ProfileHeader>
          <h1>{ info.name }</h1>
          <a target="_blank" href={ info.html_url }>
            github
            <FontAwesomeIcon icon={ faArrowUpRightFromSquare } size="sm" />
          </a>
        </ProfileHeader>
        <p>{ info.bio }</p>
        <ul>
          { info.login && <li><FontAwesomeIcon icon={ faGithub } size="lg" /> { info.login }</li>}
          { info.company && <li><FontAwesomeIcon icon={ faBuilding } /> { info.company }</li>}
          { info.followers && <li><FontAwesomeIcon icon={ faUserGroup } /> { info.followers } seguidores</li>}
        </ul>
      </ProfileContent>
    </ProfileContainer>
  )
}