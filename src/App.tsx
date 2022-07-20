import React, { Fragment, Suspense, ComponentType } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RenderRouter from './router';
import store from './store';
import { compose } from '@reduxjs/toolkit';
import WithHelmet from './components/HOC/withHelmet';
import WithReduxProvider from './components/HOC/withReduxProvider';
import withErrorScreen from './components/ErrorScreen/withErrorScreen';
import withAntdConfig from './components/HOC/withAntdConfig';
import withOfflineMask from './components/HOC/withOfflineMask';
import { selectToken } from './store/user/userSlice';
import { useAppSelector } from '@/store/hooks';
import { useTheme } from '@/hooks';

const RouteComponent = (props: any) => {
    // props接收前面所有高阶组件传过来的值，按需传给要渲染的子组件
    const token = useAppSelector(selectToken);
    return (
        <Router>
            <RenderRouter></RenderRouter>
        </Router>
    );
};

// 从右到左依次执行
const renderer: (c: ComponentType) => ComponentType = compose(
    WithReduxProvider(store),
    withErrorScreen,
    WithHelmet,
    withOfflineMask,
    withAntdConfig,
);

const Main = renderer(RouteComponent);

function App() {
    const { themeSuccess } = useTheme();
    return themeSuccess ? <Main></Main> : <Fragment></Fragment>;
}

export default App;
