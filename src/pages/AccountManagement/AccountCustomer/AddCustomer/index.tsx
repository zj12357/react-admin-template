import React, { FC } from 'react';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { Button, message, Space } from 'antd';

type AddCustomerProps = {};

const AddCustomer: FC<AddCustomerProps> = (props) => {
    return (
        <div>
            <ModalForm
                trigger={<Button type="primary">新增户口</Button>}
                onFinish={async (values: any) => {
                    console.log(values);
                    message.success('提交成功');
                }}
                initialValues={{
                    name: '世界首富',
                    useMode: 'chapter',
                }}
                title="新增户口"
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="户口"
                        tooltip="最长为 24 位"
                        placeholder="请输入名称"
                    />
                    <ProFormText
                        width="md"
                        name="company"
                        label="上线户口"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
            </ModalForm>
        </div>
    );
};

export default AddCustomer;
