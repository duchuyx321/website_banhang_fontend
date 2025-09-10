import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FaUser, FaLock, FaClipboardList, FaCog } from 'react-icons/fa';

import styles from './SidebarProfile.module.scss';
import ProfileAvatar from '../ProfileAvatar';
import InfoUser from '../InfoUser';

const cx = classNames.bind(styles);

const SIDEBAR_MENU = [
    {
        key: '',
        content: 'Thông tin cá nhân',
        icon: <FaUser />,
    },
    {
        key: 'security',
        content: 'Mật khẩu & bảo mật',
        icon: <FaLock />,
    },
    {
        key: 'orders',
        content: 'Lịch sử đơn hàng',
        icon: <FaClipboardList />,
    },
    {
        key: 'settings',
        content: 'Cài đặt',
        icon: <FaCog />,
    },
];

const user = {
    name: 'Đức Huy',
    role: 'Người dùng',
    status: true,
    avatarUrl: 'https://i.imgur.com/uR1LQhV.png',
};

function SidebarProfile() {
    const handleChangeAvatar = async (file) => {
        // Gọi API upload tại đây
        console.log('📤 Uploading file:', file);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatarBox')}>
                <ProfileAvatar
                    avatarUrl={user.avatarUrl}
                    onChangeAvatar={handleChangeAvatar}
                />
                <InfoUser
                    name={user.name}
                    role={user.role}
                    status={user.status}
                />
            </div>

            <nav className={cx('menu')}>
                {SIDEBAR_MENU.map((item) => (
                    <NavLink
                        key={item.key}
                        to={item.key ? `/profile/${item.key}` : '/profile'}
                        end
                        className={({ isActive }) =>
                            cx('menuItem', { active: isActive })
                        }
                    >
                        <div className={cx('icon')}>{item.icon}</div>
                        <div className={cx('label')}>{item.content}</div>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default SidebarProfile;
