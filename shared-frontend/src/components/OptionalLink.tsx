import { Link, To } from "react-router-dom";

import { PropsWithChildren } from "react";

interface OptionalLinkProps {
  to?: To;
}

export default function OptionalLink({
  to: action,
  children,
}: PropsWithChildren<OptionalLinkProps>) {
  if (action) {
    return <Link to={action}>{children}</Link>;
  }
  return <>{children}</>;
}
