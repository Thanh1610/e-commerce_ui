import { Col, Row, Input, Button, Tooltip } from 'antd';
import type { GetProps } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import TypeProducts from '@/components/TypeProducts/TypeProducts';

function Header() {
    type SearchProps = GetProps<typeof Input.Search>;
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    const { Search } = Input;
    return (
        <div className="shadow">
            <Row className="bg-primary flex flex-col gap-2 px-12 py-4 text-lg">
                <div className="container mx-auto my-0 flex items-center justify-between">
                    <Col span={6} className="text-left text-lg font-bold">
                        E-commerce
                    </Col>
                    <Col span={12}>
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    </Col>
                    <Col span={6}>
                        <div className="ml-2 flex w-full justify-end gap-2">
                            <Button type="primary" color="default" shape="round" icon={<UserOutlined />}>
                                Đăng nhập
                            </Button>

                            <Tooltip title="Giỏ hàng">
                                <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
                            </Tooltip>
                        </div>
                    </Col>
                </div>
                <TypeProducts />
            </Row>
        </div>
    );
}

export default Header;
