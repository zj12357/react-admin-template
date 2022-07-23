import React, { lazy, FC } from 'react';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';
import {
    WrapperRouteComponent,
    WrapperRouteWithOutLayoutComponent,
} from './config';
import LoginPage from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';

const Home = React.lazy(() => import('../pages/Home'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const NotFound = React.lazy(() => import('../pages/NotFound'));

const routeList: RouteObject[] = [
    {
        path: '/',
        element: (
            <WrapperRouteComponent element={<BasicLayout />} titleId="" auth />
        ),
        children: [
            {
                path: 'dashboard/home',
                element: (
                    <WrapperRouteComponent
                        element={<Home />}
                        titleId="工作台"
                        auth
                    />
                ),
            },
            {
                path: 'dashboard/workbeach',
                element: (
                    <WrapperRouteComponent
                        element={<Dashboard />}
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
