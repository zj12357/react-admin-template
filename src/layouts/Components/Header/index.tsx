import React, { FC } from 'react';
import { Avatar, Button, Dropdown, Menu, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, CodeOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store/hooks';
import { loginOut } from '@/store/user/userSlice';
import './index.scoped.scss';
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const userLoginOut = () => {
        dispatch(loginOut());
        navigate('/user/login');
    };
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: <span>重置密码</span>,
                    icon: <LockOutlined />,
                },
                {
                    key: '2',
                    label: <span>重置操作码</span>,
                    icon: <CodeOutlined />,
                },
                {
                    key: '3',
                    label: <span onClick={userLoginOut}>退出系统</span>,
                    icon: <LogoutOutlined />,
                },
            ]}
        />
    );
    return (
        <div className="m-header-box">
            <div className="m-header-search-commencement">
                <div className="m-header-search">
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="inline"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="输入户口名/户名/手机号/证件名进行查询"
                                style={{ width: '300px' }}
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="m-commencement-btn">
                    <Button type="primary">开工列表</Button>
                    <Button type="primary">来电</Button>
                </div>
            </div>

            <Dropdown overlay={menu}>
                <div className="header-avatar">
                    <Avatar
                        size={32}
                        src="https://joeschmoe.io/api/v1/random"
                    />
                    <span className="header-user-name">超级管理员</span>
                </div>
            </Dropdown>
        </div>
    );
};

export default Header;
