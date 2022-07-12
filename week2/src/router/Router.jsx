import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DashboardPage from '../pages/DashboardPage';
import CustomersPage from '../pages/CustomersPage';
import MessagePage from '../pages/MessagePage';
import HelpPage from '../pages/HelpPage';
import SettingsPage from '../pages/SettingsPage';
import PasswordPage from '../pages/PasswordPage';
import SignoutPage from '../pages/SignoutPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<MainPage />} />
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="/customers" element={<CustomersPage />} />
                <Route exact path="/message" element={<MessagePage />} />
                <Route exact path="/help" element={<HelpPage />} />
                <Route exact path="/settings" element={<SettingsPage />} />
                <Route exact path="/password" element={<PasswordPage />} />
                <Route exact path="/signout" element={<SignoutPage />} />                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;