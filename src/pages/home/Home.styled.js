import styled from 'styled-components';

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  grid-column: 1 / end;
  grid-row: 1 / end;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    background-color: steelblue;
    padding: 5rem;
    font-size: 3rem;
    border-radius: 10rem;
    width: 35rem;
    height: 15rem;
    text-align: center;
    font-weight: bold;
    color: white;
    margin-top: 3rem;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }
  a:hover {
    transform: translateY(-2rem);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
  }
`;
export default StyledHome;
