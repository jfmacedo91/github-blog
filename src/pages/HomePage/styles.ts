import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 54rem;
  margin-top: -4.5rem;
  margin-inline: auto;
`;

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1rem));
  gap: 2rem;
  width: 100%;
`;