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

function radarTickFormatter(value) {
  if (value === 'cardio') {
    return 'Cardio';
  }

  if (value === 'energy') {
    return 'Énergie';
  }

  if (value === 'speed') {
    return 'Vitesse';
  }

  if (value === 'strength') {
    return 'Force';
  }

  if (value === 'intensity') {
    return 'Intensité';
  }

  if (value === 'endurance') {
    return 'Endurance';
  }
}

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
            tickFormatter={radarTickFormatter}
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
