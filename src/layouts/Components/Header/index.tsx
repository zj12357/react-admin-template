import React, { FC } from 'react';
import { Avatar, Button, Space, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store/hooks';
import { loginOut } from '@/store/user/userSlice';
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
                    label: <span>个人中心</span>,
                    icon: <UserOutlined></UserOutlined>,
                },
                {
                    key: '2',
                    label: <span onClick={userLoginOut}>登出</span>,
                    icon: <LogoutOutlined />,
                },
            ]}
        />
    );
    return (
        <div>
            <Dropdown overlay={menu}>
                <Avatar size={32} src="https://joeschmoe.io/api/v1/random" />
            </Dropdown>
        </div>
    );
};

export default Header;
