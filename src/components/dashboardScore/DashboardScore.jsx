import React from 'react';
import StyledDashboardScore from './dashboardScore.styled';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

function DashboardScore(props) {
  console.log(props.data[0]);
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

export default DashboardScore;
