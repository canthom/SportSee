import React from 'react';
import StyledDashboardSession from './DashboardSession.styled';
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ReferenceArea,
} from 'recharts';
import propTypes from 'prop-types';

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

const renderDot = {
  r: 4,
  fill: '#fff',
  stroke: 'rgba(255,255,255, 0.5)',
  strokeWidth: '10',
};

function DashboardSession(props) {
  const [xRef, setXRef] = React.useState(0);

  return (
    <StyledDashboardSession>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={props.data}
          margin={{ top: 0, right: 20, bottom: -30, left: -40 }}
          width={100}
          onMouseMove={(e) => {
            setXRef(e.activeLabel);
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="rgba(255, 255, 255, 0.5)"
            tickMargin={-30}
            tickFormatter={sessionTickFormatter}
          />

          <YAxis
            dataKey="sessionLength"
            axisLine={false}
            tickLine={false}
            tick={false}
            domain={[-20, 100]}
          />

          <ReferenceArea
            fill="rgba(0,0,0, 0.4)"
            x1={xRef}
            x2={7}
            y1={-20}
            y2={100}
          />

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="2"
            dot={false}
            activeDot={renderDot}
            left="0"
            right="0"
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </StyledDashboardSession>
  );
}
DashboardSession.propTypes = {
  data: propTypes.array.isRequired,
};
export default DashboardSession;
