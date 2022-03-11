import styled from 'styled-components';

const Main = styled.main`
  height: calc(1024px - 9rem);
  display: grid;
  grid-template-rows: repeat(3, 1fr) 0.5fr;
  grid-template-columns: 12rem 0.25fr repeat(3, 1fr) max-content 0.25fr;
  gap: 3rem;
`;

export default Main;
