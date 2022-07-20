import React, { lazy, FC } from 'react';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';
import {
    WrapperRouteComponent,
    WrapperRouteWithOutLayoutComponent,
} from './config';
import LoginPage from '@/pages/Login';
import LayoutPage from '@/layouts';

const Home = React.lazy(() => import('../pages/Home'));

const NotFound = React.lazy(() => import('../pages/NotFound'));

const routeList: RouteObject[] = [
    {
        path: '/',
        element: (
            <WrapperRouteComponent element={<LayoutPage />} titleId="" auth />
        ),
        children: [
            {
                path: 'dashboard/workbeach',
                element: (
                    <WrapperRouteComponent
                        element={<Home />}
                        titleId="工作台"
                        auth
                    />
                ),
            },
        ],
    },
    {
        path: 'login',
        element: (
            <WrapperRouteWithOutLayoutComponent
                element={<LoginPage />}
                titleId="登录"
            />
        ),
    },
    {
        path: '*',
        element: (
            <WrapperRouteWithOutLayoutComponent
                element={<NotFound />}
                titleId="404"
            />
        ),
    },
];

const RenderRouter: FC = () => {
    const element = useRoutes(routeList);
    return element;
};

export default RenderRouter;
