import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: yellow; 
    --secondary-color: white;
    --primary-background: green;
    --secondary-background: black;
    --hover-background: red;
  } 

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
