import React from 'react';
import meditation from '../assets/sidebar-meditation-icon.svg';
import natation from '../assets/sidebar-natation-icon.svg';
import bike from '../assets/sidebar-bike-icon.svg';
import musculation from '../assets/sidebar-musculation-icon.svg';

import StyledSidebar from './Sidebar.styled';

function Sidebar() {
  return (
    <StyledSidebar>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={meditation} alt="Meditation Icon" />
            </a>
          </li>

          <li>
            <a href="/">
              <img src={natation} alt="Natation Icon" />
            </a>
          </li>

          <li>
            <a href="/">
              <img src={bike} alt="Bike Icon" />
            </a>
          </li>

          <li>
            <a href="/">
              <img src={musculation} alt="Musculation Icon" />
            </a>
          </li>
        </ul>
      </nav>
      <span>Copyright, SportSee 2020</span>
    </StyledSidebar>
  );
}

export default Sidebar;
