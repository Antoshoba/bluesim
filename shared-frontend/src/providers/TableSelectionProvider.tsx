import { createContext, PropsWithChildren, useMemo, useState } from "react";

interface TableSelectionContextType {
  selectedRows: string[];
  pageSize: number;
  setSelectedRows?: (selectionModel: string[]) => void;
  setPageSize?: (size: number) => void;
}

export const TableSelectionContext = createContext<TableSelectionContextType>({
  selectedRows: [],
  pageSize: 10,
});

export default function TableSelectionProvider({
  children,
}: PropsWithChildren<{}>) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const value = useMemo(
    () => ({ selectedRows, setSelectedRows, pageSize, setPageSize }),
    [selectedRows, pageSize]
  );
  return (
    <TableSelectionContext.Provider value={value}>
      {children}
    </TableSelectionContext.Provider>
  );
}
