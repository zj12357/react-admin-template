import React, { FC } from 'react';
import './index.scoped.scss';

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = (props) => {
    return <div className="m-home-box">I am Welcome</div>;
};

export default Welcome;
