import styled from 'styled-components';
import { devices } from './MediaQueries.js';

const Main = styled.main`
  height: calc(780px - 9rem);
  display: grid;
  grid-template-rows: 0.75fr repeat(2, 0.75fr);
  grid-template-columns: 12rem 0.1fr repeat(3, 1fr) min-content 0.1fr;
  gap: 3rem;

  @media ${devices.laptopLarge} {
    height: calc(1024px - 9rem);
    grid-template-rows: 0.85fr repeat(2, 1fr);
  }
`;

export default Main;
