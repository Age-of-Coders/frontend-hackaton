import axios from "axios";

// URL base de la API - ajusta según tu configuración
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Interfaces para las respuestas
export interface ValidationRequest {
  id: string;
  certificateImageUrl: string;
  isVerified: boolean;
}

export const getAllValidationRequests = async (): Promise<
  ValidationRequest[]
> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/validate-medic`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al obtener las peticiones de validación";
      throw new Error(errorMessage);
    }
    throw error;
  }
};

export const acceptValidationRequest = async (certificateId: string) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/validate-medic/${certificateId}`,
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al aceptar la petición de validación";
      throw new Error(errorMessage);
    }
    throw error;
  }
};

export const rejectValidationRequest = async (certificateId: string) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/validate-medic/${certificateId}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al rechazar la petición de validación";
      throw new Error(errorMessage);
    }
    throw error;
  }
};
