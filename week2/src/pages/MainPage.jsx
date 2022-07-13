import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';

const MainPage = () => {
  const [menu, setMenu] = useState('');
  const menuFunction = (x) => {
    setMenu(x);
  };

  const clickMenuFunction = (index) => {
    console.log(index);
  }
  
  return(
  <>
    <Sidebar value={menu} clickMenuFunction={clickMenuFunction}/>
    <Header menuFunction={menuFunction}/>
    <Content/>
    <Footer />
  </>
  );
}

export default MainPage;
