import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectToken, userAsync } from '@/store/user/userSlice';
import './index.scoped.scss';

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = (props) => {
    console.log(props);
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const login = () => {
        dispatch(userAsync());
    };

    return (
        <div>
            I am Welcome {token}
            <button onClick={login}>登录</button>
        </div>
    );
};

export default Welcome;
