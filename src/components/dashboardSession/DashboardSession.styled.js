import styled from 'styled-components';

const StyledDashboardSession = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  grid-row: 3 / end;
  grid-column: 3 / 4;
  border-radius: 5px;
`;
export default StyledDashboardSession;
