import React, { FC, useEffect } from 'react';
import { batch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectHome, homeAsync } from '@/store/home/homeSlice';
import ImageLazy from '@/components/ImageLazy';
import { useTranslation } from 'react-i18next';
import { initTheme } from '@/common/theme';
import { Button } from 'antd';
import './index.scoped.scss';

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    const home = useAppSelector(selectHome);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        // batch 同时触发多个dispatch
        // batch(() => {
        //     dispatch(homeAsync());
        //     dispatch(homeAsync());
        // });
        // dispatch(homeAsync());
        //错误捕获测试
        // const promise = new Promise((resolve, reject) => {
        //     reject();
        // });
        // promise.then();
    }, []);

    return (
        <div className="m-home-box">
            <div onClick={() => initTheme('dark')} className="m-home-theme">
                改变主题色dark
            </div>
            <div onClick={() => initTheme('light')} className="m-home-theme">
                改变主题色light
            </div>
            <Button type="primary">{t('app.menu.form')}</Button>
            <div className="m-home-theme-color">当前主题色</div>
            {Array(100)
                .fill('1')
                .map((_, index) => (
                    <ImageLazy
                        src="http://cos.mzhibo66.xyz/live/83010717435282.jpg"
                        key={index}
                        width={300}
                        height={400}
                    ></ImageLazy>
                ))}
        </div>
    );
};

export default Home;
