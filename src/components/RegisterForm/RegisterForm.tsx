import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const RegisterForm = () => (
    <div className="w-full rounded-lg bg-white p-6 shadow-md">
        <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label={
                    <span className="text-sm font-medium text-gray-800">
                        Username <span className="text-red-500">*</span>
                    </span>
                }
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input size="small" />
            </Form.Item>

            <Form.Item<FieldType>
                label={
                    <span className="text-sm font-medium text-gray-800">
                        Password <span className="text-red-500">*</span>
                    </span>
                }
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size="small" />
            </Form.Item>

            <div>
                Bạn đã có tài khoản? <Link to="/login">Đăng nhập </Link>
            </div>

            <Form.Item>
                <Button
                    color="danger"
                    variant="solid"
                    htmlType="submit"
                    className="mt-2 w-full rounded-md bg-red-500 font-medium text-white transition hover:bg-red-600"
                >
                    Đăng kí
                </Button>
            </Form.Item>
        </Form>
    </div>
);

export default RegisterForm;
