import React from 'react';
import styles from './Header.css'

const Header = () => {
  return(
    <>
    <div className='topbar'>
      <div className='menubar'>
        <input type='checkbox' id='hamburger'/>
        <label for='hamburger'>
          <span><img src='images/hamburger.png' alt="사이드바 아이콘"/></span>
        </label>
      </div>
      <input placeholder='Search here'/>
      <div className='profile'>
        <img src='images/profile.png' alt="프로필 아이콘"/>
      </div>
    </div>
    </>
  );
}

export default Header;