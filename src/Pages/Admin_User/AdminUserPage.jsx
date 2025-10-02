import classnames from 'classnames/bind';
import style from './AdminUserPage.module.scss';

const cx = classnames.bind(style);

function Admin_user() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h3 className={cx('heading')}>Quản lý người dùng</h3>
                    <button className={cx('addUserBtn')}>
                        + Thêm người dùng
                    </button>
                </div>

                <div className={cx('searchBar')}>
                    <input type="text" placeholder="Tìm kiếm người dùng..." />
                    <select>
                        <option value="all">Tất cả</option>
                        <option value="admin">Quản trị viên</option>
                        <option value="customer">Khách hàng</option>
                    </select>
                    <button>+ Tìm kiếm</button>
                </div>

                <div className={cx('tableWrapper')}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID Người dùng</th>
                                <th>Tên Người dùng</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Ngày đăng ký</th>
                                <th>trạng thái</th>
                                <th>Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#ND001</td>
                                <td>Nguyễn Văn A</td>
                                <td>nguyena@gmail.com</td>
                                <td>0344444789</td>
                                <td>10/05/2025</td>
                                <td>
                                    <span
                                        className={`${cx('status')} ${cx(
                                            'instock',
                                        )}`}
                                    >
                                        Còn hàng
                                    </span>
                                </td>
                                <td className={cx('actions')}>
                                    <button>Xem</button>
                                    <button>Sửa</button>
                                    <button>Xoá</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#ND002</td>
                                <td>Nguyễn Văn B</td>
                                <td>nguyenb@gmail.com</td>
                                <td>0299999789</td>
                                <td>27/06/2025</td>
                                <td>
                                    <span
                                        className={`${cx('status')} ${cx(
                                            'instock',
                                        )}`}
                                    >
                                        Còn hàng
                                    </span>
                                </td>
                                <td className={cx('actions')}>
                                    <button>Xem</button>
                                    <button>Sửa</button>
                                    <button>Xoá</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#ND003</td>
                                <td>Nguyễn Văn C</td>
                                <td>nguyenc@gmail.com</td>
                                <td>02888888789</td>
                                <td>10/02/2025</td>
                                <td>
                                    <span
                                        className={`${cx('status')} ${cx(
                                            'outofstock',
                                        )}`}
                                    >
                                        Hết hàng
                                    </span>
                                </td>
                                <td className={cx('actions')}>
                                    <button>Xem</button>
                                    <button>Sửa</button>
                                    <button>Xoá</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin_user;
