import React, { FC, Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { PageLoading } from '@ant-design/pro-components';

const { Content } = Layout;

type UserLayoutProps = {};

const UserLayout: FC<UserLayoutProps> = (props) => {
    return (
        <Layout
            style={{
                height: '100vh',
            }}
        >
            <Content>
                <Suspense fallback={<PageLoading />}>
                    <Outlet></Outlet>
                </Suspense>
            </Content>
        </Layout>
    );
};

export default UserLayout;
