import React, { FC, Suspense } from 'react';
import { RouteProps } from 'react-router';
import PrivateRoute from './privateRoute';
import { PageLoading } from '@ant-design/pro-components';

export interface WrapperRouteProps extends RouteProps {
    /** document title id */
    titleId: string;
    /** authorization？ */
    auth?: boolean;
}

const PublicRoute = (props: any) => {
    return props.element;
};

const WrapperRouteComponent: FC<WrapperRouteProps> = ({
    titleId,
    auth,
    ...props
}) => {
    const WitchRoute = auth ? PrivateRoute : PublicRoute;
    if (titleId) {
        document.title = titleId;
    }

    return <WitchRoute {...props} />;
};

const WrapperRouteWithOutLayoutComponent: FC<WrapperRouteProps> = ({
    titleId,
    auth,
    ...props
}) => {
    if (titleId) {
        document.title = titleId;
    }

    return <Suspense fallback={<PageLoading />}>{props.element}</Suspense>;
};

export { WrapperRouteComponent, WrapperRouteWithOutLayoutComponent };
