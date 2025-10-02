import classNames from 'classnames/bind';
import styles from './SidebarAdmin.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('logo')}>Admin Panel</h2>
            <ul className={cx('menu')}>
                <li>
                    <NavLink
                        to="/admin"
                        className={({ isActive }) => cx({ active: isActive })}
                    >
                        Thống kê
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin_product"
                        className={({ isActive }) => cx({ active: isActive })}
                    >
                        Quản lý sản phẩm
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin_user"
                        className={({ isActive }) => cx({ active: isActive })}
                    >
                        Quản lý người dùng
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/orders"
                        className={({ isActive }) => cx({ active: isActive })}
                    >
                        Quản lý đơn hàng
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/categories"
                        className={({ isActive }) => cx({ active: isActive })}
                    >
                        Quản lý danh mục
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/payments"
                        className={({ isActive }) => cx({ active: isActive })}
                    >
                        Quản lý thanh toán
                    </NavLink>
                </li>
            </ul>
            <div className={cx('adminInfo')}>
                <p>Admin</p>
                <button>Đăng xuất</button>
            </div>
        </div>
    );
}

export default SidebarAdmin;
