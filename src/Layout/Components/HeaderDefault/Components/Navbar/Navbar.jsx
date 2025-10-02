import classNames from 'classnames/bind';

import style from './Navbar.module.scss';
import Button from '~/Components/Button';
import { config } from '~/Config';

const cx = classNames.bind(style);

const MENU_NAVBAR = [
    { name: 'Danh Mục' },
    { name: 'Khuyến Mãi' },
    { name: 'Bộ Sưu Tập' },
    { name: 'Blog' },
];

function Navbar() {
    return (
        <ul className={cx('wrapper')}>
            {MENU_NAVBAR.map((item, index) => (
                <li key={index}>
                    <Button
                        text
                        small
                        to={config.router.home}
                        className={cx('navbar')}
                    >
                        {item.name}
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Navbar;
