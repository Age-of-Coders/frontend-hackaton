import {
    LoginPage,
    LoadingPage,
    RegisterPage,
    Home,
    NotFoundPage,
    MedicPublications,
    Experiences,
    Favourites,
    Publications,
    Credentials,
    Validations
} from '@/pages';
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
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/medic-publications" element={<MedicPublications />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/credentials" element={<Credentials />} />
                        <Route path="/validations" element={<Validations />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};