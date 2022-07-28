import React, { ComponentType, FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '@/store/user/userSlice';

// 权限控制,过滤当前页面的权限和按钮
export default function WithAuth<Props>(
    WrappedComponent: ComponentType<Props>,
) {
    const Component: FC<Props> = (props) => {
        const token = useSelector(selectToken);
        //获取对应的菜单权限
        const authMenu = [];
        const authButton = [];
        return (
            <Fragment>
                <WrappedComponent {...props} token={token} />
            </Fragment>
        );
    };

    Component.displayName = `WithAuth(${
        WrappedComponent.displayName || WrappedComponent.name
    })`;

    return Component;
}
