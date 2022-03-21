import React from 'react';
import iconEnergy from '../assets/icon-energy.svg';
import iconChicken from '../assets/icon-chicken.svg';
import iconApple from '../assets/icon-apple.svg';
import iconBurger from '../assets/icon-cheeseburger.svg';
import StyledDashboardStats from './DashboardStats.styled';
import StatsBox from './StatsBox/StatsBox';
import propTypes from 'prop-types';

function DashboardStats(props) {
  return (
    <StyledDashboardStats>
      <StatsBox
        title="Calories"
        logo={iconEnergy}
        bg="rgba(255, 0, 0, 0.1)"
        quantity={`${props.calorie}kCal`}
      />

      <StatsBox
        title="Protéines"
        logo={iconChicken}
        bg="rgba(74, 184, 255, 0.1)"
        quantity={`${props.protein}g`}
      />

      <StatsBox
        title="Glucides"
        logo={iconApple}
        bg="rgba(253, 204, 12, 0.1)"
        quantity={`${props.carbo}g`}
      />

      <StatsBox
        title="Lipides"
        logo={iconBurger}
        bg="rgba(253, 81, 129, 0.1)"
        quantity={`${props.lipid}g`}
      />
    </StyledDashboardStats>
  );
}
DashboardStats.propTypes = {
  calorie: propTypes.number.isRequired,
  protein: propTypes.number.isRequired,
  carbo: propTypes.number.isRequired,
  lipid: propTypes.number.isRequired,
};

export default DashboardStats;
