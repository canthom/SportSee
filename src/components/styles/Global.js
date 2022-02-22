import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Roboto';
}

#root {
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}


`;
export default GlobalStyles;
