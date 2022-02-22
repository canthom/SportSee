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

const theme = {
  colors: {
    white: '#fff',
    black: '#020203',
    grey: '#74798c',
    red: '#ff0000',
  },
};

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
          <DashboardSession />
          <DashboardRadar />
          <DashboardScore />
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
