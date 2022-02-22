import styled from 'styled-components';

const StyledSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / end;

  nav {
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  li {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.5rem;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  span {
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 5%;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }
`;
export default StyledSidebar;
