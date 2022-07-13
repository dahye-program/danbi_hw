import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
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
    <Content menuName={menuName}/>
    <Footer />
  </>
  );
}

export default MainPage;

