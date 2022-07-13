import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';

const MainPage = () => {
  const [menu, setMenu] = useState('');
  const [menuName, setMenuname] = useState('');
  const menuFunction = (x) => {
    setMenu(x);
  };

  const clickMenuFunction = (menuName) => {
    setMenuname(menuName);
  }
  
  return(
  <>
    <Sidebar value={menu} clickMenuFunction={clickMenuFunction}/>
    <Header menuFunction={menuFunction}/>
    <Breadcrumbs menuName={menuName}/>
    <Content />
    <Footer />
  </>
  );
}

export default MainPage;

