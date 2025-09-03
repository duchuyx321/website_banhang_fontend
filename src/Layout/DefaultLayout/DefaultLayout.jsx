import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return children;
}

export default DefaultLayout;
