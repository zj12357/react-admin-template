import React, { FC } from 'react';
import { RouteObject } from 'react-router-dom';
import Redirect from '../Redirect';
import { WrapperRouteComponent } from '../config';

const AccountCustomer = React.lazy(
    () => import('@/pages/AccountManagement/AccountCustomer'),
);
const AccountSearchList = React.lazy(
    () => import('@/pages/AccountManagement/AccountCustomer/AccountSearchList'),
);

const AccountDetail = React.lazy(
    () => import('@/pages/AccountManagement/AccountDetail'),
);

type AccountRouteProps = {};

const AccountRoute = (props: any) => {
    const routeList: RouteObject[] = [
        {
            path: '/account',
            element: <Redirect to="/account/customer" />,
        },
        {
            path: '/account/customer',
            element: (
                <WrapperRouteComponent
                    element={<AccountCustomer {...props} />}
                    titleId="客户户口"
                    auth
                />
            ),
        },
        {
            path: '/accountDetail/:id',
            element: (
                <WrapperRouteComponent
                    element={<AccountDetail {...props} />}
                    titleId="户口详情"
                    auth
                />
            ),
        },
        {
            path: '/account/AccountSearchList',
            element: (
                <WrapperRouteComponent
                    element={<AccountSearchList {...props} />}
                    titleId="户口搜索列表"
                    auth
                />
            ),
        },
    ];
    return routeList;
};

export default AccountRoute;
