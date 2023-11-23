import styled from "styled-components";

export const PostHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 0.75rem;
  background-color: ${ ({ theme }) => theme["base-profile"] };
  box-shadow: 0 2px 28px 0 #00000033;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

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
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid ${ ({ theme }) => theme["brand"] };
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 0.5rem;
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