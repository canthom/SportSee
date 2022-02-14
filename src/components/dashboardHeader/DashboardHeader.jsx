import React from 'react';
import styles from './DashboardHeader.module.scss';

function DashboardHeader() {
  return (
    <header className={styles.dashboardHeader}>
      <h1 className={styles.dashboardHeader__title}>
        Bonjour <span>Thomas</span>
      </h1>
      <span className={styles.dashboardHeader__congrats}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
    </header>
  );
}

export default DashboardHeader;
