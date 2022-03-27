import React from 'react';
import StyledDashboardScore from './dashboardScore.styled';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import propTypes from 'prop-types';

function DashboardScore(props) {
  return (
    <StyledDashboardScore>
      <h2>Score</h2>
      <p>
        <span>{props.data[0].number}%</span>
        de votre objectif
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="65.5%" barSize={20} data={props.data}>
          <RadialBar dataKey="number" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </StyledDashboardScore>
  );
}
DashboardScore.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      fill: propTypes.string,
      number: propTypes.number,
    })
  ),
};

export default DashboardScore;
