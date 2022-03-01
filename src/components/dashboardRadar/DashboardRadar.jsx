import React from 'react';
import StyledDashboardRadar from './DashboardRadar.styled';
import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

function DashboardRadar(props) {
  return (
    <StyledDashboardRadar>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={props.data}
          style={{
            color: 'white',
            backgroundColor: '#282D30',
            borderRadius: '5px',
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            style={{
              fontWeight: '700',
              fontSize: '12px',
              textTransform: 'capitalize',
            }}
          />
          <PolarRadiusAxis
            domain={[0, 250]}
            tick={false}
            tickCount={7}
            axisLine={false}
          />

          <Radar dataKey="value" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </StyledDashboardRadar>
  );
}

export default DashboardRadar;
