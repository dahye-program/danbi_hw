import React from "react";
import Globalstyle from "./styles/Globalstyle.css";
import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Breadcrumbs from "./components/common/Breadcrumbs";
import Footer from "./components/common/Footer";
import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/contents/Dashboard";
import Product from "./components/contents/product/Product";
import ProductDetail from "./components/contents/product/ProductDetail";
import Customers from "./components/contents/Customers";
import { Message, MessageOne } from "./components/contents/Message";
import { Help, HelpOne } from "./components/contents/Help";
import Settings from "./components/contents/Settings";
import Password from "./components/contents/Password";
import Signout from "./components/contents/Signout";
import NotFound from "./components/common/NotFound";

function App() {
  const [menuName, setMenuname] = useState("");
  const [isSide, setIsSide] = useState(false);
  const searchRef = useRef();

  // Sidebar
  const handleSidebar = () => {
    setIsSide(!isSide);
  };

  // Search
  const onInputClick = (input) => {
    searchRef.current.handleSearch(input);
  };

  // Breadcrumb
  const handleMenuClick = (menuName) => {
    setMenuname(menuName);
  };

  return (
    <BrowserRouter>
      <Sidebar
        onSide={isSide}
        onMenuClick={handleMenuClick}
        handleSide={handleSidebar}
      />
      <Header onMenuClick={handleSidebar} onChange={onInputClick} />
      <Breadcrumbs Name={menuName} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product">
          <Route index element={<Product ref={searchRef} />} />
          <Route path="product_detail" element={<ProductDetail />} />
        </Route>
        <Route path="customers" element={<Customers />} />
        <Route path="message" element={<Message />} />
        <Route path="message1" element={<MessageOne />} />
        <Route path="help" element={<Help />} />
        <Route path="help1" element={<HelpOne />} />
        <Route path="settings" element={<Settings />} />
        <Route path="password" element={<Password />} />
        <Route path="signout" element={<Signout />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
