import React, { FC, Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from '@/layouts/components/Sider';
import Footer from '@/layouts/components/Footer';
import Header from '@/layouts/components/Header';
import Loading from '@/components/Loading';

import './index.scoped.scss';

const { Content } = Layout;
interface DefaultLayoutProps {}

// seo优化
const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    return (
        <Layout>
            <Sider></Sider>
            <Layout>
                <Header></Header>
                <Content className="m-content-box">
                    <Suspense fallback={<Loading></Loading>}>
                        <Outlet />
                    </Suspense>
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;
