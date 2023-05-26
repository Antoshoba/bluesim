import CustomTextField, { CustomTextFieldProps } from "../CustomTextField";
import { StackProps, TypographyProps } from "@mui/material";

import HorizontalInput from "./HorizontalInput";

interface HorizontalTextFieldProps {
  label: string;
  containerProps?: StackProps;
  labelProps?: TypographyProps;
}

export default function HorizontalTextField({
  label,
  containerProps,
  labelProps,
  ...props
}: HorizontalTextFieldProps & CustomTextFieldProps) {
  return (
    <HorizontalInput label={label} labelProps={labelProps} {...containerProps}>
      <CustomTextField {...props} />
    </HorizontalInput>
  );
}
