import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${ ({ theme }) => theme["base-subtitle"] };
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${ ({ theme }) => theme["base-span"] };
    }
  }

  input {
    padding: 0.75rem 1rem;
    border: 1px solid ${ ({ theme }) => theme["base-border"] };
    border-radius: 6px;
    color: ${ ({ theme }) => theme["base-text"] };
    background-color: ${ ({ theme }) => theme["base-input"] };

    &:focus {
      border-color: ${ ({ theme }) => theme.brand };
      outline: none;
    }

    &::placeholder {
      color: ${ ({ theme }) => theme["base-label"] };
    }
  }
`;