import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/SideMenu.css';

const SideMenu = ({ item, onSide }) => {
  const [subnav, setSubnav] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();

  function showSubnav(){
    setSubnav(!subnav);
  }

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    setActiveMenu(curPath);
  }, [location]);

  return (
    <div>
      <Link 
        className={`sidebar_link ${activeMenu === item.content ? 'active' : ''}`}
        to={item.to} onClick={item.children && showSubnav}>
        <div>
          <img src={item.src} alt="사이드바 아이콘"/> 
          <span className={`sidebar_label ${onSide ? '' : 'none'}`}>  
              {item.name}
          </span>
        </div>
        <div>
          {item.children && subnav ? item.iconOpened : item.children? item.iconClosed : null}
        </div>
      </Link>
      {subnav &&
        item.children.map((item, index) => {
          return (
            <Link 
              className={activeMenu === item.content ? 'dropdown_link active' : 'dropdown_link'} to={item.to} key={index}>
              <span className={`sidebar_label ${onSide ? '' : 'none'}`}>
                {item.name}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default SideMenu;
