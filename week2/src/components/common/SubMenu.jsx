import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubMenu.css';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  
  function showSubnav(){
    setSubnav(!subnav);
  }

  return (
    <div>
      <Link className='sidebar_link' to={item.to} onClick={item.children && showSubnav}>
        <div>
          <img src={item.src} alt="사이드바 아이콘"/> 
          <span className='sidebar_label'>{item.name}</span>
        </div>
        <div>
          {item.children && subnav ? item.iconOpened : item.children? item.iconClosed : null}
        </div>
      </Link>
      {subnav &&
        item.children.map((item, index) => {
          return (
            <Link className='dropdown_link' to={item.to} key={index}>
              <span className='sidebar_label'>{item.name}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default SubMenu;
