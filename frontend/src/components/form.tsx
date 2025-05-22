import * as React from 'react';

export const Form = () => {
    return (
        <div className='w-11/12 max-w-[700px] bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                        type='password'
                    />
                </div>
                <div>
                    <div>
                        <input
                            type='checkbox'
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' htmlFor='remember'>Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Forgot password</button>
                </div>
            </div>
        </div>
    );
}

export default Form;