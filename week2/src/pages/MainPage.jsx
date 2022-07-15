import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';

const MainPage = () => {
  const [menuName, setMenuname] = useState('');
  const [sideOn, setSideOn] = useState(false);

  // Sidebar 열기
  const handleSideOn = ()=>{
    setSideOn(!sideOn);
    document.querySelector('.navlist').classList.remove('off');
  }

  // Sidebar 닫기
  const handleSideOff =()=>{
    setSideOn(!sideOn);
    document.querySelector('.navlist').classList.add('off');
  }

  // Breadcrumb 메뉴, Content 영역 지정 이름
  const clickMenuFunction = (menuName) => {
    setMenuname(menuName);
  }
  
  return(
  <>
    <Sidebar 
      sideOn={sideOn}
      clickMenuFunction={clickMenuFunction}
      handleSideOff={handleSideOff}/>
    <Header handleSideOn={handleSideOn} />
    <Breadcrumbs menuName={menuName} />
    <Content menuName={menuName} />
    <Footer />
  </>
  );
}

export default MainPage;

