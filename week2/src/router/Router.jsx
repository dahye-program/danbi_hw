import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<MainPage />} />
                <Route path='/dashboard' element={<MainPage />} />
                <Route path='/customers' element={<MainPage />} />
                <Route path='/message' element={<MainPage />} />
                <Route path='/help' element={<MainPage />} />
                <Route path='/settings' element={<MainPage />} />
                <Route path='/password' element={<MainPage />} />
                <Route path='/signout' element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;