import React, { FC } from 'react';
import { RouteObject } from 'react-router-dom';
import Redirect from './Redirect';
import {
    WrapperRouteComponent,
    WrapperRouteWithOutLayoutComponent,
} from './config';
import LoginPage from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';

import account from './account';

const NotFound = React.lazy(() => import('../pages/NotFound'));

export const routeProps = (props: any) => {
    const routeList: RouteObject[] = [
        {
            path: '/',
            element: (
                <WrapperRouteComponent
                    element={<BasicLayout {...props} />}
                    titleId=""
                    auth
                />
            ),
            children: [...account(props)],
        },
        {
            path: '/user',
            element: (
                <WrapperRouteWithOutLayoutComponent
                    element={<UserLayout {...props} />}
                    titleId=""
                />
            ),
            children: [
                {
                    path: '/user/login',
                    element: (
                        <WrapperRouteWithOutLayoutComponent
                            element={<LoginPage {...props} />}
                            titleId="登录"
                        />
                    ),
                },
            ],
        },
        {
            path: '*' || '/404',
            element: (
                <WrapperRouteWithOutLayoutComponent
                    element={<NotFound {...props} />}
                    titleId="404"
                />
            ),
        },
    ];

    return routeList;
};
