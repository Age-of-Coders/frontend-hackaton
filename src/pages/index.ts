import { lazy } from "react";

export const LoadingPage = lazy(() => import("./Loading"));
export const LoginPage = lazy(() => import("./Login"));
export const RegisterPage = lazy(() => import("./Register"));
export const Home = lazy(() => import("./Home"));
export const NotFoundPage = lazy(() => import("./NotFound"));
export const Dashboard = lazy(() => import("./Dashboard"));
export const Playground = lazy(() => import("./Playground"));
export const Models = lazy(() => import("./Models"));
export const Documentation = lazy(() => import("./Documentation"));
export const Settings = lazy(() => import("./Settings"));
