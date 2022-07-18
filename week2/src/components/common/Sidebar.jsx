import React from 'react';
import styles from '../../styles/Sidebar.css';
import SideMenu from './SideMenu';
import SIDEBAR from '../../data/SIDEBAR_DATA';

const Sidebar = ({ onSide, onMenuClick, handleSideOff}) => {
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
        <nav className='sidebar_list'>
          {SIDEBAR.map((item, index) => {
            return <SideMenu item={item} key={index} isSide={onSide} />;
        })}
    </nav>
      </div>
    </section>
  );
}

export default Sidebar;
