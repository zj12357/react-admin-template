/**
 * @description: 设置主题;
 * @param {*}
 * @return {*}
 * @author: Full
 */

import localforage from 'localforage';
import { initTheme } from '@/config/theme';

import { useEffect, useState } from 'react';

const useTheme = () => {
    const [themeSuccess, setThemeSuccess] = useState(false);
    useEffect(() => {
        //初始化主题色
        localforage
            .getItem('mtheme')
            .then((res: any) => {
                res ? initTheme(res) : initTheme('light');
            })
            .then(() => {
                setThemeSuccess(true);
            });
    }, []);
    return {
        themeSuccess,
        setThemeSuccess,
    };
};

export default useTheme;
