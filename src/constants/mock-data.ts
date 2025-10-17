/**
 * @fileoverview Datos simulados para la aplicación
 *
 * Este archivo contiene todos los datos de ejemplo utilizados en la interfaz.
 * Modifica estos valores para personalizar la aplicación según tus necesidades.
 */

import { BookUp, Fingerprint, Handshake, ShieldUser } from "lucide-react";

/**
 * Información del usuario simulado
 *
 * @description Datos del usuario que se muestran en el sidebar y en el menú de usuario
 * @property {string} name - Nombre completo del usuario
 * @property {string} email - Correo electrónico del usuario
 * @property {string} avatar - Ruta o URL de la imagen de avatar del usuario
 */
export const MOCK_USER = {
  name: "Cristian González",
  email: "cristian.g@example.com",
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
    icon: BookUp,
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
 * @description Publicaciones de historias anónimas compartidas por usuarios con diabetes
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
      "Hoy cumplí 6 meses con mi glucosa controlada. Al principio me costó adaptarme a la nueva dieta y al monitoreo constante, pero ahora es parte de mi rutina diaria. Mi HbA1c bajó de 9.5 a 6.8. Si yo pude, tú también puedes.",
    likes: 42,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-15",
  },
  {
    id: 2,
    texto_historia:
      "Tuve una hipoglucemia fuerte esta semana. Me asusté mucho, pero aprendí a reconocer mejor las señales de mi cuerpo. Ahora siempre cargo mi glucómetro y snacks de emergencia. La diabetes nos enseña a escucharnos.",
    likes: 28,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-14",
  },
  {
    id: 3,
    texto_historia:
      "Llevo 2 años con diabetes tipo 1 y hoy corrí mi primera media maratón. Cuando me diagnosticaron pensé que mi vida deportiva había terminado. Aprendí a ajustar mi insulina y a comer correctamente antes del ejercicio. ¡Los sueños no se detienen con el diagnóstico!",
    likes: 156,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-10-13",
  },
  {
    id: 4,
    texto_historia:
      "Mi endocrinólogo me felicitó hoy por mi control. Bajé 15 kilos en 6 meses con dieta balanceada y caminatas diarias. Mi medicación se redujo a la mitad. La disciplina y el apoyo de mi familia fueron clave. Nunca es tarde para cuidarnos.",
    likes: 89,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-10-12",
  },
  {
    id: 5,
    texto_historia:
      "Hoy tuve antojos terribles de comer dulces. En lugar de ceder, me preparé un postre con edulcorante y frutas. Pequeñas victorias que me recuerdan que puedo disfrutar la vida sin comprometer mi salud. La diabetes no significa renunciar a todo.",
    likes: 63,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-11",
  },
  {
    id: 6,
    texto_historia:
      "Me uní a un grupo de apoyo para personas con diabetes y ha cambiado mi vida. Compartir recetas, consejos y experiencias con otros que entienden lo que vivo me da mucha fuerza. Ya no me siento solo en esta lucha diaria.",
    likes: 97,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-10-10",
  },
];

/**
 * Publicaciones médicas
 *
 * @description Publicaciones realizadas por profesionales médicos sobre diabetes
 * @property {string} id - Identificador único de la publicación
 * @property {string} title - Título de la publicación
 * @property {string} description - Descripción o contenido de la publicación
 * @property {string} date - Fecha de publicación
 * @property {string} author - Nombre del médico autor
 */
export const MOCK_PUBLICATIONS = [
  {
    id: "1",
    title: "Nuevas Tecnologías en Monitoreo Continuo de Glucosa",
    description:
      "Los sistemas de monitoreo continuo de glucosa (MCG) de última generación han demostrado reducir la HbA1c en un promedio de 0.8% y disminuir significativamente los episodios de hipoglucemia en pacientes con diabetes tipo 1 y tipo 2.",
    date: "2025-10-15",
    author: "Dr. Juan Pérez - Endocrinólogo",
  },
  {
    id: "2",
    title: "La Importancia del Ejercicio en el Control de la Diabetes",
    description:
      "Estudios recientes confirman que 150 minutos de ejercicio moderado por semana mejoran la sensibilidad a la insulina en un 40% y reducen el riesgo de complicaciones cardiovasculares en pacientes diabéticos.",
    date: "2025-10-14",
    author: "Dra. María García - Especialista en Medicina Deportiva",
  },
  {
    id: "3",
    title: "Alimentación y Diabetes: Mitos y Realidades",
    description:
      "La dieta mediterránea combinada con el control de carbohidratos muestra resultados prometedores en el manejo de la diabetes tipo 2, permitiendo a muchos pacientes reducir su medicación y mejorar su calidad de vida.",
    date: "2025-10-13",
    author: "Dr. Carlos López - Nutricionista Clínico",
  },
  {
    id: "4",
    title: "Prevención de Complicaciones en Diabetes",
    description:
      "El control riguroso de la glucemia, presión arterial y colesterol puede prevenir hasta el 70% de las complicaciones a largo plazo como retinopatía, neuropatía y enfermedad renal en pacientes diabéticos.",
    date: "2025-10-12",
    author: "Dra. Ana Martínez - Endocrinóloga",
  },
  {
    id: "5",
    title: "Insulinoterapia Avanzada y Bombas de Insulina",
    description:
      "Las bombas de insulina modernas con algoritmos de inteligencia artificial están revolucionando el tratamiento de la diabetes tipo 1, logrando un control glucémico superior al de las inyecciones múltiples diarias.",
    date: "2025-10-11",
    author: "Dr. Roberto Sánchez - Diabetólogo",
  },
];
