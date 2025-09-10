import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';

const cx = classNames.bind(styles);

function InfoUser({
  name = 'User',
  role = 'Thành viên',
  status = true,
}) {
  return (
    <div className={cx('info')}>
      <div className={cx('status')}>
        <span className={cx('dot', { online: status })} />
        <span className={cx('text')}>
          {status ? 'Online' : 'Offline'}
        </span>
      </div>

      <h3 className={cx('name')}>{name}</h3>

      <p className={cx('role')}>
        Vai trò: <span className={cx('role-value')}>{role}</span>
      </p>
    </div>
  );
}

export default InfoUser;
