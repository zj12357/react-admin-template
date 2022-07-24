import React, { FC } from 'react';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';
import Redirect from './Redirect';
import {
    WrapperRouteComponent,
    WrapperRouteWithOutLayoutComponent,
} from './config';
import LoginPage from '@/pages/Login';
import BasicLayout from '@/layouts/BasicLayout';

const WelCome = React.lazy(() => import('../pages/WelCome'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const routeProps = (props: any) => {
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
            children: [
                {
                    path: '/welcome',
                    element: (
                        <WrapperRouteComponent
                            element={<WelCome {...props} />}
                            titleId="欢迎"
                            auth
                        />
                    ),
                },
                {
                    path: '/dashboard',
                    element: <Redirect to="/dashboard/workbeach" />,
                },
                {
                    path: '/dashboard/workbeach',
                    element: (
                        <WrapperRouteComponent
                            element={<Dashboard {...props} />}
                            titleId="工作台"
                            auth
                        />
                    ),
                },
            ],
        },
        {
            path: '/login',
            element: (
                <WrapperRouteWithOutLayoutComponent
                    element={<LoginPage {...props} />}
                    titleId="登录"
                />
            ),
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

const RenderRouter: FC = (props) => {
    const routeList = routeProps(props);
    const element = useRoutes(routeList);
    return element;
};

export default RenderRouter;
