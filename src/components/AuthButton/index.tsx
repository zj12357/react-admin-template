import React, { FC, Fragment } from 'react';

type AuthButtonProps = {
    authId: 'add' | 'delete' | 'edit' | 'search'; //增删改查
};

const AuthButton: FC<AuthButtonProps> = ({ children, authId }) => {
    return <Fragment> {children}</Fragment>;
};

export default AuthButton;
