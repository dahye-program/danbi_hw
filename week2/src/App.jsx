import React from 'react';
import Globalstyle from './styles/Globalstyle.css'
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import Breadcrumbs from './components/common/Breadcrumbs';
import Footer from './components/common/Footer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CustomersPage from './pages/CustomersPage';
import MessagePage from './pages/MessagePage';
import HelpPage from './pages/HelpPage';
import SettingsPage from './pages/SettingsPage';
import PasswordPage from './pages/PasswordPage';
import SignoutPage from './pages/SignoutPage';

function App() {
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
  <BrowserRouter>
    <Sidebar 
      onSide={isSide}
      onMenuClick={handleMenuClick}
      handleSideOff={handleSideOff}/>
    <Header onMenuClick={handleSideOn} />
    <Breadcrumbs menuName={menuName} />
    <Routes>
      <Route path="" element={<MainPage/>}/>
      <Route path="/dashboard" element={<MainPage/>}/>
      <Route path="/customers" element={<CustomersPage/>}/>
      <Route path="/message" element={<MessagePage/>}/>
      <Route path="/help" element={<HelpPage/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
      <Route path="/password" element={<PasswordPage/>}/>
      <Route path="/signout" element={<SignoutPage/>}/>  
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
