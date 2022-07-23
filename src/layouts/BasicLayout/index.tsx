import React, { FC, useState, Suspense } from 'react';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import { Avatar, Button, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import routeList from '@/config/route';
import Loading from '@/components/Loading';

type BasicLayoutProps = {};

const testTabList = [
    {
        tab: '首页',

        key: '/dashboard/home',
    },
    {
        tab: '控制板',
        key: '/dashboard/workbeach',
    },
];

const BasicLayout: FC<BasicLayoutProps> = (props) => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        fixSiderbar: true,
    });
    const navigate = useNavigate();
    const [pathname, setPathname] = useState('/');
    const [tabList, setTabList] = useState(testTabList);

    return (
        <div
            id="m-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                {...routeList}
                location={{
                    pathname,
                }}
                // waterMarkProps={{
                //     content: '水印',
                // }}
                menuFooterRender={(props) => {
                    return (
                        <a
                            style={{
                                lineHeight: '48rpx',
                                display: 'flex',
                                height: 48,
                                color: 'rgba(255, 255, 255, 0.65)',
                                alignItems: 'center',
                            }}
                            href="https://preview.pro.ant.design/dashboard/analysis"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                alt="pro-logo"
                                src="https://procomponents.ant.design/favicon.ico"
                                style={{
                                    width: 16,
                                    height: 16,
                                    margin: '0 16px',
                                    marginRight: 10,
                                }}
                            />
                            {!props?.collapsed && 'Preview Pro'}
                        </a>
                    );
                }}
                onMenuHeaderClick={() => navigate('/')}
                menuItemRender={(item, dom) => (
                    <div
                        onClick={() => {
                            navigate(item.path ?? '/404');
                            setPathname(item.path ?? '/404');
                        }}
                    >
                        {dom}
                    </div>
                )}
                rightContentRender={() => (
                    <div>
                        <Avatar
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                        />
                    </div>
                )}
                {...settings}
            >
                <PageContainer
                    // loading
                    header={{
                        title: '页面标题',
                        ghost: true,
                        breadcrumb: {
                            routes: [
                                {
                                    path: '',
                                    breadcrumbName: '一级页面',
                                },
                                {
                                    path: '',
                                    breadcrumbName: '二级页面',
                                },
                                {
                                    path: '',
                                    breadcrumbName: '当前页面',
                                },
                            ],
                        },
                    }}
                    tabActiveKey={pathname}
                    tabList={tabList}
                    tabProps={{
                        type: 'editable-card',
                        hideAdd: true,
                        onEdit: (e, action) => {
                            if (action === 'remove') {
                                setTabList(
                                    tabList.filter(
                                        (item) => item.key !== pathname,
                                    ),
                                );
                            }
                        },
                    }}
                >
                    <Suspense fallback={<Loading />}>
                        <Outlet></Outlet>
                    </Suspense>
                </PageContainer>
            </ProLayout>
            <SettingDrawer
                pathname={pathname}
                enableDarkTheme
                getContainer={() => document.getElementById('m-pro-layout')}
                settings={settings}
                onSettingChange={(changeSetting) => {
                    setSetting(changeSetting);
                }}
                disableUrlParams={false}
            />
        </div>
    );
};

export default BasicLayout;
