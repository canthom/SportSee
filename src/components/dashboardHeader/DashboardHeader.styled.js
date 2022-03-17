import styled from 'styled-components';
import { devices } from '../styles/MediaQueries.js';

const StyledDashboardHeader = styled.header`
  grid-column: 3 / end;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4.8rem;

    span {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  & > span {
    font-size: 1.8rem;
  }
`;
export default StyledDashboardHeader;
