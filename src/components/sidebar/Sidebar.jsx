import React from 'react';
import meditation from '../assets/sidebar-meditation-icon.svg';
import natation from '../assets/sidebar-natation-icon.svg';
import bike from '../assets/sidebar-bike-icon.svg';
import musculation from '../assets/sidebar-musculation-icon.svg';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__item}>
            <a href="/" className={styles.sidebar__link}>
              <img
                className={styles.sidebar__icon}
                src={meditation}
                alt="Meditation Icon"
              />
            </a>
          </li>

          <li className={styles.sidebar__item}>
            <a href="/" className={styles.sidebar__link}>
              <img
                className={styles.sidebar__icon}
                src={natation}
                alt="Natation Icon"
              />
            </a>
          </li>

          <li className={styles.sidebar__item}>
            <a href="/" className={styles.sidebar__link}>
              <img
                className={styles.sidebar__icon}
                src={bike}
                alt="Bike Icon"
              />
            </a>
          </li>

          <li className={styles.sidebar__item}>
            <a href="/" className={styles.sidebar__link}>
              <img
                className={styles.sidebar__icon}
                src={musculation}
                alt="Musculation Icon"
              />
            </a>
          </li>
        </ul>
      </nav>
      <span className={styles.sidebar__copyright}>
        Copyright, SportSee 2020
      </span>
    </div>
  );
}

export default Sidebar;
