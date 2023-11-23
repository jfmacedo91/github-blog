import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 0.75rem;
  background-color: ${ ({ theme }) => theme["base-profile"] };
  box-shadow: 0 2px 28px 0 #00000033;

  img {
    width: 9.35rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    flex: 1;
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${ ({ theme }) => theme["base-subtitle"] };

      svg {
        color: ${ ({ theme }) => theme["base-label"] };
      }
    }
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 700;
    color: ${ ({ theme }) => theme["base-title"] };
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: ${ ({ theme }) => theme["brand"] };
    transition: border 100ms;

    &:hover {
      border-bottom: 1px solid ${ ({ theme }) => theme["brand"] };
    }
  }
`;