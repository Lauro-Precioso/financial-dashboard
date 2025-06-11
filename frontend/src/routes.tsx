import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/login/login';
import RegisterPage from './pages/register/register';


function RoutesApp() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
    );
}

export default RoutesApp;