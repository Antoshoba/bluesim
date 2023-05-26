import { Box, BoxProps, Pagination, Stack, styled } from "@mui/material";
import {
  DataGrid,
  GridColumns,
  GridColumnVisibilityModel,
  GridEventListener,
  GridLinkOperator,
  gridPageCountSelector,
  gridPageSelector,
  GridRowParams,
  GridSelectionModel,
  GridSlotsComponent,
  GridSlotsComponentsProps,
  GridToolbar,
  GridValidRowModel,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { JSXElementConstructor, useCallback, useContext, useMemo } from "react";
import CustomDropdown, { DropdownItem } from "../form/inputs/CustomDropdown";

import { TableSelectionContext } from "@j2w/shared-frontend/providers/TableSelectionProvider";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";
import usePageSize from "./usePageSize";

const border = `1px solid ${Colors.PRIMARY_DARK}`;
const StyledDataGrid = styled(DataGrid)({
  "&.MuiDataGrid-root": {
    height: 550,
    border,
  },
  ".MuiDataGrid-cellCheckbox.MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  ".MuiPagination-ul": {
    "& li:nth-of-type(1) .MuiPaginationItem-root": {
      borderTopLeftRadius: 9,
      borderBottomLeftRadius: 9,
    },
    "& li:last-of-type .MuiPaginationItem-root": {
      borderTopRightRadius: 9,
      borderBottomRightRadius: 9,
    },
    "& .MuiPaginationItem-root": {
      margin: 0,
      borderRadius: 0,
      border,
      width: 48,
      height: 44,
      color: Colors.PRIMARY_LIGHT,
      "&.Mui-selected": {
        color: Colors.PRIMARY,
      },
      "&.Mui-disabled": {
        opacity: 1,
        "& > *": {
          opacity: 0.5,
        },
      },
      "& .MuiPaginationItem-icon": {
        color: Colors.PRIMARY,
        margin: 0,
      },
    },
  },
  ".MuiDataGrid-footerContainer": {
    borderTop: "none",
  },
  ".MuiDataGrid-columnHeaders": {
    border,
    borderLeft: "none",
    borderRight: "none",
    background: Colors.MAIN_BACKGROUND,
  },
}) as typeof DataGrid;

const PageSizeDropdown = styled(CustomDropdown<number>)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 9,
    "& .MuiSelect-select": {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
});

const initialState: GridInitialStateCommunity = {
  filter: {
    filterModel: {
      items: [],
      quickFilterLogicOperator: GridLinkOperator.Or,
    },
  },
};

const componentProps: GridSlotsComponentsProps = {
  toolbar: {
    showQuickFilter: true,
    quickFilterProps: { debounceMs: 500 },
  },
};

const rowsPerPage = [5, 10, 20];
const dropDownValues = rowsPerPage.map(
  (size): DropdownItem<number> => ({ label: size + " per page", value: size })
);

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const [pageSize, setPageSize] = usePageSize();

  return (
    <Stack
      width="100%"
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      paddingX={{ xs: 1, sm: 3 }}
      paddingY={2}
    >
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        count={pageCount}
        page={page + 1}
        onChange={(_, value) => apiRef.current.setPage(value - 1)}
      />
      <PageSizeDropdown
        fullWidth={false}
        items={dropDownValues}
        value={pageSize}
        onChange={setPageSize}
      />
    </Stack>
  );
}

interface DataGridTableProps<T extends GridValidRowModel> {
  tableData: T[];
  columns: GridColumns<T>;
  checkboxSelection?: boolean;
  Toolbar?: JSXElementConstructor<any>;
  visibleColumns?: GridColumnVisibilityModel;
  setVisibleColumns?: (columns: GridColumnVisibilityModel) => void;
  onRowClick?: GridEventListener<"rowClick">;
}

export type DataGridColumns<R extends GridValidRowModel> = GridColumns<R>;

export type DataGridColumnVisibilityModel = GridColumnVisibilityModel;

export type DateGridRowParams<R extends GridValidRowModel> = GridRowParams<R>;

export default function DataGridTable<T extends GridValidRowModel>({
  tableData,
  columns,
  checkboxSelection = true,
  Toolbar,
  visibleColumns,
  setVisibleColumns,
  onRowClick,
  ...props
}: DataGridTableProps<T> & BoxProps) {
  const { setSelectedRows, pageSize, setPageSize } = useContext(
    TableSelectionContext
  );

  const components = useMemo(
    (): Partial<GridSlotsComponent> => ({
      Pagination: CustomPagination,
      Toolbar: Toolbar ?? GridToolbar,
    }),
    [Toolbar]
  );

  const onSelectionModelChange = useCallback(
    (selection: GridSelectionModel) =>
      setSelectedRows?.(selection.map((rowId) => rowId.toString())),
    [setSelectedRows]
  );

  return (
    <Box overflow="auto" {...props}>
      <StyledDataGrid
        rows={tableData}
        columns={columns}
        checkboxSelection={checkboxSelection}
        pagination
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        rowsPerPageOptions={rowsPerPage}
        hideFooterSelectedRowCount
        components={components}
        onSelectionModelChange={onSelectionModelChange}
        columnVisibilityModel={visibleColumns}
        onColumnVisibilityModelChange={setVisibleColumns}
        initialState={initialState}
        onRowClick={onRowClick}
        componentsProps={componentProps}
      />
    </Box>
  );
}
