import React from "react";
import { Navigate } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center" style={{ margin: '11px 10%' }}>
                <h3>This page is full of secrets!!!</h3>
            </div>
        );
    }

    return <Navigate to='/login' />;
};

export default SecretPage;