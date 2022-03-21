import React from 'react';
import StyledDashboardHeader from './DashboardHeader.styled';
import propTypes from 'prop-types';

function DashboardHeader(props) {
  return (
    <StyledDashboardHeader>
      <h1>
        Bonjour <span>{props.name}</span>
      </h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </StyledDashboardHeader>
  );
}
DashboardHeader.prototype = { name: propTypes.string.isRequired };
export default DashboardHeader;
