import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import DashboardTop from './components/dashboardHeader/DashboardHeader';
import DashboardDaily from './components/dashboardDaily/DashboardDaily';
import DashboardSession from './components/dashboardSession/DashboardSession';
import DashboardRadar from './components/dashboardRadar/DashboardRadar';
import DashboardScore from './components/dashboardScore/DashboardScore';
import DashboardStats from './components/dashboardStats/DashboardStats';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Sidebar />
        <DashboardTop />
        <DashboardDaily />
        <DashboardSession />
        <DashboardRadar />
        <DashboardScore />
        <DashboardStats />
      </main>
    </>
  );
}

export default App;
