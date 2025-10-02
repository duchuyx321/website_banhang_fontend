import classnames from 'classnames/bind';
import style from './AdminProductPage.module.scss';

import { useState, useEffect } from 'react';
import { getProducts } from '../../Api/productApi';
import Modal from '~/Layout/Components/Modal/Modal';

const cx = classnames.bind(style);

function Admin_product() {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAddProduct = () => {
        setSelectedProduct(null); // reset để thêm mới
        setIsModalOpen(true);
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h3 className={cx('heading')}>Quản lý sản phẩm</h3>
                    <button
                        className={cx('addProductBtn')}
                        onClick={handleAddProduct}
                    >
                        + Thêm sản phẩm
                    </button>
                </div>

                <div className={cx('searchBar')}>
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <select>
                        <option value="all">Tất cả </option>
                        <option value="category1">Danh mục 1</option>
                        <option value="category2">Danh mục 2</option>
                        <option value="category3">Danh mục 3</option>
                    </select>
                    <button className={cx('SearchBtn')}>Tìm kiếm</button>
                </div>
            </div>

            <div className={cx('tableWrapper')}>
                <table>
                    <thead>
                        <tr>
                            <th>ID Sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Tồn kho</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price.toLocaleString()} đ</td>
                                <td>{p.stock}</td>
                                <td>
                                    <span
                                        className={cx(
                                            'status',
                                            p.stock > 0
                                                ? 'instock'
                                                : 'outofstock',
                                        )}
                                    >
                                        {p.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
                                    </span>
                                </td>
                                <td className={cx('actions')}>
                                    <button
                                        onClick={() => handleEditProduct(p)}
                                    >
                                        Sửa
                                    </button>
                                    <button>Xoá</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Thêm / Sửa sản phẩm */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3>
                    {selectedProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}
                </h3>
                <form className={cx('form')}>
                    <input
                        type="text"
                        placeholder="Tên sản phẩm"
                        defaultValue={selectedProduct?.name || ''}
                    />
                    <input
                        type="number"
                        placeholder="Giá"
                        defaultValue={selectedProduct?.price || ''}
                    />
                    <input
                        type="number"
                        placeholder="Số lượng tồn kho"
                        defaultValue={selectedProduct?.stock || ''}
                    />
                    <button type="submit">
                        {selectedProduct ? 'Cập nhật' : 'Thêm mới'}
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default Admin_product;
