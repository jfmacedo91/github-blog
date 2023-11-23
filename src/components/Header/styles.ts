import coverImg from '../../assets/cover.jpg';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 8.5rem;
  background-image: url(${ coverImg });
  background-position: center;
  background-size: cover;
`;