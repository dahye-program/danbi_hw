import React from 'react';
import { useEffect } from 'react';
import styles from '../styles/Sidebar.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SIDEBAR from '../data/SIDEBAR_DATA';

const Sidebar = ({ onSide, onMenuClick, handleSideOff}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = SIDEBAR.findIndex(item => item.content === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return(
    <section 
      className={
        onSide=== false ? 'navigation off' : 'navigation'
      }>
      <ul className='navlist'>
        <li className='title'>
          <img src="images/logo.png" alt='로고 아이콘'/>
          <p className='titlecontent'>Brand Name</p>
          <div className='menubaricon'>
          <input type="checkbox" id="hamburger"/>
          <label htmlFor="hamburger" onClick={handleSideOff}><span><img src="images/hamburger.png" alt='사이드바 아이콘'/></span></label>
          </div>
        </li>
        {SIDEBAR && SIDEBAR.map((e, index)=> {
          return(
            <Link to={e.to} key={index}>
            <li 
            className={`navicon ${activeIndex === index ? 'active' : ''}`} 
            onClick={()=>{onMenuClick(e.name)}}>
            <img src={e.src}/>
           <p 
              className={
                onSide === false ? 'navicontent none' : 'navicontent'
              }>{e.name}</p>
          </li>
          {e.children && e.children.map((child, i)=>{
            return(
              <Link to={child.to} key={i}>
              <li 
                className={
                  onSide === false ? 'navicon none' : 'navicon'} 
                  onClick={()=>{onMenuClick(child.name)}}>
                <p className='navicontent child'>{child.name}</p>
              </li>
              </Link>
            )
          })}
          </Link>)})}
      </ul>
    </section>
  );
}

export default Sidebar;
