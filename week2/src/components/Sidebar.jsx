import React from 'react';
import { useEffect } from 'react';
import styles from '../styles/Sidebar.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SIDEBAR from '../data/SIDEBAR_DATA';


const Sidebar = ({value, clickMenuFunction}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const contentClick = (name) => {
    clickMenuFunction(name);
  }

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = SIDEBAR.findIndex(item => item.content === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return(
    <section 
      className={
        value === 'navigation' ? 'navigation on' : 'navigation'
      }>
      <ul className='navlist'>
        <li className='title'>
          <img src="images/logo.png" alt='로고 아이콘'/>
          <p className='titlecontent'>Brand Name</p>
          <div className='menubaricon'>
          <input type="checkbox" id="hamburger"/>
          <label htmlFor="hamburger"><span><img src="images/hamburger.png" alt='사이드바 아이콘'/></span></label>
          </div>
        </li>
        {SIDEBAR && SIDEBAR.map((e, index)=> {
          return(
            <Link to={e.to} key={index}>
            <li 
            className={`navicon ${activeIndex === index ? 'active' : ''}`} 
            onClick={()=>{contentClick(e.name)}}>
            <img src={e.src}/>
           <p 
              className={
                value === 'navigation' ? 'navicontent none' : 'navicontent'
              }>{e.name}</p>
          </li>
          </Link>)})}
      </ul>
    </section>
  );
}

export default Sidebar;
