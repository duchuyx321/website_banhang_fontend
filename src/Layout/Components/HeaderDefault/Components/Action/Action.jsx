import classNames from 'classnames/bind';
import style from './Action.module.scss';
import { useEffect, useState } from 'react';
import Button from '~/Components/Button';

const cx = classNames.bind(style);
const menu_action_islogin = [
    { id: 'account', name: 'Tài Khoản' },
    { id: 'cart', name: 'Giỏ Hàng' },
];
const menu_action_notlogin = [
    { id: 'login', name: 'Đăng nhập' },
    { id: 'register', name: 'Đăng kí' },
];
function Action() {
    const [menuAction, setMenuAction] = useState(menu_action_islogin);
    useEffect(() => {
        const accessToken = localStorage.getItem('AccessToken');
        if (!accessToken) return setMenuAction(menu_action_notlogin);
    }, []);
    return (
        <div className={cx('wrapper')}>
            {menuAction.map((item) => (
                <Button
                    small
                    outline
                    key={item.id}
                    className={cx('btn_action')}
                >
                    {item.name}
                </Button>
            ))}
        </div>
    );
}

export default Action;
