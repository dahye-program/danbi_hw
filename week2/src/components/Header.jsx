import React from 'react';
import styles from '../styles/Header.css';
import { useState } from 'react';

const Header = ({ isSideFunction }) => {
  const [isSide, setIsSide] = useState('navigation');

  const handleClick =()=>{
    isSide === 'navigation' ? setIsSide('navigation on') : setIsSide('navigation')
    isSideFunction(isSide);
  }

  return(
    <>
    <div className='topbar'>
      <div className='menubar'>
        <input type='checkbox' id='hamburger'/>
        <label htmlFor='hamburger' onClick={()=>{handleClick()}}>
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