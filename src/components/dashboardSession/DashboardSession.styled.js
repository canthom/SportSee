import styled from 'styled-components';

const StyledDashboardSession = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  grid-row: 3 / 4;
  grid-column: 3 / 4;
  border-radius: 5px;
  position: relative;

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
    padding: 30px;
  }
`;
export default StyledDashboardSession;
