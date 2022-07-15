import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';

const MainPage = () => {
  const [side, setSide] = useState('');
  const [menuName, setMenuname] = useState('');

  // Sidebar로 전달하기위한 side value
  const isSideFunction = (x) => {
    setSide(x);
  };

  // Breadcrumb 메뉴 이름
  const clickMenuFunction = (menuName) => {
    setMenuname(menuName);
  }
  
  return(
  <>
    <Sidebar value={side} clickMenuFunction={clickMenuFunction}/>
    <Header isSideFunction={isSideFunction}/>
    <Breadcrumbs menuName={menuName}/>
    <Content menuName={menuName}/>
    <Footer />
  </>
  );
}

export default MainPage;

