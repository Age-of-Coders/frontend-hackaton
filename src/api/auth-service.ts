import axios from "axios";
import type { AxiosInstance } from "axios";
import type { LoginCredentials, User } from "../contexts/auth/auth-types";

// Configuración base de axios
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Crear instancia de axios con configuración base
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Importante para enviar/recibir cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de respuesta para manejar errores globalmente
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un estado fuera del rango 2xx
      const message = error.response.data?.message || error.message;
      throw new Error(message);
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      throw new Error("No se pudo conectar con el servidor");
    } else {
      // Algo pasó al configurar la petición
      throw new Error(error.message);
    }
  }
);

// Interfaces para las peticiones
interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// Interfaces para las respuestas del backend
interface LoginResponse {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
}

interface RegisterResponse {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
}

interface CheckStatusResponse {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
}

// Servicios de autenticación
export const authService = {
  /**
   * Registrar un nuevo usuario
   */
  register: async (registerData: RegisterData): Promise<User> => {
    const { data } = await apiClient.post<RegisterResponse>(
      "/api/auth/register",
      registerData
    );

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
    };
  },

  /**
   * Iniciar sesión con email y contraseña
   */
  login: async (credentials: LoginCredentials): Promise<User> => {
    const loginData: LoginData = {
      email: credentials.email,
      password: credentials.password,
    };

    const { data } = await apiClient.post<LoginResponse>(
      "/api/auth/login",
      loginData
    );

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
    };
  },

  /**
   * Verificar y refrescar el estado de autenticación
   */
  checkStatus: async (): Promise<User> => {
    const { data } = await apiClient.get<CheckStatusResponse>(
      "/api/auth/check-status"
    );

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
    };
  },

  /**
   * Cerrar sesión
   */
  logout: async (): Promise<void> => {
    await apiClient.post("/api/auth/logout");
  },
};

// Exportar también la instancia de axios por si se necesita para otros servicios
export { apiClient };
