import React from 'react';
import iconEnergy from '../assets/icon-energy.svg';
import iconChicken from '../assets/icon-chicken.svg';
import iconApple from '../assets/icon-apple.svg';
import iconBurger from '../assets/icon-cheeseburger.svg';
import styles from './DashboardStats.module.scss';

function DashboardStats() {
  return (
    <div className={styles.stats}>
      <div className={styles.stats__box}>
        <div className={`${styles.stats__icon} ${styles.stats__iconEnergy}`}>
          <img src={iconEnergy} alt="Icône Énergie" />
        </div>
        <div className={styles.stats__numbers}>
          <div>1,930kCal</div>
          <div>Calories</div>
        </div>
      </div>

      <div className={styles.stats__box}>
        <div className={`${styles.stats__icon} ${styles.stats__iconChicken}`}>
          <img src={iconChicken} alt="Icône Protéine" />
        </div>
        <div className={styles.stats__numbers}>
          <div>155g</div>
          <div>Proteines</div>
        </div>
      </div>

      <div className={styles.stats__box}>
        <div className={`${styles.stats__icon} ${styles.stats__iconApple}`}>
          <img src={iconApple} alt="Icône Glucides" />
        </div>
        <div className={styles.stats__numbers}>
          <div>290g</div>
          <div>Glucides</div>
        </div>
      </div>

      <div className={styles.stats__box}>
        <div className={`${styles.stats__icon} ${styles.stats__iconBurger}`}>
          <img src={iconBurger} alt="Icône Lipides" />
        </div>
        <div className={styles.stats__numbers}>
          <div>50g</div>
          <div>Lipides</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
