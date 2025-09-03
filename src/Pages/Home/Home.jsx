import classnames from 'classnames/bind';

import style from './Home.module.scss';

const cx = classnames.bind(style);

function Home() {
    return <div className={cx('wrapper')}>Home Page!</div>;
}

export default Home;
