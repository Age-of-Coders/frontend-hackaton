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
    url: "/experiences",
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
    title: "Credenciales",
    url: "/credentials",
    icon: Fingerprint,
  },
  {
    title: "Publicaciones",
    url: "/publications",
    icon: HeartPulse,
  },
  {
    title: "Validaciones",
    url: "/validations",
    icon: ShieldUser,
  },
];

/**
 * Historias anónimas de usuarios
 *
 * @description Publicaciones de historias anónimas compartidas por usuarios
 * @property {number} id - Identificador único de la historia
 * @property {string} texto_historia - Contenido de la historia del usuario
 * @property {number} likes - Cantidad de likes recibidos
 * @property {boolean} isLiked - Indica si el usuario actual dio like
 * @property {boolean} isFavorite - Indica si está en favoritos del usuario actual
 * @property {string} fecha - Fecha de publicación
 */
export const MOCK_STORIES = [
  {
    id: 1,
    texto_historia:
      "Hoy cumplí 6 meses sin consumir. Ha sido el camino más difícil de mi vida, pero cada día que pasa me siento más fuerte. La terapia grupal me ha ayudado mucho, y saber que no estoy solo en esto hace toda la diferencia.",
    likes: 42,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-15",
  },
  {
    id: 2,
    texto_historia:
      "Recaí después de 3 meses limpio. Me siento devastado, pero mi terapeuta me recordó que la recuperación no es lineal. Voy a seguir intentándolo. No me voy a rendir.",
    likes: 28,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-14",
  },
  {
    id: 3,
    texto_historia:
      "Llevo un año sobrio y hoy me gradué de la universidad. Hace dos años pensaba que nunca lo lograría. Si yo pude, tú también puedes. No pierdas la esperanza.",
    likes: 156,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-10-13",
  },
  {
    id: 4,
    texto_historia:
      "Mi familia finalmente me habló después de meses sin contacto. Están orgullosos de mi progreso. Nunca pensé que volvería a escuchar esas palabras. La recuperación vale cada esfuerzo.",
    likes: 89,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-10-12",
  },
  {
    id: 5,
    texto_historia:
      "Hoy tuve un día muy difícil, los antojos fueron intensos. Pero en lugar de recaer, llamé a mi padrino y salí a correr. Pequeñas victorias que me recuerdan que sí puedo controlarlo.",
    likes: 63,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-11",
  },
  {
    id: 6,
    texto_historia:
      "Empecé a trabajar como voluntario en un centro de rehabilitación. Ayudar a otros que están pasando por lo mismo que yo pasé le da un nuevo sentido a mi vida. La recuperación también es dar de vuelta.",
    likes: 97,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-10-10",
  },
];
