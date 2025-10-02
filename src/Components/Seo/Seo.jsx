import { Helmet } from 'react-helmet';
import images from '~/Assets/images';

function Seo({
    title = 'Website bán hàng - Trang chủ',
    description = 'Đây là trang chủ của website bán hàng',
    canonical = import.meta.env.VITE_HTTPS_FONTEND,
    image = images.noImage,
    noIndex = true,
} = {}) {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {canonical && <link rel="canonical" href={canonical} />}
            <meta
                name="robots"
                content={noIndex ? 'noindex, nofollow' : 'index, follow'}
            />
            <meta property="og:title" content={title} />
            {canonical && <meta property="og:url" content={canonical} />}
            {image && <meta property="og:image" content={image} />}
            {description && (
                <meta property="og:description" content={description} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
}

export default Seo;
