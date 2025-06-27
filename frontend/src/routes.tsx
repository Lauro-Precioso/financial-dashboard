import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import HomePage from './pages/home/home';


function RoutesApp() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
        </Routes>
    );
}

export default RoutesApp;