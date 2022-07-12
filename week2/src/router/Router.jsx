import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;