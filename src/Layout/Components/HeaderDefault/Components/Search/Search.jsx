import classNames from 'classnames/bind';
import style from './Search.module.scss';

const cx = classNames.bind(style);
function Search() {
    return (
        <div className={cx('wrapper')}>
            <input
                type="text"
                placeholder="Tìm sản phẩm, danh mục, thương hiệu"
            />
        </div>
    );
}

export default Search;
