import React from 'react';
import logo from '../assets/header-logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="Logo de SportSee" />
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Accueil
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Profil
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Réglages
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
