import classnames from 'classnames/bind';

import style from './Home.module.scss';

const cx = classnames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}></div>
        </div>
    );
}

export default Home;
