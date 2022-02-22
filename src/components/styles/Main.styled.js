import styled from 'styled-components';

const Main = styled.main`
  height: calc(100vh - 9rem);
  display: grid;
  grid-template-rows: 1fr 1.5fr 1fr;
  grid-template-columns: 12rem 9rem repeat(4, 1fr) 9rem;
  gap: 3rem;
`;

export default Main;
