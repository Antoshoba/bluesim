import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { styled } from "@mui/material";

const StyledGridToolbarQuickFilter = styled(GridToolbarQuickFilter)({
  padding: 0,
});

const quickFilterParser = (searchInput: string) =>
  searchInput
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "");

interface TableSearchFilterProps {
  placeholder: string;
}

export default function TableSearchFilter({
  placeholder,
}: TableSearchFilterProps) {
  return (
    <StyledGridToolbarQuickFilter
      variant="outlined"
      fullWidth
      className="search-field"
      placeholder={placeholder}
      quickFilterParser={quickFilterParser}
    />
  );
}
