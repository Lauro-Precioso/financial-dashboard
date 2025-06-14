import React, { useState } from 'react';
import Form from '../../components/LoginForm';
import LoginImage from '../../components/LoginImage';
import "./login.css";
import "../../index.css";
import { auth } from "../../firebase/config.ts"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const LoginPage = () => {

    return (
        <div className='flex w-full h-screen bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500'>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center'>
                <LoginImage />
            </div>
            <div className='w-full flex items-center justify-center lg:w-1/2'>
                <Form />
            </div>
        </div>
    );
};

export default LoginPage;