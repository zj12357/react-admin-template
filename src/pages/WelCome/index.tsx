import React, { FC } from 'react';
import './index.scoped.scss';

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = (props) => {
    console.log(props);
    return <div>I am Welcome</div>;
};

export default Welcome;
