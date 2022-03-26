import styled from 'styled-components';
import { devices } from '../styles/MediaQueries.js';

const StyledDashboardScore = styled.div`
  grid-column: 5 / 6;
  grid-row: 3 / 4;
  border-radius: 5px;
  position: relative;

  h2 {
    position: absolute;
    top: 25px;
    left: 30px;
    font-size: 15px;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey};
  }

  span {
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.greyDark};
  }

  @media ${devices.laptopLarge} {
    p {
      font-size: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    span {
      font-size: 26px;
    }
  }
`;
export default StyledDashboardScore;
