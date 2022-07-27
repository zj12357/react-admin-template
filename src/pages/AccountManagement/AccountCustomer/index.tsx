import React, { FC } from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Form, Input, Button } from 'antd';
import './index.scoped.scss';

type AccountCustomerProps = {};

const AccountCustomer: FC<AccountCustomerProps> = (props) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
                    <Button type="primary">新增户口</Button>
                </div>
            </div>
        </ProCard>
    );
};

export default AccountCustomer;
