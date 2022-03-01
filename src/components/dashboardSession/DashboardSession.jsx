import React from 'react';
import StyledDashboardSession from './DashboardSession.styled';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts';

const tooltipStyle = {
  color: 'black',
  backgroundColor: 'white',
  padding: '10px',
  textAlign: 'center',
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={tooltipStyle}>
        <p>{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

function DashboardSession(props) {
  return (
    <StyledDashboardSession>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={props.data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="rgba(255, 255, 255, 0.5)"
          />

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="2"
            dot={false}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </StyledDashboardSession>
  );
}

export default DashboardSession;
