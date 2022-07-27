import React, { FC, useState, Suspense } from 'react';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import Loading from '@/components/Loading';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import routeInfo from '@/config/route';
import proSettings from '@/config/defaultSettings';
import './index.scoped.scss';
import { key } from 'localforage';

type BasicLayoutProps = {};

const BasicLayout: FC<BasicLayoutProps> = (props) => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
        proSettings,
    );
    const navigate = useNavigate();
    const location = useLocation();

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
                            <span>{!props?.collapsed && '盈樂贵宾会'}</span>
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
                        key: 'okbet',
                        color: '#181818',
                    },
                ]}
            />
        </div>
    );
};

export default BasicLayout;
