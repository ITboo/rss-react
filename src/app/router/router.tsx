import { createBrowserRouter } from "react-router-dom";

import { About } from "../../pages/About/About";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Layout } from "../layout/Layout";
import { ErrorBoundary } from "../providers/ErrorBoundary/ErrorBoundary";

export const routes = [
  {
    children: [],
    element: <Layout />,
    path: "/",
  },
  {
    element: <About />,
    path: "/about",
  },
  {
    element: <NotFound />,
    path: "*",
  },
].map((route) => ({
  ...route,
  element: (
    <ErrorBoundary fallback={<ErrorPage />}>{route.element}</ErrorBoundary>
  ),
}));

export const router = createBrowserRouter(routes);
