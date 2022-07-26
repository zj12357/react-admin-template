import React, { FC } from 'react';
import { Button, Empty } from 'antd';

type EmptyProps = {};

const EmptyComponent: FC<EmptyProps> = (props) => {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
            description={
                <span>
                    Customize <a href="#API">Description</a>
                </span>
            }
        >
            <Button type="primary">Create Now</Button>
        </Empty>
    );
};

export default EmptyComponent;
