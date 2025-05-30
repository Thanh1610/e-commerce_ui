import HomePage from '@/pages/Home/HomePage';
import ProductsPage from '@/pages/Products/ProductsPage';
import OrderPage from '@/pages/Order/OrderPage';
import Details from '@/pages/Details/Details';
import Section from '@/pages/Section/Section';
import Register from '@/pages/Register/Register';
import Login from '@/pages/Login/Login';
import config from '@/config';
import NotFoundPage from '@/pages/NotFound/ProductsPage';

export const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.products, component: ProductsPage },
    { path: config.routes.order, component: OrderPage },
    { path: config.routes.details, component: Details },
    { path: config.routes.section, component: Section },
    { path: config.routes.register, component: Register, layout: Register },
    { path: config.routes.login, component: Login, layout: Login },
    { path: config.routes.notfound, component: NotFoundPage, layout: NotFoundPage },
];
