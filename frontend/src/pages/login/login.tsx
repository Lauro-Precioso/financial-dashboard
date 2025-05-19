import React, { useState } from 'react';

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
        <div>Hello World!</div>
    );
};

export default LoginPage;