import React, { FC, useState, Suspense, useEffect } from 'react';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import { useAppSelector } from '@/store/hooks';
import {
    selectDetailPagePath,
    selectDetailPageMenuList,
} from '@/store/common/commonSlice';
import Loading from '@/components/Loading';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Space, Tag } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import routeInfo from '@/config/route';
import proSettings from '@/config/defaultSettings';
import './index.scoped.scss';
import { ADMIN_NAME } from '@/common/constants';

type BasicLayoutProps = {};

const BasicLayout: FC<BasicLayoutProps> = (props) => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
        proSettings,
    );
    const navigate = useNavigate();
    const location = useLocation();
    const detailPagePath = useAppSelector(selectDetailPagePath);
    const detailPageMenuList = useAppSelector(selectDetailPageMenuList);

    return (
        <div
            id="m-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                route={
                    location.pathname === detailPagePath
                        ? detailPageMenuList
                        : routeInfo.route
                }
                {...settings}
                location={{
                    pathname: location.pathname,
                }}
                fixSiderbar
                fixedHeader
                title=""
                logo={
                    require('@/assets/images/icons/logo-large-icon.svg').default
                }
                menuFooterRender={(props) => {
                    return (
                        <div className="layout-footer">
                            <img
                                alt="logo"
                                src={
                                    require('@/assets/images/icons/logo-icon.svg')
                                        .default
                                }
                                className="layout-footer-logo"
                            />
                            <span>{!props?.collapsed && ADMIN_NAME}</span>
                        </div>
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
                menuHeaderRender={(logo, title, props) => {
                    if (location.pathname !== detailPagePath) {
                        return (
                            <div>
                                {logo}
                                {title}
                            </div>
                        );
                    }
                    if (props?.collapsed) {
                        return (
                            <Space>
                                <LeftOutlined
                                    style={{
                                        fontSize: 18,
                                        color: '#fff',
                                    }}
                                />
                            </Space>
                        );
                    }
                    return (
                        <Space direction="vertical">
                            <Button
                                icon={<LeftOutlined />}
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                返回应用列表
                            </Button>
                        </Space>
                    );
                }}
            >
                <PageContainer>
                    <Suspense fallback={<Loading />}>
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
                colorList={[
                    {
                        key: 'daybreak',
                        color: '#181818',
                    },
                ]}
                hideHintAlert
                hideCopyButton
            />
        </div>
    );
};

export default BasicLayout;
