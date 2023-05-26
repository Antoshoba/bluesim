import UserRole from "@j2w/common/dto/auth/UserRole";
import ScrollToTop from "@j2w/shared-frontend/components/ScrollToTop";
import AuthenticatedRoute from "@j2w/shared-frontend/guards/AuthenticatedRoute";
import { ModalContext } from "@j2w/shared-frontend/providers/ModalProvider";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import LoginPage from "../pages/auth/LoginPage";
import LogoutPage from "../pages/auth/LogoutPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/home/HomePage";
import routes from "./routes";

export default function AppRouter() {
  const { popup } = useContext(ModalContext);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.LOGOUT} element={<LogoutPage />} />
        <Route
          path={routes.ROOT}
          element={
            <AuthenticatedRoute
              role={UserRole.HRBP}
              fallbackRoute={routes.LOGIN}
            >
              <AppLayout />
            </AuthenticatedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path={routes.DASHBOARD} element={<DashboardPage />} />
        </Route>
      </Routes>
      {popup}
    </Router>
  );
}
