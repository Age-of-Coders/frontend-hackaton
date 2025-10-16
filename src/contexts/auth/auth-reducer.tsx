import type { AuthState, AuthAction } from './auth-types';

export const authInitialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_LOADING':
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case 'AUTH_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            };

        case 'AUTH_ERROR':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: action.payload,
            };

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            };

        default:
            return state;
    }
};
