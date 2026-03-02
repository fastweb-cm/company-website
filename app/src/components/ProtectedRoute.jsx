import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children, role }) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
        return <Navigate to="/auth/login" replace />;
    }
    if (role === 'admin' && user.role !== 'admin') {
        return <Navigate to="/" replace />;
    }
    return children;
}