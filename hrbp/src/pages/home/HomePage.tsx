import { Navigate, useLocation } from "react-router-dom";

import routes from "@j2w/hrbp/routes/routes";

type LocationState = { from: string };

export default function HomePage() {
  const {
    pathname,
    state,
  }: { pathname: string; state: LocationState | undefined } = useLocation();

  if (state?.from && state.from !== pathname) {
    return <Navigate to={state.from} replace />;
  }

  return <Navigate to={routes.DASHBOARD} replace />;
}
