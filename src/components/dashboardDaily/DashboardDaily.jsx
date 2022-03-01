import React from 'react';
import StyledDashboardDaily from './DashboardDaily.styled';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

const legendStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'right',
};

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul style={{ display: 'flex', justifyContent: 'end' }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginLeft: '5px',
          }}
        >
          <div
            style={{
              backgroundColor: `${entry.color ? entry.color : 'black'}`,
              padding: '4px',
              borderRadius: '50%',
              marginRight: '5px',
              width: '4px',
              height: '4px',
              display: 'inline',
            }}
          >
            {' '}
          </div>
          <p
            style={{
              color: `#74798c`,
              fontSize: '14px',
              textTransform: 'capitalize',
            }}
          >
            {entry.value}
          </p>
        </li>
      ))}
    </ul>
  );
};

const tooltipStyle = {
  color: 'white',
  backgroundColor: 'red',
  padding: '10px',
  textAlign: 'center',
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={tooltipStyle}>
        <p>{`${payload[0].value}g`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

function DashboardDaily(props) {
  return (
    <StyledDashboardDaily>
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={props.data}
          barCategoryGap={10}
          barGap={8}
          barSize={8}
          margin={{ top: 50, right: 5, bottom: 5, left: 5 }}
        >
          <CartesianGrid vertical={false} strokeDasharray={1} />
          <XAxis dataKey="day" />
          <YAxis dataKey="kilogram" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            content={renderLegend}
            wrapperStyle={legendStyle}
            align="right"
          />
          <Bar dataKey="kilogram" radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </StyledDashboardDaily>
  );
}

export default DashboardDaily;
