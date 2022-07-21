import React from 'react';
import Globalstyle from './styles/Globalstyle.css'
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import Breadcrumbs from './components/common/Breadcrumbs';
import Footer from './components/common/Footer';
import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Product from './components/contents/product/Product';
// import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomersPage from './pages/CustomersPage';
import MessagePage from './pages/MessagePage';
import MessageOnePage from './pages/MessageOnePage';
import HelpPage from './pages/HelpPage';
import HelpOnePage from './pages/HelpOnePage';
import SettingsPage from './pages/SettingsPage';
import PasswordPage from './pages/PasswordPage';
import SignoutPage from './pages/SignoutPage';

function App() {
  const [menuName, setMenuname] = useState('');
  const [isSide, setIsSide] = useState(false);
  const searchRef = useRef();

  // Sidebar 열기
  const handleSideOn = ()=>{
    setIsSide(!isSide);
  }

  // Sidebar 닫기
  const handleSideOff =()=>{
    setIsSide(!isSide);
  }

  // input 값 검색
  const onInputClick = (input) => {
    searchRef.current.search(input);
  }

  // Breadcrumb
  const handleMenuClick = (menuName) => {
    setMenuname(menuName);
  }
  
  return(
  <BrowserRouter>
    <Sidebar 
      onSide={isSide}
      onMenuClick={handleMenuClick}
      handleSideOff={handleSideOff}/>
    <Header onMenuClick={handleSideOn} handleInputClick={onInputClick} />
    <Breadcrumbs menuName={menuName} />
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="dashboard" element={<MainPage/>}/>
      <Route path="product" >
        <Route index element={<Product ref={searchRef}/>}/>
        <Route path="product_detail" element={<ProductDetailPage />} />
      </Route>
      <Route path="customers" element={<CustomersPage/>}/>
      <Route path="message" element={<MessagePage/>}/>
      <Route path=":messageId" element={<MessageOnePage/>}/>
      <Route path="help" element={<HelpPage/>}/>
      <Route path=":helpId" element={<HelpOnePage/>}/>
      <Route path="settings" element={<SettingsPage/>}/>
      <Route path="password" element={<PasswordPage/>}/>
      <Route path="signout" element={<SignoutPage/>}/>  
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
