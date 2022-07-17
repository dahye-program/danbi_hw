import React from 'react';
import { useEffect } from 'react';
import styles from '../../styles/Sidebar.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideList from './SideList';

const Sidebar = ({ onSide, onMenuClick, handleSideOff}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    // const activeItem = SIDEBAR.findIndex(item => item.content === curPath);
    // setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return(
    <section 
      className={
        onSide=== false ? 'navigation off' : 'navigation'
      }>
      <div className='navlist'>
        <span className='title'>
          <img src="images/logo.png" alt='로고 아이콘'/>
          <p className='titlecontent'>Brand Name</p>
          <span className='menubaricon'>
          <input type="checkbox" id="hamburger"/>
          <label htmlFor="hamburger" onClick={handleSideOff}>
            <span>
              <img src="images/hamburger.png" alt='사이드바 아이콘'/>
            </span>
          </label>
          </span>
        </span>
      <SideList />
      </div>
    </section>
  );
}

export default Sidebar;
