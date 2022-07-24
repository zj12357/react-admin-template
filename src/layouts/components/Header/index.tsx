import React, { FC } from 'react';
import { Avatar, Button, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
    return (
        <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
    );
};

export default Header;
