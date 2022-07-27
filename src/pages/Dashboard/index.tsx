import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setDetailPagePath } from '@/store/common/commonSlice';

type DashboardProps = {};

const Dashboard: FC<DashboardProps> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    console.log(props);
    const toPage = () => {
        dispatch(setDetailPagePath('/accountDetail/10000'));
        navigate('/accountDetail/10000');
    };
    return (
        <div>
            I am Dashboard
            <button onClick={toPage}>去详情页</button>
        </div>
    );
};

export default Dashboard;
