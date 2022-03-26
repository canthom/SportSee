import styled from 'styled-components';
import { devices } from '../../styles/MediaQueries.js';

const StyledStatsBox = styled.div`
    display: flex;
    align-items: center;
    width: max-content;

    & > div:first-of-type {
      width: 4rem;
      height: 4rem;
      border-radius: 0.6rem;
      padding: 1rem;
      display: grid;
      place-items: center;
      position: relative;
      overflow: hidden;
      margin-right: 1.5rem;

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      @media ${devices.laptopLarge} {
        width: 6rem;
        height: 6rem;
        padding: 2rem;
        margin-right: 2rem;
        img {
          width: min-content;
          height: min-content;
        }
      }

      &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 10%;
      }
    }

    div:last-of-type {
      div:first-of-type {
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1.6;

        @media ${devices.laptopLarge} {
          font-size: 2rem;
        }
      }
      div:last-of-type {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.grey};

        @media ${devices.laptopLarge} {
          font-size: 1.4rem;
        }
      }
    }
  }

  &__icon {
    &Energy {
      &::after {
        background-color: ${({ theme }) => theme.colors.red};
      }
    }

    &Chicken {
      &::after {
        background-color: #4ab8ff;
      }
    }

    &Apple {
      &::after {
        background-color: #fdcc0c;
      }
    }

    &Burger {
      &::after {
        background-color: #fd5181;
      }
    }

`;
export default StyledStatsBox;
