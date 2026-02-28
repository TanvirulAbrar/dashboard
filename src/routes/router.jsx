import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";
import AllOverview from "../pages/AllOverview";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/alloverview",
        element: <AllOverview />,
      },
    ],
  },
]);
