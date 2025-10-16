import { lazy } from "react";

export const LoadingPage = lazy(() => import("./Loading"));
export const LoginPage = lazy(() => import("./Login"));
export const RegisterPage = lazy(() => import("./Register"));
export const Home = lazy(() => import("./Home"));
export const NotFoundPage = lazy(() => import("./NotFound"));
export const Experiences = lazy(() => import("./Experiences"));
export const MedicPublications = lazy(() => import("./MedicPublications"));
export const Favourites = lazy(() => import("./Favourites"));
export const Publications = lazy(() => import("./Publications"));
export const Credentials = lazy(() => import("./Credentials"));
export const Validations = lazy(() => import("./Validations"));
