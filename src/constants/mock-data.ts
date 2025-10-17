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
  {
    id: 7,
    texto_historia:
      "Hoy logré mantener mis niveles estables todo el día. Usé un nuevo plan de comidas y funcionó perfecto. Pequeños ajustes marcan grandes diferencias. Me siento orgulloso de mis avances.",
    likes: 54,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-09",
  },
  {
    id: 8,
    texto_historia:
      "Volví a cocinar en casa y descubrí lo mucho que disfruto preparar mis propias comidas saludables. Controlar mis ingredientes me da tranquilidad y me conecta con mi bienestar.",
    likes: 38,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-10-08",
  },
  {
    id: 9,
    texto_historia:
      "Después de años evitando el gimnasio, hoy di mi primer paso. Caminé 20 minutos y terminé sonriendo. La salud no se trata de perfección, sino de constancia.",
    likes: 45,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-07",
  },
  {
    id: 10,
    texto_historia:
      "Mis niveles de glucosa se mantuvieron perfectos durante mi viaje. Aprendí a planificar mis comidas y a llevar mis medicamentos conmigo. Viajar con diabetes es posible si te preparas bien.",
    likes: 81,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-10-06",
  },
  {
    id: 11,
    texto_historia:
      "Hoy fue un mal día con mis niveles, pero en lugar de frustrarme, decidí anotar todo y aprender qué los alteró. Entendí que cada error es una oportunidad para mejorar.",
    likes: 22,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-05",
  },
  {
    id: 12,
    texto_historia:
      "Mi hijo de 10 años me ayudó a preparar mis comidas para la semana. Compartir este proceso con mi familia hace todo más fácil y bonito. La diabetes nos une más.",
    likes: 67,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-10-04",
  },
  {
    id: 13,
    texto_historia:
      "Hace un año me diagnosticaron. Hoy miro atrás y me siento orgulloso de todo lo que aprendí. No es fácil, pero he ganado conciencia, fuerza y amor propio.",
    likes: 102,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-10-03",
  },
  {
    id: 14,
    texto_historia:
      "Ayer fui a comer con amigos y logré disfrutar sin salirme del plan. Aprender a equilibrar la comida y la compañía es parte del proceso.",
    likes: 44,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-10-02",
  },
  {
    id: 15,
    texto_historia:
      "Por fin me animé a usar un sensor continuo de glucosa. Qué alivio poder monitorearme sin pincharme tanto. La tecnología también es una aliada en el control.",
    likes: 73,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-10-01",
  },
  {
    id: 16,
    texto_historia:
      "Aprendí que no todo se trata del azúcar, sino del equilibrio. Dormir bien, moverme más y cuidar mi mente también hacen maravillas en mis niveles.",
    likes: 59,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-09-30",
  },
  {
    id: 17,
    texto_historia:
      "Hoy cociné con mi abuela su receta favorita, pero adaptada a mi dieta. Saber que puedo mantener nuestras tradiciones sin descuidarme me hace feliz.",
    likes: 93,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-29",
  },
  {
    id: 18,
    texto_historia:
      "Esta mañana desperté con energía y sin picos de glucosa. Aprendí que una cena ligera y dormir bien hacen toda la diferencia.",
    likes: 37,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-28",
  },
  {
    id: 19,
    texto_historia:
      "Antes me daba miedo hablar de mi diabetes. Hoy lo compartí con mis compañeros de trabajo y recibí comprensión y apoyo. Romper el silencio libera.",
    likes: 80,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-09-27",
  },
  {
    id: 20,
    texto_historia:
      "Hoy mi médico me dijo que mis riñones están perfectos. Es una gran noticia después de tanto esfuerzo cuidando mi alimentación y medicación. La prevención funciona.",
    likes: 111,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-09-26",
  },
  {
    id: 21,
    texto_historia:
      "No todos los días son fáciles. Hoy tuve un pico alto y me sentí frustrado, pero respiré, caminé y logré estabilizarme. La paciencia es parte del tratamiento.",
    likes: 30,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-25",
  },
  {
    id: 22,
    texto_historia:
      "Hoy preparé una pizza casera con base de coliflor. ¡Deliciosa y apta para mis niveles! Comer saludable no tiene por qué ser aburrido.",
    likes: 64,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-09-24",
  },
  {
    id: 23,
    texto_historia:
      "Me di cuenta de que dormir poco altera mi glucosa más que comer algo dulce. Aprendí que descansar es una parte vital del control.",
    likes: 48,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-23",
  },
  {
    id: 24,
    texto_historia:
      "Hoy fui a nadar por primera vez en meses. Me sentí libre y fuerte. El ejercicio no solo mejora mi salud, también mi ánimo.",
    likes: 86,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-22",
  },
  {
    id: 25,
    texto_historia:
      "Mi pareja me sorprendió con una cena sin azúcar añadida. Me emocionó ver cómo mi entorno también cuida de mí. No estamos solos en esto.",
    likes: 120,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-09-21",
  },
  {
    id: 26,
    texto_historia:
      "Hoy decidí dejar de compararme con otros. Cada cuerpo y proceso es distinto. Lo importante es avanzar, aunque sea un paso a la vez.",
    likes: 50,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-20",
  },
  {
    id: 27,
    texto_historia:
      "Descubrí una app para registrar mis niveles y comidas. Me ayuda a entender patrones y evitar errores. La organización da poder.",
    likes: 61,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-19",
  },
  {
    id: 28,
    texto_historia:
      "Hace tres meses dejé las gaseosas por completo. Hoy mis análisis muestran una gran mejora. A veces los pequeños cambios logran grandes resultados.",
    likes: 92,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-18",
  },
  {
    id: 29,
    texto_historia:
      "Hoy cociné para mis amigos y todos quedaron encantados con mis versiones saludables. Se puede comer rico y cuidar la glucosa al mismo tiempo.",
    likes: 47,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-09-17",
  },
  {
    id: 30,
    texto_historia:
      "Aprendí a medir mis porciones sin obsesionarme. Ahora disfruto de mis comidas con más calma y sin culpa.",
    likes: 33,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-16",
  },
  {
    id: 31,
    texto_historia:
      "Mi nutricionista me enseñó a leer etiquetas y descubrí cuántos productos tenían azúcar oculta. Estar informado es empoderarse.",
    likes: 58,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-15",
  },
  {
    id: 32,
    texto_historia:
      "Hoy celebré mi cumpleaños con una torta sin azúcar. Todos comieron y nadie notó la diferencia. Cuidarse también puede ser delicioso.",
    likes: 74,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-14",
  },
  {
    id: 33,
    texto_historia:
      "Me animé a hablar con un psicólogo sobre mi ansiedad por la comida. Entendí que cuidar mi mente es tan importante como cuidar mi cuerpo.",
    likes: 79,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-09-13",
  },
  {
    id: 34,
    texto_historia:
      "Hoy tuve una revisión y mi presión está perfecta. Los cambios en mi alimentación realmente están dando frutos.",
    likes: 40,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-12",
  },
  {
    id: 35,
    texto_historia:
      "Al principio me costaba decir que no a ciertos alimentos. Hoy me siento en control y eso me da libertad. No es restricción, es elección.",
    likes: 68,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-09-11",
  },
  {
    id: 36,
    texto_historia:
      "He aprendido que la diabetes no me define. Es solo una parte de mi vida, no toda mi identidad.",
    likes: 84,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-10",
  },
  {
    id: 37,
    texto_historia:
      "Mi control fue tan bueno que mi médico redujo mi dosis de insulina. Es un logro que me motiva a seguir adelante.",
    likes: 101,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-09-09",
  },
  {
    id: 38,
    texto_historia:
      "Hoy mi hija me dijo: ‘papá, te veo más feliz’. Creo que eso resume todo mi esfuerzo por cuidarme.",
    likes: 134,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-08",
  },
  {
    id: 39,
    texto_historia:
      "Cada vez entiendo mejor mi cuerpo. La autoconfianza que me da manejar mi diabetes me hace sentir fuerte.",
    likes: 52,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-07",
  },
  {
    id: 40,
    texto_historia:
      "Hoy recibí mis resultados y todo está estable. Ver mi progreso me llena de gratitud. Cada día cuenta.",
    likes: 77,
    isLiked: false,
    isFavorite: true,
    fecha: "2025-09-06",
  },
  {
    id: 41,
    texto_historia:
      "Un amigo me pidió consejos para mejorar su alimentación. Nunca imaginé que mi experiencia serviría para inspirar a otros.",
    likes: 70,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-09-05",
  },
  {
    id: 42,
    texto_historia:
      "Hoy tuve un día difícil, pero decidí escribir lo que siento en lugar de comer por ansiedad. Aprender nuevas formas de cuidar mis emociones me ayuda mucho.",
    likes: 41,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-04",
  },
  {
    id: 43,
    texto_historia:
      "Estoy ahorrando para una bomba de insulina. Me emociona pensar en lo mucho que mejorará mi calidad de vida.",
    likes: 82,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-09-03",
  },
  {
    id: 44,
    texto_historia:
      "Hoy llevé mi almuerzo al trabajo por primera vez. Comer casero me ayudó a mantener mis niveles perfectos. Es un hábito que quiero conservar.",
    likes: 66,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-09-02",
  },
  {
    id: 45,
    texto_historia:
      "Aprendí a perdonarme por los días en que no todo sale bien. Ser amable conmigo mismo también es parte del tratamiento.",
    likes: 95,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-09-01",
  },
  {
    id: 46,
    texto_historia:
      "Hoy caminé al trabajo en lugar de tomar el bus. No solo bajé mis niveles, también despejé mi mente. Pequeños cambios, grandes beneficios.",
    likes: 58,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-08-31",
  },
  {
    id: 47,
    texto_historia:
      "Logré bajar mi HbA1c a 6.5. Ver esos números me motiva muchísimo. El esfuerzo vale la pena.",
    likes: 115,
    isLiked: true,
    isFavorite: false,
    fecha: "2025-08-30",
  },
  {
    id: 48,
    texto_historia:
      "Hoy fui al nutricionista y me ayudó a ajustar mis comidas para el trabajo. Me siento más preparado para mantener mis niveles estables durante el día.",
    likes: 53,
    isLiked: false,
    isFavorite: false,
    fecha: "2025-08-29",
  },
  {
    id: 49,
    texto_historia:
      "Después de muchos meses, volví a sentirme bien conmigo mismo. La diabetes me enseñó a cuidar de mí con amor y paciencia.",
    likes: 121,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-08-28",
  },
  {
    id: 50,
    texto_historia:
      "Hoy agradezco todo lo que aprendí desde mi diagnóstico. No fue el fin, fue un nuevo comienzo lleno de conciencia y amor propio.",
    likes: 144,
    isLiked: true,
    isFavorite: true,
    fecha: "2025-08-27",
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
  {
    id: "6",
    title: "La Fuerza del Apoyo Social en el Manejo de la Diabetes",
    description:
      "Los grupos de apoyo y comunidades online mejoran la adherencia al tratamiento y reducen los síntomas de depresión en personas con diabetes, según la Asociación Internacional de Psicología de la Salud.",
    date: "2025-10-10",
    author: "Lic. Laura Benítez - Psicóloga Sanitaria",
  },
  {
    id: "7",
    title: "Cómo el Sueño Afecta tus Niveles de Glucosa",
    description:
      "Dormir menos de 6 horas por noche puede aumentar la resistencia a la insulina y elevar los niveles de glucosa en sangre, incluso en personas sin diabetes, advierten estudios recientes.",
    date: "2025-10-09",
    author: "Dr. Andrés Molina - Especialista en Medicina del Sueño",
  },
  {
    id: "8",
    title: "Planificación de Comidas Saludables: Clave del Control",
    description:
      "La preparación anticipada de comidas ayuda a evitar picos glucémicos y mejora la adherencia al tratamiento, favoreciendo un estilo de vida más equilibrado y sostenible.",
    date: "2025-10-08",
    author: "Lic. Julieta Ríos - Nutricionista",
  },
  {
    id: "9",
    title: "Beneficios del Ejercicio de Baja Intensidad en Diabetes",
    description:
      "Actividades como caminar, nadar o hacer yoga pueden mejorar la glucosa posprandial y reducir el estrés, siendo una excelente opción para personas con movilidad limitada.",
    date: "2025-10-07",
    author: "Dra. Sofía Herrera - Medicina del Deporte",
  },
  {
    id: "10",
    title: "Viajar con Diabetes: Consejos para Mantener el Control",
    description:
      "Planificar horarios, conservar insulina a la temperatura adecuada y llevar siempre glucómetros y snacks son pasos esenciales para disfrutar de un viaje sin sobresaltos.",
    date: "2025-10-06",
    author: "Dr. Pablo Fernández - Diabetólogo Clínico",
  },
  {
    id: "11",
    title: "Aprender de los Errores: El Valor del Registro Diario",
    description:
      "Llevar un registro detallado de comidas, actividad y glucosa permite identificar patrones y tomar decisiones más precisas junto al equipo médico.",
    date: "2025-10-05",
    author: "Lic. Valeria Domínguez - Educadora en Diabetes",
  },
  {
    id: "12",
    title: "El Rol de la Familia en el Control de la Diabetes",
    description:
      "El apoyo familiar se asocia a un mejor control glucémico y una mayor motivación en el tratamiento. Involucrar a los seres queridos marca la diferencia.",
    date: "2025-10-04",
    author: "Dr. Esteban Roldán - Endocrinólogo",
  },
  {
    id: "13",
    title: "Cumpliendo un Año desde el Diagnóstico: Qué Aprendemos",
    description:
      "Los primeros 12 meses tras el diagnóstico son clave para construir hábitos duraderos. El acompañamiento psicológico y educativo mejora la adaptación emocional.",
    date: "2025-10-03",
    author: "Lic. Natalia Suárez - Psicóloga de la Salud",
  },
  {
    id: "14",
    title: "Cómo Comer Fuera sin Pérdida de Control Glucémico",
    description:
      "Aprender a estimar porciones, elegir opciones bajas en carbohidratos y controlar tiempos entre comidas permite disfrutar sin descontrolar los niveles de azúcar.",
    date: "2025-10-02",
    author: "Lic. Martín Gómez - Nutricionista",
  },
  {
    id: "15",
    title: "Sensores de Glucosa: Un Avance en Libertad y Precisión",
    description:
      "Los sensores permiten conocer tendencias en tiempo real, evitando hipoglucemias y brindando seguridad al paciente. Se espera que su uso sea más accesible en los próximos años.",
    date: "2025-10-01",
    author: "Dra. Carolina Prieto - Endocrinóloga",
  },
  {
    id: "16",
    title: "Salud Integral: Más que Controlar el Azúcar",
    description:
      "El manejo de la diabetes debe incluir bienestar emocional, descanso adecuado y actividad física regular para un equilibrio verdadero.",
    date: "2025-09-30",
    author: "Dr. Daniel Vega - Médico Internista",
  },
  {
    id: "17",
    title: "Cocina Familiar y Tradición Saludable",
    description:
      "Adaptar recetas tradicionales sin perder sabor fomenta la adherencia a la dieta y promueve el vínculo familiar alrededor de la alimentación saludable.",
    date: "2025-09-29",
    author: "Chef Nutricional Paula Torres",
  },
  {
    id: "18",
    title: "La Relación entre el Descanso y el Control Metabólico",
    description:
      "Dormir bien ayuda a regular hormonas como la leptina y la grelina, lo que reduce antojos y mejora la sensibilidad a la insulina.",
    date: "2025-09-28",
    author: "Dr. Ignacio Cabrera - Especialista en Sueño y Metabolismo",
  },
  {
    id: "19",
    title: "Romper el Estigma: Hablar de Diabetes sin Miedo",
    description:
      "La educación y la visibilización son claves para reducir el estigma asociado a la diabetes. Hablar del tema fomenta la empatía y la comprensión social.",
    date: "2025-09-27",
    author: "Lic. Romina Duarte - Psicóloga Social",
  },
  {
    id: "20",
    title: "Cuidar los Riñones: Un Pilar en la Prevención",
    description:
      "Controlar la glucemia y la presión arterial reduce drásticamente el riesgo de nefropatía diabética. Realizar controles regulares es fundamental.",
    date: "2025-09-26",
    author: "Dr. Marcos Alarcón - Nefrólogo",
  },
  {
    id: "21",
    title: "Cómo Actuar ante un Pico de Glucosa",
    description:
      "Mantener la calma, hidratarse y registrar la causa probable son pasos clave para recuperar el control. El conocimiento previene la frustración.",
    date: "2025-09-25",
    author: "Lic. Gabriela Funes - Educadora en Diabetes",
  },
  {
    id: "22",
    title: "Comer Sano sin Sacrificios: Recetas Aprobadas",
    description:
      "Los postres con frutas frescas y edulcorantes naturales permiten disfrutar sin afectar los niveles de glucosa. La clave está en la moderación.",
    date: "2025-09-24",
    author: "Chef Saludable Mariana Duarte",
  },
  {
    id: "23",
    title: "El Impacto del Sueño Insuficiente en la Glucemia",
    description:
      "Dormir menos de lo necesario altera la regulación hormonal y aumenta los niveles de cortisol, lo que eleva la glucosa en sangre.",
    date: "2025-09-23",
    author: "Dr. Ricardo López - Endocrinólogo",
  },
  {
    id: "24",
    title: "Natación: Un Ejercicio Ideal para Personas con Diabetes",
    description:
      "Nadar favorece la circulación, mejora la sensibilidad a la insulina y reduce el estrés. Es recomendado para todas las edades.",
    date: "2025-09-22",
    author: "Dra. Alejandra Rivas - Médica Deportiva",
  },
  {
    id: "25",
    title: "El Valor del Acompañamiento Emocional",
    description:
      "Las relaciones cercanas y el afecto reducen el estrés y ayudan a mantener hábitos saludables, fundamentales para el control de la diabetes.",
    date: "2025-09-21",
    author: "Lic. Mariana Suárez - Psicóloga Clínica",
  },
  {
    id: "26",
    title: "Compararse Menos, Cuidarse Más",
    description:
      "Cada cuerpo reacciona diferente al tratamiento. Enfocarse en el propio progreso mejora la motivación y reduce la frustración.",
    date: "2025-09-20",
    author: "Lic. Daniela Fuentes - Coach de Bienestar",
  },
  {
    id: "27",
    title: "La Importancia de las Apps en el Seguimiento Diabético",
    description:
      "Las aplicaciones móviles ayudan a registrar datos, enviar alertas y mejorar la comunicación con el equipo médico. Una herramienta cada vez más utilizada.",
    date: "2025-09-19",
    author: "Ing. Clara Gutiérrez - Desarrolladora en Salud Digital",
  },
  {
    id: "28",
    title: "Reducir el Consumo de Gaseosas: Impacto Real",
    description:
      "Disminuir bebidas azucaradas por agua o infusiones reduce el riesgo de hiperglucemia y mejora el control del peso corporal.",
    date: "2025-09-18",
    author: "Dr. Martín Peralta - Nutricionista Clínico",
  },
  {
    id: "29",
    title: "Cocinar en Casa: Control y Bienestar",
    description:
      "Preparar comidas propias permite elegir ingredientes adecuados, evitar azúcares ocultos y mantener un control más preciso de la glucosa.",
    date: "2025-09-17",
    author: "Chef Nutricional Carla López",
  },
  {
    id: "30",
    title: "Porciones Inteligentes: Comer con Conciencia",
    description:
      "Medir porciones sin obsesión ayuda a disfrutar de los alimentos y mantener un equilibrio entre placer y salud.",
    date: "2025-09-16",
    author: "Lic. Patricia Cejas - Nutricionista",
  },
  {
    id: "31",
    title: "Leer Etiquetas: Una Habilidad Vital",
    description:
      "Comprender los componentes nutricionales de los alimentos permite tomar decisiones informadas y evitar el consumo excesivo de azúcares ocultos.",
    date: "2025-09-15",
    author: "Lic. Federico González - Nutricionista Educador",
  },
  {
    id: "32",
    title: "Celebraciones sin Excesos: Cómo Disfrutar con Equilibrio",
    description:
      "Es posible celebrar con comidas deliciosas y sin afectar los niveles de glucosa. Planificar con anticipación es la clave.",
    date: "2025-09-14",
    author: "Dra. Verónica Méndez - Endocrinóloga",
  },
  {
    id: "33",
    title: "Cuidar la Mente para Cuidar el Cuerpo",
    description:
      "La ansiedad y el estrés influyen directamente en los niveles de glucosa. La terapia psicológica y la meditación pueden ayudar al control emocional.",
    date: "2025-09-13",
    author: "Lic. Adriana Paredes - Psicóloga de la Salud",
  },
  {
    id: "34",
    title: "Presión Arterial y Diabetes: Una Relación Clave",
    description:
      "Controlar la presión arterial junto con la glucosa reduce drásticamente el riesgo de complicaciones cardiovasculares.",
    date: "2025-09-12",
    author: "Dr. Ernesto Ramírez - Cardiólogo",
  },
  {
    id: "35",
    title: "Disciplina y Motivación: Aliadas del Éxito",
    description:
      "La constancia en el tratamiento y la automotivación son factores determinantes en el mantenimiento de un buen control glucémico.",
    date: "2025-09-11",
    author: "Lic. Lorena Araya - Coach en Salud",
  },
  {
    id: "36",
    title: "La Diabetes No Define Quién Eres",
    description:
      "Vivir con diabetes no significa limitar los sueños. Aceptar el diagnóstico y seguir adelante permite desarrollar resiliencia y propósito.",
    date: "2025-09-10",
    author: "Lic. Fernando Cabrera - Psicólogo Clínico",
  },
  {
    id: "37",
    title: "Reducir Dosis de Insulina: Cuándo y Cómo Hacerlo",
    description:
      "Bajo supervisión médica, los ajustes de dosis son posibles cuando hay mejoras sostenidas en dieta, peso y actividad física.",
    date: "2025-09-09",
    author: "Dra. Valentina Díaz - Endocrinóloga",
  },
  {
    id: "38",
    title: "Motivación Familiar y Bienestar",
    description:
      "El apoyo emocional de la familia tiene un impacto positivo en la adherencia al tratamiento y en la calidad de vida del paciente.",
    date: "2025-09-08",
    author: "Lic. Elisa Torres - Trabajadora Social",
  },
  {
    id: "39",
    title: "Autoconocimiento Corporal y Control Eficaz",
    description:
      "Identificar las señales del cuerpo, como fatiga o cambios en el apetito, permite ajustar hábitos antes de que surjan desbalances glucémicos.",
    date: "2025-09-07",
    author: "Dra. Cecilia Herrera - Endocrinóloga",
  },
  {
    id: "40",
    title: "Evaluaciones Médicas Regulares: Tu Mejor Prevención",
    description:
      "Realizar controles cada tres meses es esencial para detectar complicaciones tempranas y ajustar tratamientos a tiempo.",
    date: "2025-09-06",
    author: "Dr. Gustavo Méndez - Clínico General",
  },
  {
    id: "41",
    title: "Inspirar a Otros: El Poder del Ejemplo",
    description:
      "Compartir experiencias positivas sobre la diabetes fomenta una cultura de cuidado y apoyo mutuo en la comunidad.",
    date: "2025-09-05",
    author: "Lic. Jimena Vargas - Educadora en Diabetes",
  },
  {
    id: "42",
    title: "Gestión del Estrés: Estrategias Útiles",
    description:
      "El manejo del estrés mediante respiración, escritura o mindfulness ayuda a estabilizar los niveles de glucosa y mejorar el bienestar general.",
    date: "2025-09-04",
    author: "Lic. Pablo Medina - Psicólogo",
  },
  {
    id: "43",
    title: "Bombas de Insulina: Inversión en Calidad de Vida",
    description:
      "Aunque el costo inicial puede ser alto, el uso de bombas de insulina mejora significativamente la estabilidad glucémica y la comodidad del paciente.",
    date: "2025-09-03",
    author: "Dr. Nicolás Ferreira - Diabetólogo",
  },
  {
    id: "44",
    title: "Almuerzos Saludables en el Trabajo",
    description:
      "Preparar y llevar tus propios almuerzos te da control sobre los ingredientes y te ayuda a mantener niveles de glucosa estables durante la jornada.",
    date: "2025-09-02",
    author: "Lic. Victoria Ponce - Nutricionista Laboral",
  },
  {
    id: "45",
    title: "Autocompasión en el Proceso de Control",
    description:
      "Aceptar los errores y aprender de ellos fortalece la adherencia al tratamiento. Ser amable contigo mismo también sana.",
    date: "2025-09-01",
    author: "Lic. Facundo Reyes - Psicólogo Cognitivo",
  },
  {
    id: "46",
    title: "Actividad Física Diaria: Pequeños Cambios, Grandes Logros",
    description:
      "Caminar o subir escaleras son hábitos sencillos que reducen la glucosa y mejoran el estado de ánimo.",
    date: "2025-08-31",
    author: "Lic. Valentina Díaz - Endocrinóloga",
  },
  {
    id: "47",
    title: "Lograr una HbA1c Óptima: Estrategias Efectivas",
    description:
      "Implementar cambios en la dieta, actividad física y adherencia al tratamiento puede ayudar a alcanzar niveles óptimos de HbA1c.",
    date: "2025-08-30",
    author: "Dra. Mariana López - Endocrinóloga",
  },
  {
    id: "48",
    title: "Ajustes Nutricionales para el Entorno Laboral",
    description:
      "Adaptar la alimentación en el trabajo es clave para mantener el control glucémico. Opta por snacks saludables y planifica tus comidas.",
    date: "2025-08-29",
    author: "Lic. Victoria Ponce - Nutricionista Laboral",
  },
  {
    id: "49",
    title: "Resiliencia y Diabetes: Superando Desafíos",
    description:
      "Desarrollar resiliencia es fundamental para enfrentar los desafíos de vivir con diabetes. Aprende a adaptarte y a encontrar apoyo en tu entorno.",
    date: "2025-08-28",
    author: "Lic. Facundo Reyes - Psicólogo Cognitivo",
  },
  {
    id: "50",
    title: "Agradecimiento y Progreso en el Manejo de la Diabetes",
    description:
      "Reconocer los logros, por pequeños que sean, es vital para mantener la motivación y el compromiso con el tratamiento.",
    date: "2025-08-27",
    author: "Lic. Facundo Reyes - Psicólogo Cognitivo",
  },
];
