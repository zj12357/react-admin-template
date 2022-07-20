/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import { TranslationOutlined, SmileOutlined } from '@ant-design/icons';
import Tags from '../Tags';
import './index.scoped.scss';

type HeaderContentProps = {};
const { Header } = Layout;

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.antgroup.com"
                    >
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.aliyun.com"
                    >
                        2nd menu item (disabled)
                    </a>
                ),
                icon: <SmileOutlined />,
                disabled: true,
            },
            {
                key: '3',
                label: (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.luohanacademy.com"
                    >
                        3rd menu item (disabled)
                    </a>
                ),
                disabled: true,
            },
            {
                key: '4',
                danger: true,
                label: 'a danger item',
            },
        ]}
    />
);

const HeaderContent: FC<HeaderContentProps> = (props) => {
    return (
        <>
            <Header className="m-header-box">
                <nav className="m-nav-box">
                    <div className="m-nav-route-name">菜单</div>
                    <div className="m-user-dropdown">
                        <Dropdown overlay={menu}>
                            <div className="user-dropdown-content">
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                <span className="user-name">full</span>
                            </div>
                        </Dropdown>
                        <Dropdown overlay={menu}>
                            <div className="user-dropdown-content">
                                <div className="translation-icon">
                                    <TranslationOutlined
                                        style={{
                                            color: '#fff',
                                            fontSize: '20px',
                                            marginLeft: '10px',
                                        }}
                                    />
                                </div>
                            </div>
                        </Dropdown>
                    </div>
                </nav>
            </Header>
            <Tags></Tags>
        </>
    );
};

export default HeaderContent;
