import { Button } from 'antd';
import {
    MobileOutlined,
    LaptopOutlined,
    AppstoreAddOutlined,
    ClockCircleOutlined,
    TabletOutlined,
} from '@ant-design/icons';
import type { ReactNode } from 'react';

type Keyword = {
    label: string;
    icon: ReactNode;
};
const keywords: Keyword[] = [
    { label: 'điện thoại', icon: <MobileOutlined /> },
    { label: 'Laptop', icon: <LaptopOutlined /> },
    { label: 'Phụ kiện', icon: <AppstoreAddOutlined /> },
    { label: 'Smartwatch', icon: <ClockCircleOutlined /> },
    { label: 'Đồng hồ', icon: <ClockCircleOutlined /> },
    { label: 'Tablet', icon: <TabletOutlined /> },
];

function TypeProducts() {
    return (
        <div className="container mx-auto my-0 flex w-full items-center justify-center">
            {keywords.map((key) => (
                <Button key={key.label} type="primary" color="primary" variant="text" icon={key.icon}>
                    {key.label}
                </Button>
            ))}
        </div>
    );
}

export default TypeProducts;
