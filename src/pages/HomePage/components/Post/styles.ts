import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid ${ ({ theme }) => theme["base-post"] };
  color: inherit;
  background-color: ${ ({ theme }) => theme["base-post"] };
  cursor: pointer;
  transition: 200ms;

  &:hover {
    border-color: ${ ({ theme }) => theme["base-label"] };
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h3 {
      flex: 1;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${ ({ theme }) => theme["base-title"] };
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${ ({ theme }) => theme["base-span"] };
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;