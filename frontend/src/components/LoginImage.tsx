import * as React from 'react';
import loginImage from '../../public/images/loginImage.svg'

export const LoginImage = () => {
    return(
        <div>
            <img src={loginImage} alt='Login Image' className='w-160 drop-shadow-2xl'/>
        </div>
    );
};

export default LoginImage