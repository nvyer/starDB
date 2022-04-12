import React from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
    if (isLoggedIn) return <Navigate to='/' />;
    return (
        <div className='jumbotron' style={{ margin: '11px 10%' }}>
            <p>Login to see secrets!</p>
            <button className='btn btn-primary' onClick={onLogin}>Login</button>
        </div>
    );
};

export default LoginPage;