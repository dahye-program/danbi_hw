import React from 'react';
import styles from './SideList.css';
import SIDEBAR from '../../data/SIDEBAR_DATA';
import SubMenu from './SubMenu';

const SideList = () => {
  return(
  <>
    <nav className='sidebar_list'>
      {SIDEBAR.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}
    </nav>
  </>
  )
}

export default SideList;