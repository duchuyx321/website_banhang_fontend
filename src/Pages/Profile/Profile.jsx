import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { Outlet } from 'react-router-dom';
import SidebarProfile from './components/SidebarProfile';

const cx = classNames.bind(styles);

function Profile({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <aside className={cx('sidebar')}>
          <SidebarProfile />
        </aside>
        <section className={cx('main')}>
          {children || <Outlet />}
        </section>
      </div>
    </div>
  );
}

export default Profile;
