import { ChangeEvent, useCallback } from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormLabelProps,
} from "@mui/material";

import CustomLabel from "./CustomLabel";

interface CustomCheckboxProps {
  label: string;
  value: boolean;
  onChange?: (value: boolean) => void;
  checkboxProps?: CheckboxProps;
}

export default function CustomCheckbox({
  label,
  value,
  onChange,
  checkboxProps,
  ...props
}: CustomCheckboxProps & Omit<FormLabelProps, "label" | "onChange">) {
  const customOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.checked),
    [onChange]
  );

  return (
    <FormControlLabel
      {...props}
      control={
        <Checkbox
          checked={value}
          onChange={customOnChange}
          size="small"
          {...checkboxProps}
        />
      }
      label={<CustomLabel sx={{ userSelect: "none" }}>{label}</CustomLabel>}
    />
  );
}
