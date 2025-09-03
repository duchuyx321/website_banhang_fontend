import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { config } from '~/Config';

function ProtectedRoute({ children, role }) {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('AccessToken');

    if (!accessToken) {
        navigate(config.router.login);
        return null;
    }

    let profile = null;
    try {
        const token = accessToken.includes(' ')
            ? accessToken.split(' ')[1]
            : accessToken;
        profile = jwtDecode(token);
    } catch (err) {
        navigate(config.router.login);
        return null;
    }

    if (role && profile?.role !== role) {
        navigate(config.router.home);
        return null;
    }
    // Nếu user mà truy cập admin
    if (profile?.role === 'user' && role === 'admin') {
        navigate(config.router.home);
        return null;
    }

    // Nếu admin mà truy cập trang user
    if (profile?.role === 'admin' && role === 'user') {
        navigate(config.router.admin);
        return null;
    }
    return children;
}

export default ProtectedRoute;
