import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={ logoImg } alt="GITHUB BLOG" />
      </Link>
    </HeaderContainer>
  )
}