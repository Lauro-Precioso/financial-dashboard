import React, { useState } from 'react';
import Form from '../../components/form';
import "./login.css";
import "../../index.css";

export const LoginPage = () => {

    const [user, setUser] = useState<string>(''); //Estado para o usuário
    const [password, setPassword] = useState<string>(''); //Estado para a senha

    //Função para atualizar o estado do usuário
    const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    };

    //Função para atualizar o estado da senha
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        console.log(user);
        console.log(password);
    };

    return (
        <div className='flex w-full h-screen bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500'>
            <div className='w-full flex items-center justify-center lg:w-1/2'>
                <Form />
            </div>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center'>
                <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full'/>
                <div className='w-full h-1/2 absolute bg-white/10 backdrop-blur-lg'/>
            </div>
        </div>
    );
};

export default LoginPage;