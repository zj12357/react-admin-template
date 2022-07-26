import React, { FC } from 'react';

type DashboardProps = {};

const Dashboard: FC<DashboardProps> = (props) => {
    console.log(props);
    return <div>I am Dashboard</div>;
};

export default Dashboard;
