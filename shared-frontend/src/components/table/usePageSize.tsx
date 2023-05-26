import LocalStorageKeys from "@j2w/shared-frontend/enums/LocalStorageKeys";
import usePersistedState from "@j2w/shared-frontend/hooks/usePersistedState";
import {
  gridPageSizeSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function usePageSize(): [
  number,
  Dispatch<SetStateAction<number>>
] {
  const apiRef = useGridApiContext();
  const gridPageSize = useGridSelector(apiRef, gridPageSizeSelector);

  const [pageSize, setPageSize] = usePersistedState(
    LocalStorageKeys.PAGE_SIZE,
    5
  );

  useEffect(() => {
    if (pageSize !== gridPageSize) {
      apiRef.current.setPageSize(pageSize);
    }
  }, [apiRef, gridPageSize, pageSize]);

  return [pageSize, setPageSize];
}
