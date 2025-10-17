import axios from "axios";

// URL base de la API - ajusta según tu configuración
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const uploadCredential = async (file: File) => {
  try {
    // Crear FormData con el campo 'file' como espera el backend
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${API_BASE_URL}/files/certificate`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al subir la credencial";
      throw new Error(errorMessage);
    }
    throw error;
  }
};

export interface CredentialUploadResponse {
  message?: string;
  url?: string;
}
