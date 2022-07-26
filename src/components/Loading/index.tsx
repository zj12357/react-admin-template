import React, { FC } from 'react';
import { PageLoading } from '@ant-design/pro-components';

type LoadingComponentProps = {};

const LoadingComponent: FC<LoadingComponentProps> = (props) => {
    return <PageLoading></PageLoading>;
};

export default LoadingComponent;
