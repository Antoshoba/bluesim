import { Box, InputLabel, styled } from "@mui/material";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import MenuItem from "@mui/material/MenuItem";
import { ReactNode } from "react";

const MenuProps = {
  PaperProps: {
    style: {
      color: Colors.PRIMARY,
      border: `1px solid ${Colors.PRIMARY_DARK}`,
      boxShadow: `0px 2px 4px ${Colors.SHADOW}`,
      borderRadius: 6,
      background: Colors.MAIN_BACKGROUND,
      maxWidth: "300px",
    },
  },
};

const StyledInputLabel = styled(InputLabel)({
  backgroundColor: "inherit",
});

const StyledSelect = styled(Select)({
  color: Colors.PRIMARY,
  background: Colors.MAIN_BACKGROUND,
  borderRadius: 6,
  ".MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${Colors.PRIMARY_DARK}`,
  },
  ".MuiSelect-select": {
    display: "block",
    textOverflow: "ellipsis",
  },
});

const StyledMenuItem = styled(MenuItem)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 3,
  margin: 3,
  whiteSpace: "initial",
  "&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible": {
    background: Colors.SECONDARY_BACKGROUND,
    color: Colors.WHITE,
  },
});

export type DropdownValue = string | number | undefined;

export interface DropdownItem<T extends DropdownValue> {
  value: T;
  label: string;
  icon?: ReactNode;
}

interface InternalCustomDropdownProps<T extends DropdownValue> {
  label?: string;
  items: DropdownItem<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

export type CustomDropdownProps<T extends DropdownValue> =
  InternalCustomDropdownProps<T> & Omit<FormControlProps, "label" | "onChange">;

export default function CustomDropdown<T extends DropdownValue>({
  label,
  items,
  value,
  onChange,
  ...props
}: CustomDropdownProps<T>) {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange?.(event.target.value as T);
  };

  return (
    <FormControl fullWidth {...props} sx={{ minWidth: 175, ...props.sx }}>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect
        label={label}
        displayEmpty
        value={value ?? ""}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {items.map(({ label, value, icon }) => (
          <StyledMenuItem key={value ?? ""} value={value ?? ""}>
            {label}
            <Box component="span" ml={0.5}>
              {icon}
            </Box>
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
}
