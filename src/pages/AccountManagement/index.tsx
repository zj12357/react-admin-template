import React, { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setDetailPagePath } from '@/store/common/commonSlice';
import './index.scoped.scss';

type AccountManagementProps = {};

const AccountManagement: FC<AccountManagementProps> = (props) => {
    console.log(props);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div>
            I am AccountManagement
            <Button
                onClick={() => {
                    dispatch(setDetailPagePath('/accountDetail'));
                    navigate('/accountDetail');
                }}
            >
                去详情页
            </Button>
        </div>
    );
};

export default AccountManagement;
