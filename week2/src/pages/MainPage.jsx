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
  return(
  <>
    <Sidebar value={menu}/>
    <Header menuFunction={menuFunction}/>
    <Content />
    <Footer />
  </>
  );
}

export default MainPage;
