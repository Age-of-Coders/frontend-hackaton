/**
 * @fileoverview Datos simulados para la aplicación
 *
 * Este archivo contiene todos los datos de ejemplo utilizados en la interfaz.
 * Modifica estos valores para personalizar la aplicación según tus necesidades.
 */

import { Fingerprint, Handshake, HeartPulse, ShieldUser } from "lucide-react";

/**
 * Información del usuario simulado
 *
 * @description Datos del usuario que se muestran en el sidebar y en el menú de usuario
 * @property {string} name - Nombre completo del usuario
 * @property {string} email - Correo electrónico del usuario
 * @property {string} avatar - Ruta o URL de la imagen de avatar del usuario
 */
export const MOCK_USER = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

/**
 * Elementos de navegación principal
 *
 * @description Estructura de navegación principal del sidebar con sus subelementos
 * @property {string} title - Título del elemento de navegación
 * @property {string} url - URL de la ruta
 * @property {LucideIcon} icon - Icono de Lucide React
 * @property {boolean} isActive - Indica si el elemento está activo por defecto
 * @property {Array} items - Subelementos de navegación (opcional)
 */
export const MOCK_NAV_MAIN = [
  {
    title: "Conecta",
    icon: Handshake,
    isActive: true,
    items: [
      {
        title: "Experiencias",
        url: "/experiences",
      },
      {
        title: "Publicaciones médicas",
        url: "/medic-publications",
      },
      {
        title: "Favoritos",
        url: "/favourites",
      },
    ],
  },
  {
    title: "Publicaciones",
    url: "/publications",
    icon: HeartPulse,
  },
  {
    title: "Credenciales",
    url: "/credentials",
    icon: Fingerprint,
  },
  {
    title: "Validaciones",
    url: "/validations",
    icon: ShieldUser,
  },
];
