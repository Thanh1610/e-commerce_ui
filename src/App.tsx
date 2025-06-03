import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { publicRoutes } from './routes';
import MainLayout from './layouts/MainLayout/MainLayout';
import { Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';
import axios from 'axios';

export function App() {
    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}product/products`, {
                params: {
                    page: 2,
                    limit: 2,
                },
            });
            console.log('res: ', res.data.data);
        };

        fetchApi();
    }, []);
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : route.layout || MainLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
