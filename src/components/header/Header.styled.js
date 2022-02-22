import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 9rem;
  display: flex;
  align-items: center;

  img {
    width: 18rem;
    margin-left: 2rem;
  }

  nav {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  a {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
export default StyledHeader;
