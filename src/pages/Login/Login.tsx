import { Modal } from 'antd';
import LoginForm from '@/components/LoginForm/LoginForm';
import { Link } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/50">
                <Modal title={null} open={true} footer={null} closable={false}>
                    <div className="text-xl font-bold">Xin chào,</div>
                    <p className="mb-4 text-gray-700">Đăng nhập hoặc Tạo tài khoản</p>
                    <div className="mb-2 flex w-full items-center justify-center">
                        <LoginForm />
                    </div>

                    <Link to="/">
                        <ArrowLeftOutlined className="mr-1" />
                        Quay lại
                    </Link>
                </Modal>
            </div>
        </>
    );
};

export default Login;
