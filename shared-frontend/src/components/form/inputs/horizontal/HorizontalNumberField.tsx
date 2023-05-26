import CustomNumberField, {
  CustomNumberFieldProps,
} from "../CustomNumberField";
import { StackProps, TypographyProps } from "@mui/material";

import HorizontalInput from "./HorizontalInput";

interface InternalHorizontalNumberFieldProps {
  label: string;
  containerProps?: StackProps;
  labelProps?: TypographyProps;
}

export type HorizontalNumberFieldProps = InternalHorizontalNumberFieldProps &
  CustomNumberFieldProps;

export default function HorizontalNumberField({
  label,
  containerProps,
  labelProps,
  ...props
}: HorizontalNumberFieldProps) {
  return (
    <HorizontalInput label={label} labelProps={labelProps} {...containerProps}>
      <CustomNumberField {...props} />
    </HorizontalInput>
  );
}
