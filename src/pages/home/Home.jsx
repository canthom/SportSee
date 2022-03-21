import React from 'react';
import { Link } from 'react-router-dom';
import StyledHome from './Home.styled.js';

function Home() {
  return (
    <StyledHome>
      <Link to={`/user/12`}>User 12 : Karl</Link>
      <Link to={`/user/18`}>User 18 : Cecilia</Link>
      <Link to={`/user/1`}>User 1 : idIsMissing</Link>
    </StyledHome>
  );
}

export default Home;
