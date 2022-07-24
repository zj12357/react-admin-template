import React from 'react';
import { CrownOutlined, SmileOutlined } from '@ant-design/icons';
import { RouteConfig } from './type';

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/welcome',
                name: '欢迎',
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
    },
    location: {
        pathname: '/',
    },
} as RouteConfig;
