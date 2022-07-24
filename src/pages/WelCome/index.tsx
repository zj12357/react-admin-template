import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, userAsync } from '@/store/user/userSlice';
import './index.scoped.scss';

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const login = () => {
        dispatch(userAsync());
    };

    return (
        <div className="m-home-box">
            I am Welcome {token}
            <button onClick={login}>登录</button>
        </div>
    );
};

export default Welcome;
