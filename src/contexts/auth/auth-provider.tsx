import { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AuthContextType, LoginCredentials, RegisterCredentials } from './auth-types';
import { authReducer, authInitialState } from './auth-reducer';
import { authService } from '../../api/auth-service';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    // Función para hacer registro
    const register = async (credentials: RegisterCredentials): Promise<void> => {
        dispatch({ type: 'AUTH_LOADING' });

        try {
            const user = await authService.register(credentials);
            dispatch({ type: 'AUTH_SUCCESS', payload: user });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            dispatch({ type: 'AUTH_ERROR', payload: errorMessage });
            throw error;
        }
    };

    // Función para hacer login
    const login = async (credentials: LoginCredentials): Promise<void> => {
        dispatch({ type: 'AUTH_LOADING' });

        try {
            const user = await authService.login(credentials);
            dispatch({ type: 'AUTH_SUCCESS', payload: user });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            dispatch({ type: 'AUTH_ERROR', payload: errorMessage });
            throw error;
        }
    };

    // Función para verificar el estado de autenticación
    const checkAuthStatus = async (): Promise<void> => {
        dispatch({ type: 'AUTH_LOADING' });

        try {
            const user = await authService.checkStatus();
            dispatch({ type: 'AUTH_SUCCESS', payload: user });
        } catch (error) {
            dispatch({ type: 'LOGOUT' });
        }
    };

    // Función para hacer logout
    const logout = async (): Promise<void> => {
        try {
            await authService.logout();
        } catch (error) {
            console.error('Error durante el logout:', error);
        } finally {
            dispatch({ type: 'LOGOUT' });
        }
    };

    // Verificar el estado de autenticación al montar el componente
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const value: AuthContextType = {
        ...state,
        login,
        register,
        logout,
        checkAuthStatus,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};

// Hook para verificar si el usuario tiene un rol específico
export const useRole = (requiredRole: 'user' | 'admin'): boolean => {
    const { user } = useAuth();
    return user?.role === requiredRole;
};

// Hook para verificar si el usuario es admin
export const useIsAdmin = (): boolean => {
    const { user } = useAuth();
    return user?.role === 'admin';
};
