import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';

const MainPage = () => {
  const [menuName, setMenuname] = useState('');
  const [isSide, setIsSide] = useState(false);

  // Sidebar 열기
  const handleSideOn = ()=>{
    setIsSide(!isSide);
    document.querySelector('.navlist').classList.remove('off');
    console.log(isSide);
  }

  // Sidebar 닫기
  const handleSideOff =()=>{
    setIsSide(!isSide);
    document.querySelector('.navlist').classList.add('off');
  }

  // Breadcrumb 메뉴, Content 영역 지정 이름
  const handleMenuClick = (menuName) => {
    setMenuname(menuName);
  }
  
  return(
  <>
    <Sidebar 
      onSide={isSide}
      onMenuClick={handleMenuClick}
      handleSideOff={handleSideOff}/>
    <Header onMenuClick={handleSideOn} />
    <Breadcrumbs menuName={menuName} />
    <Content menuName={menuName} />
    <Footer />
  </>
  );
}

export default MainPage;

