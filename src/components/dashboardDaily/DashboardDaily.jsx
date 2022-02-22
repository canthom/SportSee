import React from 'react';
import StyledDashboardDaily from './DashboardDaily.styled';
import { ResponsiveContainer, BarChart, XAxis, YAxis } from 'recharts';

function DashboardDaily(props) {
  return (
    <StyledDashboardDaily>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={props.data}>
          <XAxis dataKey="day" width="100%" />
          <YAxis datakey="" />
        </BarChart>
      </ResponsiveContainer>
    </StyledDashboardDaily>
  );
}

export default DashboardDaily;
