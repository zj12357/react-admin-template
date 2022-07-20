import React, { FC, Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from './components/Sider';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from '@/components/Loading';

import './index.scoped.scss';

const { Content } = Layout;
interface DefaultLayoutProps {}

// seo优化
const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    return (
        <Layout>
            <Sider></Sider>
            <Layout className="m-content-layout-box">
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
