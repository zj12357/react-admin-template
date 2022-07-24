import React, { FC, useState, Suspense } from 'react';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProLayout,
    SettingDrawer,
    PageLoading,
} from '@ant-design/pro-components';
import {
    Outlet,
    useNavigate,
    useLocation,
    Location,
    matchPath,
} from 'react-router-dom';
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

    //处理面包屑导航
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

    const flatBreadcrumbList = flatBeadcrumbTree(
        routeInfo.route.routes ?? [],
    ) as PageFlatBreadcrumbItem[];

    const getBreadcrumbs = (
        flattenRoutes: PageFlatBreadcrumbItem[],
        location: Location,
    ) => {
        let matches: PageFlatBreadcrumbItem[] = [];
        location.pathname

            .split('?')[0]
            .split('/')

            .reduce((prev, curSection) => {
                const pathSection = `${prev}/${curSection}`;

                const breadcrumb = getBreadcrumb(
                    flattenRoutes,
                    curSection,
                    pathSection,
                );

                matches.push(breadcrumb);

                return pathSection;
            });
        return matches;
    };

    const getBreadcrumb = (
        flattenRoutes: PageFlatBreadcrumbItem[],
        curSection: string,
        pathSection: string,
    ) => {
        const matchRoute = flattenRoutes.find((ele) => {
            const { breadcrumbName, path } = ele;
            if (!breadcrumbName || !path) {
                throw new Error(
                    'Router中的每一个route必须包含 `path` 以及 `breadcrumbName` 属性',
                );
            }
            return matchPath(pathSection, path);
        });

        if (matchRoute) {
            return {
                breadcrumbName: matchRoute.breadcrumbName || curSection,
                path: matchRoute.path,
            };
        }

        return {
            breadcrumbName: pathSection === '/' ? '首页' : curSection,
            path: pathSection,
        };
    };
    const breadcrumbList = getBreadcrumbs(flatBreadcrumbList, location);

    return (
        <div
            id="m-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                {...routeInfo}
                {...settings}
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
                        title: breadcrumbList[breadcrumbList.length - 1]
                            .breadcrumbName,
                        ghost: true,
                        breadcrumb: {
                            routes: breadcrumbList,
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
