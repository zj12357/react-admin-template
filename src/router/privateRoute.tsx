import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps, useLocation } from 'react-router';
import { selectToken } from '@/store/user/userSlice';
import { useAppSelector } from '@/store/hooks';

const PrivateRoute = (props: RouteProps) => {
    const location = useLocation();
    const { pathname } = location;
    const token = useAppSelector(selectToken);

    return token ? (
        pathname === '/' ? (
            <Navigate to={{ pathname: '/accountManagement' }} replace />
        ) : (
            props.element
        )
    ) : (
        <Navigate to={{ pathname: '/user/login' }} replace />
    );
};

export default PrivateRoute;
