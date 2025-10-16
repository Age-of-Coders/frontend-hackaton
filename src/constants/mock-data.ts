/**
 * @fileoverview Datos simulados para la aplicación
 *
 * Este archivo contiene todos los datos de ejemplo utilizados en la interfaz.
 * Modifica estos valores para personalizar la aplicación según tus necesidades.
 */

import {
  BookOpen,
  Bot,
  LifeBuoy,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

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
    title: "Playground",
    url: "/playground",
    icon: SquareTerminal,
    // isActive: true,
    // items: [
    //   {
    //     title: "Historial",
    //     url: "/playground/history",
    //   },
    //   {
    //     title: "Destacados",
    //     url: "/playground/featured",
    //   },
    //   {
    //     title: "Configuración",
    //     url: "/playground/settings",
    //   },
    // ],
  },
  {
    title: "Models",
    url: "/models",
    icon: Bot,
    // items: [
    //   {
    //     title: "Genesis",
    //     url: "/models/genesis",
    //   },
    //   {
    //     title: "Explorer",
    //     url: "/models/explorer",
    //   },
    //   {
    //     title: "Quantum",
    //     url: "/models/quantum",
    //   },
    // ],
  },
  {
    title: "Documentación",
    url: "/documentation",
    icon: BookOpen,
    // items: [
    //   {
    //     title: "Introducción",
    //     url: "/documentation/intro",
    //   },
    //   {
    //     title: "Comenzar",
    //     url: "/documentation/getting-started",
    //   },
    //   {
    //     title: "Tutoriales",
    //     url: "/documentation/tutorials",
    //   },
    //   {
    //     title: "Registro de cambios",
    //     url: "/documentation/changelog",
    //   },
    // ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
    // items: [
    //   {
    //     title: "General",
    //     url: "/settings/general",
    //   },
    //   {
    //     title: "Equipo",
    //     url: "/settings/team",
    //   },
    //   {
    //     title: "Facturación",
    //     url: "/settings/billing",
    //   },
    //   {
    //     title: "Límites",
    //     url: "/settings/limits",
    //   },
    // ],
  },
];

/**
 * Elementos de navegación secundaria
 *
 * @description Elementos de navegación secundarios que aparecen al final del sidebar
 * @property {string} title - Título del elemento
 * @property {string} url - URL de la ruta
 * @property {LucideIcon} icon - Icono de Lucide React
 */
export const MOCK_NAV_SECONDARY = [
  {
    title: "Support",
    url: "/support",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "/feedback",
    icon: Send,
  },
];
