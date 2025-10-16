import { useAuth } from '@/contexts/auth/auth-provider';
import { LoadingPage } from '@/pages';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <LoadingPage />;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};