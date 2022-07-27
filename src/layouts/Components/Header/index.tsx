import React, { FC } from 'react';
import { Avatar, Button, Space, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, CodeOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store/hooks';
import { loginOut } from '@/store/user/userSlice';
import './index.scoped.scss';
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
        <div>
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
