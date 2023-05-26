import ScrollToTop from "@j2w/shared-frontend/components/ScrollToTop";
import TotalChart from "@j2w/shared-frontend/components/modules/charts/TotalChart";
import { ModalContext } from "@j2w/shared-frontend/providers/ModalProvider";
import { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import LoginPage from "../pages/auth/LoginPage";
import LogoutPage from "../pages/auth/LogoutPage";
import Dashboard from "../pages/blueSim/Dashboard";
import Nurse from "../pages/blueSim/Nurse";
import Residense from "../pages/blueSim/Residense";
import DashbordPages from "../pages/charts/DashboradPages";
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
            // <AuthenticatedRoute
            //   role={UserRole.HRBP}
            //   fallbackRoute={routes.LOGIN}
            // >
            <AppLayout />
            // </AuthenticatedRoute>
          }
        >
          <Route index element={<HomePage />} />
          {/* <Route path={routes.DASHBOARD} element={<DashboardPage />} /> */}
          <Route path={routes.DASHBOARD} element={<Dashboard />} />
          <Route path={routes.RESIDENSE} element={<Residense />} />
          <Route path={routes.NURSE} element={<Nurse />} />
          <Route path={routes.RESIDENT} element={<TotalChart />} />
          <Route path={routes.WARD} element={<DashbordPages />} />
        </Route>
      </Routes>
      {popup}
    </Router>
  );
}
