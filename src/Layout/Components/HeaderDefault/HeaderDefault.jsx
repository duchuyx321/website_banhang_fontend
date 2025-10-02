import classNames from 'classnames/bind';
import style from './HeaderDefault.module.scss';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Action from './Components/Action';

const cx = classNames.bind(style);
function HeaderDefault() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <h3>ShopCart</h3>
            </div>
            <nav className={cx('navbar')}>
                <Navbar />
            </nav>
            <Search />
            <Action />
        </div>
    );
}

export default HeaderDefault;
