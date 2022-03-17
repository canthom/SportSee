import { createGlobalStyle } from 'styled-components';
import { devices } from './MediaQueries.js';
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
  display: grid;
  place-items: center;
  box-sizing: border-box;
  font-family: 'Roboto';
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
}

#root {
  width: 1024px;
  height: 780px;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${devices.laptopLarge} {
    width: 1440px;
    height: 1024px;
  }
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
