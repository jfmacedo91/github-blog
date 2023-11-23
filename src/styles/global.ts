import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 0.45rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${ ({ theme }) => theme['base-border'] };
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${ ({ theme }) => theme['brand'] };
    border-radius: 999px;
  }

  ::selection {
    background: ${ ({ theme }) => theme['brand'] };
    color: ${ ({ theme }) => theme['base-background'] };
  }
  
  ::-moz-selection {
    background: ${ ({ theme }) => theme['brand'] };
    color: ${ ({ theme }) => theme['base-background'] };
  }

  body {
    font: 400 1rem 'Nunito', sans-serif;
    color: ${ ({ theme }) => theme['base-text'] };
    background-color: ${ ({ theme }) => theme['base-background'] };
  }
`