import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps, useLocation } from 'react-router';
import Empty from '@/components/Empty';
// import useStore from '@src/stores/user'

const PrivateRoute = (props: RouteProps) => {
    const location = useLocation();
    const { pathname } = location;
    // const logged = useStore((state) => state.logged)
    const logged = true; // 这里做登录验证

    return logged ? (
        pathname === '/' ? (
            <Navigate to={{ pathname: `/welcome` }} replace />
        ) : (
            props.element
        )
    ) : (
        <Empty />
    );
};

export default PrivateRoute;
