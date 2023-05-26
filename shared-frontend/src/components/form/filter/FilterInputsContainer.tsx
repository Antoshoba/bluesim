import { Box, styled } from "@mui/material";
import { PropsWithChildren } from "react";

import CustomToolbar from "../../table/CustomToolbar";

const FilterInputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(1.5, 0.5),
  overflowX: "auto",
  "&.MuiBox-root > *": {
    margin: theme.spacing(1),
    maxWidth: 175,
    flexShrink: 0,
    minWidth: 150,
    "&.MuiDivider-root": {
      minWidth: "unset",
    },
    "&.search-field": {
      maxWidth: 320,
    },
  },
  "& .MuiInputBase-root": {
    borderRadius: 6,
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 2),
    },
  },
}));

export default function FilterInputsContainer({
  children,
}: PropsWithChildren<{}>) {
  return (
    <FilterInputContainer>
      {children}
      <CustomToolbar />
    </FilterInputContainer>
  );
}
