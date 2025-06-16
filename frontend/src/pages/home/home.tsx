import React, { useState } from 'react';
import "../../index.css";
import { auth } from "../../firebase/config.ts"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const HomePage = () => {

    return (
        <div className='flex w-full h-screen bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500'>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;