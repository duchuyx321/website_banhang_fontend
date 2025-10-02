import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Button({
    small = false,
    large = false,
    text = false,
    disable = false,
    primary = false,
    outline = false,
    leftIcon,
    rightIcon,
    className,
    to,
    href,
    onClick,
    children,
    ...passProps
} = {}) {
    let props = {
        onClick,
        ...passProps,
    };
    // delete event
    if (disable) {
        Object.keys(props).forEach((event) => {
            if (event.startsWith('on') && typeof props[event] === 'function') {
                delete props[event];
            }
        });
    }
    let Component = 'button';
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <h3 className={cx('title')}>{children}</h3>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
