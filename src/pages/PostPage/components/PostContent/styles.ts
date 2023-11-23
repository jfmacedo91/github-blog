import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 8rem;
  padding: 2.5rem 2rem;

  h1, h2, h3 {
    color: ${ ({ theme }) => theme["base-title"] };
  }

  pre {
    padding: 1rem;
    font-family: monospace;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    border-radius: 2px;
    background-color: ${ ({ theme }) => theme["base-post"] };
  }

  ul, ol {
    list-style-position: inside;
  }

  strong {
    color: ${ ({ theme }) => theme["base-subtitle"] };
  }

  a {
    color: ${ ({ theme }) => theme["brand"] };
  }
`;