import React from 'react';
import logo from '../assets/header-logo.svg';
import StyledHeader from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo de SportSee" />
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/">Profil</a>
          </li>
          <li>
            <a href="/">Réglages</a>
          </li>
          <li>
            <a href="/">Communauté</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
