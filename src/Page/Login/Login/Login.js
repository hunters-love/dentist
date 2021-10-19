import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signinusinggoogle } = useAuth();
    return (
        <div>
            <h3>please login</h3>
            <button onClick={signinusinggoogle}>googleSignIn</button>
        </div>
    );
};

export default Login;