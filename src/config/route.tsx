import React from 'react';
import { CrownOutlined, SmileOutlined } from '@ant-design/icons';
import { RouteConfig } from './type';

//配置菜单
const route = {
    path: '/',
    routes: [
        {
            path: '/accountManagement',
            name: '户口管理',
            icon: <SmileOutlined />,
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
