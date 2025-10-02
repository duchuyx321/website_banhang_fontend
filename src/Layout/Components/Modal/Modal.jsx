import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={cx('overlay')}>
            <div className={cx('modal')}>
                <button className={cx('closeBtn')} onClick={onClose}>
                    ×
                </button>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
