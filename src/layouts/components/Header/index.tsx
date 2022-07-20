/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC } from 'react';
import { Layout } from 'antd';
import Tags from '../Tags';
import './index.scoped.scss';

type HeaderContentProps = {};
const { Header } = Layout;

const HeaderContent: FC<HeaderContentProps> = (props) => {
    return (
        <>
            <Header></Header>
            <Tags></Tags>
        </>
    );
};

export default HeaderContent;
