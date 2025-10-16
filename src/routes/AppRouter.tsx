import { LoginPage, LoadingPage, RegisterPage, Home, NotFoundPage, Dashboard, Playground, Models, Documentation, Settings } from '@/pages';
import Layout from '@/components/Layout';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoute';
import { PrivateRoutes } from './PrivateRoute';

export const AppRouter = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route element={<PublicRoutes />} >
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<PrivateRoutes />} >
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/playground" element={<Playground />} />
                        <Route path="/models" element={<Models />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/settings" element={<Settings />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};