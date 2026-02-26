import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardPage,
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
    Component: DashboardPage,
  },
]);
