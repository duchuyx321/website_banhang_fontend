import { config } from '~/Config';
// import layout
import AdminLayout from '~/Layout/AdminLayout';

//  import page
import Home from '~/Pages/Home';
import Admin_product from '~/Pages/Admin_product/AdminProductPage';
import Admin_user from '~/Pages/Admin_User/AdminUserPage';
import ProductDetail from '~/Pages/ProductDetail/ProductDetail';

//  public router
const PublicRouter = [
    { path: config.router.home, component: Home },
    {
        path: config.router.admin_product,
        component: Admin_product,
        layout: AdminLayout,
    },
    {
        path: config.router.admin_user,
        component: Admin_user,
        layout: AdminLayout,
    },
    {
        path: config.router.detailProduct, // '/product/:id'
        component: ProductDetail,
    },
];

// user router
const UserRouter = [];

// admin router
const AdminRouter = [];

export { PublicRouter, UserRouter, AdminRouter };
