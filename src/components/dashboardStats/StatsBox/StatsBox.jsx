import React from 'react';
import StyledStatsBox from './StatsBox.styled';

function StatsBox(props) {
  const { title = 'Titre', bg = 'red', logo = '', quantity = '111' } = props;
  return (
    <StyledStatsBox>
      <div style={{ backgroundColor: bg }}>
        <img src={logo} alt={title} />
      </div>
      <div>
        <div>{quantity}</div>
        <div>{title}</div>
      </div>
    </StyledStatsBox>
  );
}

export default StatsBox;
