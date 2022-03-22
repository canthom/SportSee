import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/header/Header';
import Main from './components/styles/Main.styled';
import Sidebar from './components/sidebar/Sidebar';
import UserPage from './pages/userPage/userPage.jsx';
import Home from './pages/home/Home';

/**
 * Theme Colors
 * @type {object}
 */
const theme = {
  colors: {
    white: '#fff',
    black: '#020203',
    grey: '#74798c',
    greyDark: '#282D30',
    red: '#ff0000',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Main>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
