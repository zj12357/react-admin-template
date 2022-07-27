import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/user/userSlice';
import { useHttp } from '@/hooks';
import { userLogin } from '@/api/user';
import { delay } from 'lodash';

type LoginProps = {};

const Login: FC<LoginProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { fetchData } = useHttp(userLogin);

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

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <LoginFormPage
                backgroundImageUrl={
                    require('@/assets/images/common/login-bg.png').default
                }
                logo={require('@/assets/images/common/login-logo.png').default}
                title="盈樂贵宾会"
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
