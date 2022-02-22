import React from 'react';
import StyledStatsBox from './StatsBox.styled';

function StatsBox(props) {
  return (
    <StyledStatsBox>
      <div style={{ backgroundColor: props.bg }}>
        <img src={props.logo} alt={props.title} />
      </div>
      <div>
        <div>{props.quantity}</div>
        <div>{props.title}</div>
      </div>
    </StyledStatsBox>
  );
}

export default StatsBox;
