import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import SidebarAdmin from '~/Layout/Components/SidebarAdmin';

const cx = classNames.bind(styles);

const AdminLayout = ({ children }) => {
    return (
        <div className={styles.adminLayout}>
            <div className={styles.sidebar}>
                <SidebarAdmin />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default AdminLayout;
