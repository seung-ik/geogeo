import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";


export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {

    body {
      font-family: "Helvetica", "Arial", sans-serif;
      line-height: 1.5;
    }

    h2, p {
      margin: 0;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyle;