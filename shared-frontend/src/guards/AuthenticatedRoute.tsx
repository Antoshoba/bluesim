import UserRole from "@j2w/common/dto/auth/UserRole";
import { PropsWithChildren, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

interface AuthenticatedRouteProps {
  role: UserRole;
  fallbackRoute: string;
}

export default function AuthenticatedRoute({
  role,
  fallbackRoute,
  children,
}: PropsWithChildren<AuthenticatedRouteProps>) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user || !user.roles.includes(role)) {
    return <Navigate to={fallbackRoute} state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
