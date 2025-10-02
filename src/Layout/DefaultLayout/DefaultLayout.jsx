import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import HeaderDefault from '~/Layout/Components/HeaderDefault';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderDefault />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
