import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Page1 = lazy(() => import("../pages/Page1"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/page1",
    element: <Page1 />,
  },

  {
    path: "*",
    element: <>Error</>,
  },
]);
