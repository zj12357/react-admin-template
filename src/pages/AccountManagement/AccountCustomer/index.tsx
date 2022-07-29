import React, { FC } from 'react';
import { ProCard } from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { Form, Input, Button } from 'antd';
import AddCustomer from '../AccountCustomer/AddCustomer';
import { setDetailPagePath } from '@/store/common/commonSlice';
import './index.scoped.scss';

type AccountCustomerProps = {};

const AccountCustomer: FC<AccountCustomerProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        toPage();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const toPage = () => {
        dispatch(
            setDetailPagePath({
                path: '/account/AccountSearchList',
                title: '返回户口搜索',
            }),
        );
        navigate('/account/AccountSearchList');
    };
    return (
        <ProCard
            style={{
                height: 'calc(100vh - 200px)',
            }}
        >
            <div className="m-account-customer-box">
                <div className="m-account-customer-logo">
                    <img
                        src={
                            require('@/assets/images/icons/logo-large-icon.svg')
                                .default
                        }
                        alt=""
                        className="m-logo"
                    />
                </div>
                <div className="m-account-customer-search">
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="inline"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="输入户口名/户名/手机号/证件名进行查询"
                                style={{ width: '500px' }}
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="m-account-add">
                    <AddCustomer></AddCustomer>
                </div>
            </div>
        </ProCard>
    );
};

export default AccountCustomer;
