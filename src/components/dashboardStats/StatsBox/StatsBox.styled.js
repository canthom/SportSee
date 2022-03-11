import styled from 'styled-components';

const StyledStatsBox = styled.div`
    display: flex;
    align-items: center;
    width: 20rem;

    & > div:first-of-type {
      width: 6rem;
      height: 6rem;
      border-radius: 0.6rem;
      padding: 2rem;
      display: grid;
      place-items: center;
      position: relative;
      overflow: hidden;

      margin-right: 2rem;

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
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.6;
      }
      div:last-of-type {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.grey};
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
