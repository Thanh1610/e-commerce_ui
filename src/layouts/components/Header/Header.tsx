import { Col, Row, Input, Button, Tooltip } from 'antd';
import type { GetProps } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function Header() {
    type SearchProps = GetProps<typeof Input.Search>;
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    const { Search } = Input;
    return (
        <div>
            <Row className="bg-primary px-12 py-4 text-lg">
                <div className="container mx-auto my-0 flex items-center justify-between">
                    <Col span={6} className="text-left text-lg font-bold">
                        E-commerce
                    </Col>
                    <Col span={12}>
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    </Col>
                    <Col span={6}>
                        <div className="flex w-full justify-end gap-2">
                            <Button type="primary" color="default" shape="round" icon={<UserOutlined />}>
                                Login
                            </Button>

                            <Tooltip title="Cart">
                                <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
                            </Tooltip>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}

export default Header;
