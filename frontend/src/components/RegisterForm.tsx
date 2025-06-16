import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RegisterForm = () => {
    const { register, loginWithGoogle, loading, error } = useAuth();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    const handleRegister = () => {
        register(email, password, confirmPassword, username);
    };

    const handleGoogleLogin = () => {
        loginWithGoogle();
    };

    const navigate = useNavigate();
    
    const handleLoginPage = () => {
        navigate('/login')
    };

    const [showPassword, setShowPassword] = React.useState({
        viewPassword: false,
        viewConfirmPassword: false,
    });

    const handleClick = (field: 'viewPassword' | 'viewConfirmPassword') => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <div className='w-11/12 max-w-md bg-white px-10 py-10 rounded-3xl border-2 border-gray-200 border-solid'>
            <h1 className='text-5xl leading-normal font-semibold text-center bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent'>Sign Up!</h1>
            <div className='mt-4'>
                <div>
                    <div className='relative w-full'>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 pl-12 bg-transparent'
                            placeholder='Username'
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-gray-500 stroke-1 stroke-current pointer-events-none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='relative w-full'>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 pl-12 bg-transparent'
                            placeholder='Email'
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-gray-500 stroke-1 stroke-current pointer-events-none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className="relative w-full">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-2 border-gray-100 rounded-xl p-4 pl-12 bg-transparent"
                            placeholder="Password"
                            type={showPassword.viewPassword ? 'text':'password'}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5.5 text-gray-500 stroke-1 stroke-current pointer-events-none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <svg
                            onClick={() => handleClick('viewPassword')}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 size-5.5 text-gray-500 stroke-1 stroke-current cursor-pointer"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div> 
                </div>
                <div className='mt-3'>
                    <div className="relative w-full">
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border-2 border-gray-100 rounded-xl p-4 pl-12 bg-transparent"
                            placeholder="Confirm password"
                            type={showPassword.viewConfirmPassword ? 'text':'password'}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5.5 text-gray-500 stroke-1 stroke-current pointer-events-none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <svg 
                            onClick={() => handleClick('viewConfirmPassword')}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 size-5.5 text-gray-500 stroke-1 stroke-current cursor-pointer"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div> 
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button onClick={handleRegister} className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500 cursor-pointer'>Sign Up</button>
                    <button onClick={handleGoogleLogin} className='flex rounded-xl py-3 border-2 border-gray-100 font-medium text-base items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Sign up with Google
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Already have an account?</p>
                    <button onClick={handleLoginPage} className='bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-medium ml-2 cursor-pointer'>Sign in</button>
                </div>
            </div>
            <div className='mt-8 flex justify-center text-red-500'>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default RegisterForm;