import styled from 'styled-components';

const StyledDashboardDaily = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  grid-column: 3 / 6;
  grid-row: 2 / 3;
  position: relative;

  h2 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default StyledDashboardDaily;
