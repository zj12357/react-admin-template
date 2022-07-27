import React from 'react';
import { CrownOutlined, SmileOutlined } from '@ant-design/icons';
import { RouteConfig } from './type';

//配置菜单
const route = {
    path: '/',
    routes: [
        {
            path: '/account',
            name: '户口管理',
            icon: <SmileOutlined />,
            routes: [
                {
                    path: '/account/customer',
                    name: '客户户口',
                    icon: <CrownOutlined />,
                },
            ],
        },
        {
            path: '/dashboard',
            name: '仪表盘',
            icon: <CrownOutlined />,
            access: 'canAdmin',

            routes: [
                {
                    path: '/dashboard/workbeach',
                    name: '一级页面',
                    icon: <CrownOutlined />,
                },
            ],
        },
    ],
};

export default {
    route,
} as RouteConfig;
