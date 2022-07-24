import React, { FC, useState, Suspense } from 'react';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProLayout,
    SettingDrawer,
    PageLoading,
} from '@ant-design/pro-components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import routeInfo from '@/config/route';
import { RouteIfoItemType } from '@/config/type';
import { PageBreadcrumbItem, PageFlatBreadcrumbItem } from './type';

type BasicLayoutProps = {};

const BasicLayout: FC<BasicLayoutProps> = (props) => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
        {},
    );
    const navigate = useNavigate();
    const location = useLocation();

    const flatBeadcrumbTree = (routeList: RouteIfoItemType[]): any[] => {
        return routeList.reduce(
            (prev: RouteIfoItemType[], item: RouteIfoItemType) => {
                let { routes = [] } = item;
                let newItem: PageBreadcrumbItem = {
                    path: item.path,
                    breadcrumbName: item.name,
                };
                if (Array.isArray(routes) && routes.length) {
                    return [...prev, newItem, ...flatBeadcrumbTree(routes)];
                } else {
                    return [...prev, newItem];
                }
            },
            [],
        );
    };

    const pageBreadcrumbList = flatBeadcrumbTree(
        routeInfo.route.routes ?? [],
    ) as PageFlatBreadcrumbItem[];

    console.log(pageBreadcrumbList, 1111);

    return (
        <div
            id="m-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                {...routeInfo}
                location={{
                    pathname: location.pathname,
                }}
                fixSiderbar
                fixedHeader
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
                        }}
                    >
                        {dom}
                    </div>
                )}
                rightContentRender={() => <Header></Header>}
            >
                <PageContainer
                    header={{
                        title: pageBreadcrumbList[pageBreadcrumbList.length - 1]
                            .breadcrumbName,
                        ghost: true,
                        breadcrumb: {
                            routes: pageBreadcrumbList,
                        },
                    }}
                >
                    <Suspense fallback={<PageLoading />}>
                        <Outlet></Outlet>
                    </Suspense>
                </PageContainer>
            </ProLayout>
            <SettingDrawer
                pathname={location.pathname}
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
