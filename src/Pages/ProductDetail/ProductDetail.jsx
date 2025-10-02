import { useState } from 'react';
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { Heart } from 'lucide-react';

const cx = classNames.bind(styles);

function ProductDetail() {
    // Danh sách ảnh
    const images = [
        '/images/bracelet1.png',
        '/images/bracelet2.png',
        '/images/bracelet3.png',
        '/images/bracelet4.png',
    ];

    // State quản lý ảnh lớn
    const [mainImage, setMainImage] = useState(images[0]);

    // State quản lý số lượng
    const [quantity, setQuantity] = useState(1);

    // State quản lý yêu thích
    const [isFavorite, setIsFavorite] = useState(false);

    // Hàm xử lý tăng giảm số lượng
    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className={cx('container')}>
            <button className={cx('backBtn')}>← Quay lại</button>

            <div className={cx('content')}>
                {/* Hình ảnh */}
                <div className={cx('imageSection')}>
                    <img
                        src={mainImage}
                        alt="product"
                        className={cx('mainImage')}
                    />

                    <div className={cx('thumbnailList')}>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="thumb"
                                className={cx('thumbnail', {
                                    active: mainImage === img,
                                })}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Thông tin sản phẩm */}
                <div className={cx('infoSection')}>
                    <h2 className={cx('title')}>Vòng tay đá mã não</h2>
                    <p className={cx('rating')}>⭐⭐⭐⭐☆ (12 đánh giá)</p>
                    <p className={cx('price')}>150.000đ</p>

                    <p className={cx('desc')}>
                        <b>Mô tả sản phẩm:</b> Vòng tay phong thủy từ đá mã não
                        tự nhiên
                    </p>

                    {/* Số lượng */}
                    <div className={cx('quantity')}>
                        <button onClick={handleDecrease}>-</button>
                        <input type="text" readOnly value={quantity} />
                        <button onClick={handleIncrease}>+</button>
                    </div>

                    {/* Nút thêm giỏ hàng & yêu thích */}
                    <div className={cx('actions')}>
                        <button className={cx('addToCartBtn')}>
                            🛒 Thêm vào giỏ hàng
                        </button>
                        <button
                            className={cx('favoriteBtn', {
                                active: isFavorite,
                            })}
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <Heart fill={isFavorite ? 'red' : 'none'} />
                        </button>
                    </div>

                    {/* Chính sách */}
                    <div className={cx('policies')}>
                        <p>🚚 Giao hàng miễn phí cho đơn hàng từ 300.000đ</p>
                        <p>↩️ Đổi trả dễ dàng trong vòng 7 ngày</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
