import { useLocation } from "react-router";

export default function useQueryParam(param: string) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(param);
}
