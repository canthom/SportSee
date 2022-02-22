import React from 'react';
import StyledDashboardHeader from './DashboardHeader.styled';

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

export default DashboardHeader;
