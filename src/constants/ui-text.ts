/**
 * @fileoverview Textos y etiquetas de la interfaz de usuario
 *
 * Este archivo contiene todos los textos estáticos utilizados en la interfaz.
 * Centralizar estos textos facilita la internacionalización (i18n) y
 * el mantenimiento de copys consistentes en toda la aplicación.
 */

/**
 * Información de la compañía/empresa
 *
 * @description Datos de la empresa que se muestran en el header del sidebar
 * @property {string} name - Nombre de la compañía
 * @property {string} tier - Plan o nivel de suscripción (ej: "Enterprise", "Pro", "Free")
 */
export const COMPANY_INFO = {
  name: "Rénova",
  tier: "Hackaton",
};

/**
 * Textos del Breadcrumb
 *
 * @description Textos utilizados en el componente de navegación breadcrumb
 * @property {string} mainLabel - Texto principal del breadcrumb
 * @property {string} currentPage - Texto de la página actual
 */
export const BREADCRUMB_TEXT = {
  mainLabel: "Construyendo tu aplicación",
  currentPage: "Age of Coders",
};

/**
 * Textos del menú de usuario
 *
 * @description Etiquetas utilizadas en el dropdown del usuario
 */
export const USER_MENU_TEXT = {
  upgrade: "Actualizar a Pro",
  account: "Cuenta",
  billing: "Facturación",
  notifications: "Notificaciones",
  logout: "Cerrar sesión",
};

/**
 * Textos de accesibilidad
 *
 * @description Textos utilizados para mejorar la accesibilidad (screen readers)
 */
export const ACCESSIBILITY_TEXT = {
  toggle: "Alternar",
  more: "Más",
};
