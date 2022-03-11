import React from 'react';
import StyledDashboardSession from './DashboardSession.styled';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
} from 'recharts';

function sessionTickFormatter(value) {
  if (value === 1) {
    return 'L';
  }
  if (value === 2) {
    return 'M';
  }
  if (value === 3) {
    return 'M';
  }
  if (value === 4) {
    return 'J';
  }
  if (value === 5) {
    return 'V';
  }
  if (value === 6) {
    return 'S';
  }
  if (value === 7) {
    return 'D';
  }
}

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
        <LineChart
          data={props.data}
          margin={{ top: 50, right: 25, bottom: 5, left: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="rgba(255, 255, 255, 0.5)"
            tickFormatter={sessionTickFormatter}
          />

          <YAxis
            dataKey="sessionLength"
            axisLine={false}
            domain={[20, 60]}
            tickLine={false}
            tick={false}
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
