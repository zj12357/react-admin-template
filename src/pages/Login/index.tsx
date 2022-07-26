import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { login, selectStatus } from '@/store/user/userSlice';

type LoginProps = {};

const Login: FC<LoginProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const loginStatus = useAppSelector(selectStatus);

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        dispatch(login());
    };

    useEffect(() => {
        if (loginStatus === 'success') {
            setTimeout(() => {
                navigate('/', { replace: true });
            }, 100);
        }
    }, [loginStatus]);
    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <LoginFormPage
                backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
                logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                title="Github"
                subTitle="全球最大的代码托管平台"
                activityConfig={{
                    style: {
                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                        color: '#fff',
                        borderRadius: 8,
                        backgroundColor: '#1677FF',
                    },
                    title: '活动标题，可配置图片',
                    subTitle: '活动介绍说明文字',
                    action: (
                        <Button
                            size="large"
                            style={{
                                borderRadius: 20,
                                background: '#fff',
                                color: '#1677FF',
                                width: 120,
                            }}
                        >
                            去看看
                        </Button>
                    ),
                }}
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
