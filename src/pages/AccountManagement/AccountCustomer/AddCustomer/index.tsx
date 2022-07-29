import React, { FC } from 'react';
import {
    ModalForm,
    ProForm,
    ProFormText,
    ProFormUploadDragger,
    ProFormSelect,
    ProFormList,
    ProFormCheckbox,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

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
                style={{
                    maxHeight: '70vh',
                    overflowY: 'auto',
                }}
            >
                <ProForm.Group>
                    <ProFormUploadDragger
                        label="照片"
                        name="dragger"
                        action="upload.do"
                        description=""
                        title="点击或者拖动文件进行上传"
                        width={200}
                    />
                </ProForm.Group>
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
                        name="name"
                        label="上线户口"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="户名"
                        tooltip="最长为 24 位"
                        placeholder="请输入名称"
                    />
                    <ProFormText
                        width="md"
                        name="name"
                        label="上线户名"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSelect
                        name="select"
                        label="户口类型"
                        width="md"
                        valueEnum={{
                            open: '普通',
                            closed: '股东',
                        }}
                        placeholder="Please select a country"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your country!',
                            },
                        ]}
                    />
                    <ProFormSelect
                        name="select"
                        label="身份"
                        width="md"
                        valueEnum={{
                            open: '代理',
                            closed: '玩家',
                        }}
                        placeholder="Please select a country"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your country!',
                            },
                        ]}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="昵称"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                    <ProFormSelect
                        name="select"
                        label="身份"
                        width="md"
                        valueEnum={{
                            open: '代理',
                            closed: '玩家',
                        }}
                        placeholder="Please select a country"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your country!',
                            },
                        ]}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSelect
                        name="select"
                        label="性别"
                        width="md"
                        valueEnum={{
                            open: '男',
                            closed: '女',
                        }}
                        placeholder="Please select a country"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your country!',
                            },
                        ]}
                    />
                    <ProFormText
                        width="md"
                        name="name"
                        label="证件类型"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="生日"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                    <ProFormText
                        width="md"
                        name="name"
                        label="证件号"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="国籍"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                    <ProFormText
                        width="md"
                        name="name"
                        label="证件名"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="name"
                        label="地址"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                    <ProFormText
                        width="md"
                        name="name"
                        label="证件有效期"
                        placeholder="请输入名称"
                        tooltip="最长为 24 位"
                    />
                </ProForm.Group>
                <ProFormList
                    name="labels"
                    label="联系号码"
                    initialValue={[
                        {
                            value: '',
                            label: '',
                        },
                    ]}
                >
                    <ProForm.Group>
                        <ProForm.Group>
                            <ProFormText
                                width={100}
                                name="areaCode"
                                label="区号"
                                placeholder="区号"
                                tooltip="最长为 24 位"
                            />
                            <ProFormText
                                width={240}
                                name="name"
                                label="手机号码"
                                placeholder="请输入名称"
                                tooltip="最长为 24 位"
                            />
                        </ProForm.Group>
                        <ProForm.Group>
                            <ProFormCheckbox
                                name="checkbox"
                                label="中文"
                                width={40}
                            ></ProFormCheckbox>
                            <ProFormCheckbox
                                name="checkbox"
                                label="英文"
                                width={40}
                            ></ProFormCheckbox>
                            <ProFormCheckbox
                                name="checkbox"
                                label="仅收短信"
                                width={60}
                            ></ProFormCheckbox>
                        </ProForm.Group>
                    </ProForm.Group>
                </ProFormList>
            </ModalForm>
        </div>
    );
};

export default AddCustomer;
