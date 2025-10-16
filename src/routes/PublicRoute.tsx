import { useAuth } from '@/contexts/auth/auth-provider';
import { LoadingPage } from '@/pages';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <LoadingPage />;
    }

    // Si el usuario ya está autenticado, redirige al home
    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};