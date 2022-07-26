import React, { FC, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectToken } from '@/store/user/userSlice';
import { login } from '@/store/user/userSlice';
import { useHttp } from '@/hooks';
import { userLogin } from '@/api/user';
import { delay } from 'lodash';
import { ADMIN_NAME } from '@/common/constants';
import { UserInfo, LoginParams } from '@/types/api/user';
import './index.scoped.scss';

type LoginProps = {};

const Login: FC<LoginProps> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const { fetchData } = useHttp<LoginParams, UserInfo>(userLogin);

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        dispatch(login());
        message.success('登录成功');
        // fetchData().then(() => {
        //     message.success('登录成功');
        //     dispatch(login());
        // });
        delay(() => {
            navigate('/', { replace: true });
        }, 100);
    };

    useEffect(() => {
        if (location.pathname === '/user/login' && token) {
            navigate('/', { replace: true });
        }
    }, [location.pathname]);

    return (
        <div
            style={{
                height: '100%',
            }}
            className="m-login-box"
        >
            <LoginFormPage
                backgroundImageUrl={
                    require('@/assets/images/common/login-bg.png').default
                }
                logo={require('@/assets/images/common/login-logo.png').default}
                title={ADMIN_NAME}
                subTitle="综合管理系统"
                onFinish={onFinish}
            >
                <ProFormText
                    name="username"
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={'prefixIcon'} />,
                    }}
                    placeholder={'用户名: admin or user'}
                    initialValue={'admin'}
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                />
                <ProFormText.Password
                    name="password"
                    fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={'prefixIcon'} />,
                    }}
                    placeholder={'密码: ant.design'}
                    initialValue={'admin'}
                    rules={[
                        {
                            required: true,
                            message: '请输入密码！',
                        },
                    ]}
                />
            </LoginFormPage>
        </div>
    );
};
export default Login;
