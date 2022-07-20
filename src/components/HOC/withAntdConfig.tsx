import React from 'react';
import { ConfigProvider } from 'antd';
import { ComponentType } from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';

moment.locale('zh-cn');

export default function withAntdConfig<Props>(
    WrappedComponent: ComponentType<Props>,
) {
    const Component: ComponentType<Props> = (props) => (
        <ConfigProvider locale={zhCN} autoInsertSpaceInButton>
            <WrappedComponent {...props} />
        </ConfigProvider>
    );

    Component.displayName = `withAntdConfig(${
        WrappedComponent.displayName || WrappedComponent.name
    })`;

    return Component;
}
