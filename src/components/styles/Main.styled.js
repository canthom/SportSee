import styled from 'styled-components';

const Main = styled.main`
  height: calc(1024px - 9rem);
  display: grid;
  grid-template-rows: repeat(3, 1fr) 8rem;
  grid-template-columns: 12rem 9rem repeat(4, 1fr) 9rem;
  gap: 3rem;
`;

export default Main;
