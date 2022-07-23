import React from 'react';
import {
    AntDesignOutlined,
    CrownOutlined,
    SmileOutlined,
    TabletOutlined,
} from '@ant-design/icons';

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/dashboard/home',
                name: '欢迎',
                icon: <SmileOutlined />,
                component: './Welcome',
            },
            {
                path: '/dashboard',
                name: '管理页',
                icon: <CrownOutlined />,
                access: 'canAdmin',
                component: './Admin',
                routes: [
                    {
                        path: '/dashboard/workbeach',
                        name: '一级页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page2',
                        name: '二级页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page3',
                        name: '三级页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                ],
            },
            {
                name: '列表页',
                icon: <TabletOutlined />,
                path: '/list',
                component: './ListTableList',
                routes: [
                    {
                        path: '/list/sub-page',
                        name: '一级列表页面',
                        icon: <CrownOutlined />,
                        routes: [
                            {
                                path: 'sub-sub-page1',
                                name: '一一级列表页面',
                                icon: <CrownOutlined />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page2',
                                name: '一二级列表页面',
                                icon: <CrownOutlined />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page3',
                                name: '一三级列表页面',
                                icon: <CrownOutlined />,
                                component: './Welcome',
                            },
                        ],
                    },
                    {
                        path: '/list/sub-page2',
                        name: '二级列表页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                    {
                        path: '/list/sub-page3',
                        name: '三级列表页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                ],
            },
            {
                path: 'https://ant.design',
                name: 'Ant Design 官网外链',
                icon: <AntDesignOutlined />,
            },
        ],
    },
    location: {
        pathname: '/',
    },
};
