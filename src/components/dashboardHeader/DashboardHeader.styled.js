import styled from 'styled-components';

const StyledDashboardHeader = styled.header`
  grid-column: 3 / end;
  padding-top: 7rem;

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
