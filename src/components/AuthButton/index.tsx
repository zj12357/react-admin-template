import React, { FC, Fragment } from 'react';

type AuthButtonProps = {
    authId: 'read' | 'edit';
};

const AuthButton: FC<AuthButtonProps> = ({ children, authId }) => {
    return <Fragment> {authId === 'edit' && children}</Fragment>;
};

export default AuthButton;
