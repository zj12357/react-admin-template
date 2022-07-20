/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import React, { FC } from 'react';
import { Layout } from 'antd';
import './index.scoped.scss';

type FooterContentProps = {};
const { Footer } = Layout;

const FooterContent: FC<FooterContentProps> = (props) => {
    return <Footer className="m-footer-box">I am Index</Footer>;
};

export default FooterContent;
