import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps, useLocation } from 'react-router';

const PrivateRoute = (props: RouteProps) => {
    const location = useLocation();
    const { pathname } = location;

    const logged = true; // 这里做登录验证

    return logged ? (
        pathname === '/' ? (
            <Navigate to={{ pathname: `/welcome` }} replace />
        ) : (
            props.element
        )
    ) : (
        <Navigate to={{ pathname: `/login` }} replace />
    );
};

export default PrivateRoute;
