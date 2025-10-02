import { GET } from '~/Util/HttpsRequest';

export const getProducts = async () => {
    try {
        const res = await GET({ path: '/products' });
        return res.data; // chỉ lấy data từ response
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
