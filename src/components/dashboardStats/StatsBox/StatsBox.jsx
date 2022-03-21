import React from 'react';
import StyledStatsBox from './StatsBox.styled';
import propTypes from 'prop-types';

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
StatsBox.propTypes = {
  title: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  bg: propTypes.string.isRequired,
  quantity: propTypes.string.isRequired,
};

export default StatsBox;
