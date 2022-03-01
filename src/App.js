import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/header/Header';
import Main from './components/styles/Main.styled';
import Sidebar from './components/sidebar/Sidebar';
import DashboardTop from './components/dashboardHeader/DashboardHeader';
import DashboardDaily from './components/dashboardDaily/DashboardDaily';
import DashboardSession from './components/dashboardSession/DashboardSession';
import DashboardRadar from './components/dashboardRadar/DashboardRadar';
import DashboardScore from './components/dashboardScore/DashboardScore';
import DashboardStats from './components/dashboardStats/DashboardStats';
import { getUser } from './functions/getUser';

const user = {
  data: {
    id: 18,
    userInfos: { firstName: 'Cecilia', lastName: 'Ratorez', age: 34 },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
};

const activity = {
  data: {
    userId: 18,
    sessions: [
      { day: '2020-07-01', kilogram: 70, calories: 240 },
      { day: '2020-07-02', kilogram: 69, calories: 220 },
      { day: '2020-07-03', kilogram: 70, calories: 280 },
      { day: '2020-07-04', kilogram: 70, calories: 500 },
      { day: '2020-07-05', kilogram: 69, calories: 160 },
      { day: '2020-07-06', kilogram: 69, calories: 162 },
      { day: '2020-07-07', kilogram: 69, calories: 390 },
    ],
  },
};

const average = {
  data: {
    userId: 18,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 40 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 30 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 50 },
      { day: 7, sessionLength: 50 },
    ],
  },
};

const performance = {
  data: {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 200, kind: 1 },
      { value: 240, kind: 2 },
      { value: 80, kind: 3 },
      { value: 80, kind: 4 },
      { value: 220, kind: 5 },
      { value: 110, kind: 6 },
    ],
  },
};

const theme = {
  colors: {
    white: '#fff',
    black: '#020203',
    grey: '#74798c',
    greyDark: '#282D30',
    red: '#ff0000',
  },
};

const testRadar = [
  {
    kind: 'cardio',
    value: '200',
  },
  {
    kind: 'energy',
    value: '240',
  },
  {
    kind: 'endurance',
    value: '80',
  },
  {
    kind: 'strength',
    value: '80',
  },
  {
    kind: 'speed',
    value: '220',
  },
  {
    kind: 'intensity',
    value: '110',
  },
];

const testScore = [
  { score: 30, fill: 'red' },
  { score: 100, fill: 'transparent' },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />

        <Main>
          <Sidebar />
          <DashboardTop name={user.data.userInfos.firstName} />
          <DashboardDaily data={activity.data.sessions} />
          <DashboardSession data={average.data.sessions} />
          <DashboardRadar data={testRadar} />
          <DashboardScore data={testScore} />
          <DashboardStats
            calorie={user.data.keyData.calorieCount}
            protein={user.data.keyData.proteinCount}
            carbo={user.data.keyData.carbohydrateCount}
            lipid={user.data.keyData.lipidCount}
          />
        </Main>
      </>
    </ThemeProvider>
  );
}

export default App;
